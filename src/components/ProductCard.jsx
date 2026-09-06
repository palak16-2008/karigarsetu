import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, BadgeCheck } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={product.name}/>
        <span className="product-badge"><BadgeCheck size={14}/> Verified</span>
      </Link>
      <div className="product-card-body">
        <div className="eyebrow">{product.craft}</div>
        <h3>{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-meta"><span>₹{product.price.toLocaleString("en-IN")}</span><span><MapPin size={14}/> {product.location}</span></div>
        <Link className="text-link" to={`/product/${product.id}`}>View product <ArrowUpRight size={16}/></Link>
      </div>
    </article>
  );
}