import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Sparkles, TrendingUp, Users, Globe2, HeartHandshake, PlayCircle } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products } from "../services/data";

export default function Home({ lang }) {
  const hi = lang === "hi";
  return (
    <div>
      <section className="hero">
        <div className="hero-copy">
          <span className="pill"><Sparkles size={15}/> AI-powered artisan marketplace</span>
          <h1>{hi ? "आपकी कला एक बड़े बाज़ार की हक़दार है।" : "Your Craft Deserves a Bigger Market."}</h1>
          <p>{hi ? "अपने हस्तनिर्मित उत्पादों को पेशेवर डिजिटल कैटलॉग में बदलें और सही खरीदारों से सीधे जुड़ें।" : "Transform handmade products into professional digital catalogues and connect directly with the right buyers."}</p>
          <div className="hero-actions">
            <Link to="/register?role=artisan" className="btn btn-primary">I'm an Artisan <ArrowRight size={18}/></Link>
            <Link to="/marketplace" className="btn btn-secondary">I'm a Buyer</Link>
          </div>
          <div className="hero-proof"><span>✦ Built for marginalized artisans</span><span>✦ From craft to customer</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-image-card"><img src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85" alt="Indian handicraft"/></div>
          <div className="floating-card float-one"><Sparkles size={18}/><div><b>AI Catalogue</b><small>Ready in minutes</small></div></div>
          <div className="floating-card float-two"><TrendingUp size={18}/><div><b>94% Match</b><small>Boutique Hotels</small></div></div>
        </div>
      </section>

      <section className="stats-strip">
        <div><strong>1,000+</strong><span>Artisans envisioned</span></div>
        <div><strong>20+</strong><span>Craft categories</span></div>
        <div><strong>5×</strong><span>Market pathways</span></div>
        <div><strong>24/7</strong><span>Digital visibility</span></div>
      </section>

      <section id="how" className="section">
        <div className="section-heading"><span className="eyebrow">HOW IT WORKS</span><h2>From craft to customer, without the guesswork.</h2><p>One simple digital journey for artisans who deserve access to modern markets.</p></div>
        <div className="steps">
          {[
            [Camera,"01","Upload","Add a photo of your handmade product."],
            [Sparkles,"02","AI Catalogues","Get a polished name, description, category and tags."],
            [TrendingUp,"03","Smart Pricing","See a prototype price recommendation based on your inputs."],
            [Globe2,"04","Market Matching","Discover buyer categories that fit your craft."],
            [HeartHandshake,"05","Connect","Receive enquiries and grow beyond local markets."]
          ].map(([Icon,n,title,text])=><div className="step" key={n}><div className="step-icon"><Icon/></div><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className="section soft-section">
        <div className="section-heading split"><div><span className="eyebrow">FEATURED CRAFTS</span><h2>Made by hand. Found by the right people.</h2></div><Link to="/marketplace" className="text-link">Explore marketplace <ArrowRight size={16}/></Link></div>
        <div className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div>
      </section>

      <section className="impact section">
        <div className="impact-copy"><span className="eyebrow">WHY KARIGARSETU</span><h2>Technology should open doors, not replace the hands that create.</h2><p>We combine simple digital tools with AI-assisted discovery so artisans can spend less time figuring out markets and more time doing what they do best.</p><Link to="/register" className="btn btn-primary">Join the platform <ArrowRight size={18}/></Link></div>
        <div className="impact-cards"><div><Users/><h3>Direct access</h3><p>Help buyers discover makers, not just products.</p></div><div><Globe2/><h3>Wider reach</h3><p>Give local crafts a digital doorway to new markets.</p></div><div><Sparkles/><h3>Less friction</h3><p>Turn a simple product photo into catalogue-ready information.</p></div></div>
      </section>

      <footer className="footer"><div className="brand"><span className="brand-mark"><HeartHandshake size={20}/></span><span>Karigar<span>Setu</span></span></div><p>Tradition + Technology + Opportunity</p><span>© 2026 KarigarSetu — SIH prototype</span></footer>
    </div>
  );
}