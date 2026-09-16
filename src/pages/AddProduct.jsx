import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  Sparkles,
  Check,
  Pencil,
  Save,
  LoaderCircle,
  Mic,
  IndianRupee
} from "lucide-react";

import {
  analyzeProduct,
  calculatePrice,
  createProduct,
  getMarketMatches
} from "../services/api";

import MarketMatchCard from "../components/MarketMatchCard";

export default function AddProduct() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [costs, setCosts] = useState({
    material: 180,
    labour: 250,
    time: 3,
    quantity: 50
  });

  const [customPrice, setCustomPrice] = useState("");
  const [saved, setSaved] = useState(false);

  const nav = useNavigate();

  // Handle image upload
  const upload = (e) => {
    const f = e.target.files?.[0];

    if (!f) return;

    setImage(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
    setSaved(false);
    setCustomPrice("");
  };

  // Analyse uploaded product
  const analyze = async () => {
    if (!image) {
      alert("Please upload a product image first.");
      return;
    }

    setLoading(true);

    try {
      const r = await analyzeProduct(image);

      setResult({
        ...r
      });

      // Set the initial editable selling price to the recommended price
      const newPricing = calculatePrice(
        costs.material,
        costs.labour,
        costs.time,
        costs.quantity
      );

      setCustomPrice(String(newPricing.recommended));
    } catch (error) {
      console.error(error);
      alert("Something went wrong while analysing the product.");
    } finally {
      setLoading(false);
    }
  };

  // Calculate pricing whenever cost inputs change
  const pricing = calculatePrice(
    costs.material,
    costs.labour,
    costs.time,
    costs.quantity
  );

  // Update AI-generated catalogue fields
  const updateResult = (field, value) => {
    setResult((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // Save product using artisan's final selected price
  const saveProduct = () => {
    if (!result) {
      alert("Please analyse your product first.");
      return;
    }

    const finalPrice = Number(customPrice);

    if (!finalPrice || finalPrice <= 0) {
      alert("Please enter a valid selling price.");
      return;
    }

    const p = createProduct({
      ...result,

      image:
        preview ||
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",

      // Save the artisan's final price
      price: finalPrice,

      minOrder: Number(costs.quantity),

      artisan:
        localStorage.getItem("ks_name") || "Sita Devi",

      location: "Jaipur"
    });

    setSaved(true);

    setTimeout(() => {
      nav(`/product/${p.id}`);
    }, 700);
  };

  return (
    <div className="workspace">
      <div className="page-intro">
        <span className="eyebrow">SMART CATALOGUING</span>

        <h1>
          Turn your craft into a professional catalogue.
        </h1>

        <p>
          Upload one product photo. The prototype AI will generate
          structured product information for you.
        </p>
      </div>

      <div className="catalog-layout">

        {/* LEFT SIDE — PRODUCT UPLOAD */}
        <div className="upload-card">

          <div className="upload-title">
            <Upload />

            <div>
              <h2>Product photo</h2>
              <p>JPG or PNG · Best with a clear front view</p>
            </div>
          </div>

          {preview ? (
            <img
              className="upload-preview"
              src={preview}
              alt="Product preview"
            />
          ) : (
            <label className="dropzone">
              <Upload size={30} />

              <b>Drop your product image here</b>

              <span>or click to browse</span>

              <input
                type="file"
                accept="image/*"
                onChange={upload}
              />
            </label>
          )}

          {preview && !result && (
            <button
              className="btn btn-primary full"
              onClick={analyze}
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle className="spin" />
                  Analyzing your craft...
                </>
              ) : (
                <>
                  <Sparkles />
                  Analyze with AI
                </>
              )}
            </button>
          )}

          {preview && (
            <label className="small-upload">
              Choose another image

              <input
                type="file"
                accept="image/*"
                onChange={upload}
              />
            </label>
          )}

          <div className="voice-hint">
            <Mic size={16} />

            <span>
              Voice input can make product details easier for artisans.
            </span>
          </div>
        </div>


        {/* RIGHT SIDE — AI RESULT */}
        <div className="ai-card">

          {/* BEFORE AI ANALYSIS */}
          {!result && !loading && (
            <div className="empty-ai">
              <Sparkles size={35} />

              <h2>AI catalogue will appear here</h2>

              <p>
                Your product name, category, material, description
                and tags will be generated after analysis.
              </p>
            </div>
          )}

          {/* LOADING STATE */}
          {loading && (
            <div className="loading-ai">
              <LoaderCircle
                className="spin"
                size={38}
              />

              <h2>
                Analyzing your craft...
              </h2>

              <p>
                Identifying materials · Generating catalogue ·
                Preparing market signals
              </p>
            </div>
          )}

          {/* AI RESULT */}
          {result && !loading && (
            <>
              <div className="ai-header">
                <div>
                  <span className="eyebrow">
                    AI GENERATED
                  </span>

                  <h2>
                    Product catalogue
                  </h2>
                </div>

                <div className="icon-btn">
                  <Pencil size={17} />
                </div>
              </div>


              {/* EDITABLE AI INFORMATION */}
              <div className="result-fields">

                <label>
                  Product Name

                  <input
                    value={result.name || ""}
                    onChange={(e) =>
                      updateResult("name", e.target.value)
                    }
                  />
                </label>


                <label>
                  Category

                  <input
                    value={result.category || ""}
                    onChange={(e) =>
                      updateResult("category", e.target.value)
                    }
                  />
                </label>


                <label>
                  Material

                  <input
                    value={result.material || ""}
                    onChange={(e) =>
                      updateResult("material", e.target.value)
                    }
                  />
                </label>


                <label>
                  Craft Type

                  <input
                    value={result.craftType || ""}
                    onChange={(e) =>
                      updateResult("craftType", e.target.value)
                    }
                  />
                </label>


                <label>
                  Style

                  <input
                    value={result.style || ""}
                    onChange={(e) =>
                      updateResult("style", e.target.value)
                    }
                  />
                </label>


                <label className="full-field">
                  Description

                  <textarea
                    value={result.description || ""}
                    onChange={(e) =>
                      updateResult(
                        "description",
                        e.target.value
                      )
                    }
                  />
                </label>


                <div className="tag-row full-field">
                  {(result.tags || []).map((t) => (
                    <span key={t}>
                      #{t}
                    </span>
                  ))}
                </div>
              </div>


              {/* SMART PRICING */}
              <section className="pricing">

                <div className="pricing-head">
                  <div>
                    <span className="eyebrow">
                      SMART PRICING
                    </span>

                    <h3>
                      Suggested price
                    </h3>
                  </div>

                  <IndianRupee />
                </div>


                {/* COST INPUTS */}
                <div className="cost-grid">

                  {Object.entries({
                    material: "Material Cost",
                    labour: "Labour Cost",
                    time: "Production Time (hrs)",
                    quantity: "Quantity"
                  }).map(([k, l]) => (
                    <label key={k}>
                      {l}

                      <input
                        type="number"
                        min="0"
                        value={costs[k]}
                        onChange={(e) =>
                          setCosts({
                            ...costs,
                            [k]: e.target.value
                          })
                        }
                      />
                    </label>
                  ))}
                </div>


                {/* PRICE RESULT */}
                <div className="price-result">

                  <span>
                    Prototype suggested range
                  </span>

                  <strong>
                    ₹
                    {pricing.min.toLocaleString("en-IN")}
                    {" – "}
                    ₹
                    {pricing.max.toLocaleString("en-IN")}
                  </strong>


                  {/* EDITABLE FINAL PRICE */}
                  <label className="editable-price-label">

                    Your Selling Price

                    <div className="price-input-wrap">

                      <span>₹</span>

                      <input
                        type="number"
                        min="1"
                        value={customPrice}
                        onChange={(e) => {
                          const value = e.target.value;

                          if (
                            value === "" ||
                            Number(value) >= 0
                          ) {
                            setCustomPrice(value);
                          }
                        }}
                        placeholder={String(
                          pricing.recommended
                        )}
                      />
                    </div>

                  </label>


                  <small>
                    KarigarSetu suggestion: ₹
                    {pricing.recommended.toLocaleString(
                      "en-IN"
                    )}
                  </small>


                  <p className="price-control-note">
                    You decide your final selling price.
                  </p>

                </div>
              </section>


              {/* MARKET MATCHING */}
              <section className="matches">

                <div className="section-heading left">

                  <span className="eyebrow">
                    MARKET MATCHING
                  </span>

                  <h2>
                    Where can you sell this?
                  </h2>

                  <p>
                    Prototype Match Scores — not real
                    market demand statistics.
                  </p>

                </div>


                {getMarketMatches(result).map(
                  (m) => (
                    <MarketMatchCard
                      market={m}
                      key={m.name}
                    />
                  )
                )}

              </section>


              {/* SAVE */}
              <button
                className="btn btn-primary full"
                onClick={saveProduct}
                disabled={saved}
              >
                {saved ? (
                  <>
                    <Check />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save />
                    Save Product & Catalogue
                  </>
                )}
              </button>

            </>
          )}
        </div>
      </div>
    </div>
  );
}
