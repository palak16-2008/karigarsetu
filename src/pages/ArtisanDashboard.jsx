import React from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Package,
  ShoppingBag,
  Users,
  Target,
  ArrowUpRight,
  Bell,
  Trash2
} from "lucide-react";

import ProductCard from "../components/ProductCard";
import { getProducts, deleteProduct } from "../services/api";

export default function ArtisanDashboard() {
  const [products, setProducts] = React.useState(
    getProducts().slice(0, 4)
  );

  const name = localStorage.getItem("ks_name") || "Sita";

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    const updatedProducts = deleteProduct(id);

    setProducts(updatedProducts.slice(0, 4));
  }

  return (
    <div className="dashboard-shell">

      <aside className="sidebar">
        <div className="side-title">ARTISAN SPACE</div>

        <Link className="selected" to="/artisan">
          Overview
        </Link>

        <Link to="/add-product">
          Add Product
        </Link>

        <Link to="/enquiries">
          Enquiries
        </Link>

        <Link to="/catalogue">
          Catalogue
        </Link>

        <Link to="/profile">
          My Profile
        </Link>

        <Link to="/marketplace">
          Preview Marketplace
        </Link>
      </aside>


      <section className="dashboard-main">

        <div className="dashboard-top">
          <div>
            <span className="eyebrow">
              ARTISAN DASHBOARD
            </span>

            <h1>
              Hello, {name} 👋
            </h1>

            <p>
              Here’s how your craft is travelling today.
            </p>
          </div>

          <Link
            className="btn btn-primary"
            to="/add-product"
          >
            <Plus size={18} />
            Add New Product
          </Link>
        </div>


        <div className="stat-grid">

          {[
            [Package, "12", "Products"],
            [ShoppingBag, "4", "Orders"],
            [Users, "23", "Buyer Interests"],
            [Target, "8", "Market Matches"]
          ].map(([I, v, l]) => (
            <div className="stat-card" key={l}>
              <I />

              <strong>{v}</strong>

              <span>{l}</span>
            </div>
          ))}

        </div>


        <div className="dashboard-banner">

          <div>
            <span className="eyebrow">
              AI CATALOGUING
            </span>

            <h2>
              Have a new craft to showcase?
            </h2>

            <p>
              Upload one photo and let the prototype
              generate catalogue-ready information.
            </p>
          </div>

          <Link
            to="/add-product"
            className="btn btn-light"
          >
            Try it
            <ArrowUpRight size={17} />
          </Link>

        </div>


        <div className="dashboard-section-head">

          <div>
            <span className="eyebrow">
              YOUR PRODUCTS
            </span>

            <h2>
              Recent products
            </h2>
          </div>

          <Link
            to="/marketplace"
            className="text-link"
          >
            View all
            <ArrowUpRight size={16} />
          </Link>

        </div>


        {products.length > 0 ? (

          <div className="product-grid compact">

            {products.map(p => (

              <div
                className="artisan-product-wrapper"
                key={p.id}
              >

                <ProductCard product={p} />

                <button
                  className="delete-product-btn"
                  onClick={() => handleDelete(p.id)}
                  title="Delete product"
                >
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>

            ))}

          </div>

        ) : (

          <div className="empty-state">

            <h3>
              No products yet
            </h3>

            <p>
              Add your first craft product to start
              building your catalogue.
            </p>

            <Link
              to="/add-product"
              className="btn btn-primary"
            >
              <Plus size={18} />
              Add Product
            </Link>

          </div>

        )}


        <div className="notice">

          <Bell size={18} />

          <div>
            <b>
              New buyer interest
            </b>

            <p>
              The Heritage Hotel is interested in
              100 Terracotta Diya Lamps.
            </p>
          </div>

          <Link to="/enquiries">
            View enquiry
          </Link>

        </div>

      </section>

    </div>
  );
}
