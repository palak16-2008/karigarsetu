import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
  const [role,setRole]=useState("artisan");
  const [name,setName]=useState("");
  const navigate=useNavigate();
  const submit=(e)=>{e.preventDefault();localStorage.setItem("ks_role",role);localStorage.setItem("ks_name",name||"Sita");navigate(role==="artisan"?"/artisan":"/buyer");};
  return <div className="auth-page"><div className="auth-card"><div className="auth-header"><span className="eyebrow">WELCOME BACK</span><h1>Enter your workspace.</h1><p>A simple prototype login — no real credentials required.</p></div><div className="role-tabs"><button className={role==="artisan"?"active":""} onClick={()=>setRole("artisan")}>I'm an Artisan</button><button className={role==="buyer"?"active":""} onClick={()=>setRole("buyer")}>I'm a Buyer</button></div><form onSubmit={submit}><label>Name / Organisation<input value={name} onChange={e=>setName(e.target.value)} placeholder={role==="artisan"?"e.g. Sita Devi":"e.g. The Heritage Hotel"} required/></label><label>Password<input type="password" placeholder="Any password for prototype" required/></label><button className="btn btn-primary full">Login <ArrowRight size={18}/></button></form><div className="auth-note"><ShieldCheck size={17}/> Prototype mode — no real account data is stored.</div><p className="center">New here? <Link to="/register">Create an account</Link></p></div></div>
}