import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const role = localStorage.getItem("ks_role");

  const logout = () => {
    localStorage.removeItem("ks_role");
    navigate("/");
    setOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark"><Leaf size={20}/></span>
        <span>Karigar<span>Setu</span></span>
      </Link>

      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X/> : <Menu/>}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        <Link to="/marketplace" onClick={() => setOpen(false)}>{lang === "hi" ? "बाज़ार" : "Marketplace"}</Link>
        <Link to="/#how" onClick={() => setOpen(false)}>{lang === "hi" ? "कैसे काम करता है" : "How it works"}</Link>
        {role ? (
          <>
            <Link to={role === "artisan" ? "/artisan" : "/buyer"} onClick={() => setOpen(false)}>Dashboard</Link>
            <button className="nav-logout" onClick={logout}><LogOut size={16}/> Logout</button>
          </>
        ) : <Link className="nav-login" to="/login" onClick={() => setOpen(false)}>Login</Link>}
        <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "hi" : "en")}>
          {lang === "en" ? "हिंदी" : "English"}
        </button>
      </nav>
    </header>
  );
}