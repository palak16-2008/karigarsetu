import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";

export default function Marketplace(){
 const [q,setQ]=useState(""),[category,setCategory]=useState("All");
 const all=getProducts();
 const cats=["All",...new Set(all.map(p=>p.category))];
 const filtered=useMemo(()=>all.filter(p=>(category==="All"||p.category===category)&&`${p.name} ${p.craft} ${p.material} ${p.location}`.toLowerCase().includes(q.toLowerCase())),[all,q,category]);
 return <div className="workspace"><div className="market-hero"><span className="eyebrow">THE CRAFT MARKET</span><h1>Discover products with a story.</h1><p>Browse handmade products from artisans across India and connect directly for bulk orders.</p><div className="search-box"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search handmade products..."/></div></div><div className="filter-row"><div className="category-scroll">{cats.map(c=><button className={category===c?"filter active":"filter"} key={c} onClick={()=>setCategory(c)}>{c}</button>)}</div><button className="filter"><SlidersHorizontal size={16}/> More filters</button></div><div className="market-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>{filtered.length===0&&<div className="empty-state"><h2>No products found</h2><p>Try another search or category.</p></div>}</div>
}