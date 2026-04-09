import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Sparkles, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import "../pages/navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav-container">
      <div className="nav-inner">
        
        {/* 🔹 Logo */}
        <Link to="/" className="nav-logo">
          <Sparkles size={22} />
          Dhruv Chand
        </Link>

        {/* 🔹 Right Controls */}
        <div className="nav-controls">
          <button onClick={toggleTheme} className="theme-btn">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 🔥 Mobile + Desktop Menu */}
      <div className={`nav-menu ${open ? "active" : ""}`}>
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${
              isActive(item.path) ? "active-link" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}