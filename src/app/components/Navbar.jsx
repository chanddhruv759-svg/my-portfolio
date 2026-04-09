import { useEffect, useState } from "react";
import { Container, Navbar as BSNavbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import { Sparkles, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // ✅ Active link checker
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  // ✅ Close navbar when route changes (mobile UX fix)
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  // ✅ Optional: Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        expanded &&
        !e.target.closest(".navbar") // bootstrap navbar class
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [expanded]);

  return (
    <BSNavbar
      expand="lg"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)} // ✅ FIXED
      className="fixed-top shadow-sm"
      style={{
        backgroundColor: "var(--custom-bg-secondary)",
        borderBottom: "2px solid var(--custom-border)",
        backdropFilter: "blur(10px)", // ✨ premium effect
      }}
    >
      <Container>
        {/* LOGO */}
        <BSNavbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#FF6B6B",
            textDecoration: "none",
          }}
        >
          <Sparkles size={24} fill="#F08080" color="#F08080" />
          Dhruv Chand
        </BSNavbar.Brand>

        {/* RIGHT SIDE CONTROLS */}
        <div className="d-flex align-items-center gap-2">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="btn btn-link p-2"
            style={{ color: "#FF6B6B" }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* TOGGLE BUTTON */}
          <BSNavbar.Toggle
            aria-controls="navbar-nav"
            style={{ borderColor: "#FF6B6B" }}
          />
        </div>

        {/* NAV LINKS */}
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">

            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/contact", label: "Contact" },
            ].map((item, index) => {
              const active = isActive(item.path);

              return (
                <Nav.Link
                  key={index}
                  as={Link}
                  to={item.path}
                  onClick={() => setExpanded(false)}
                  className="mx-2 px-3 py-2 rounded-pill"
                  style={{
                    color: active ? "#ffffff" : "var(--custom-text-muted)",
                    backgroundColor: active ? "#FF6B6B" : "transparent",
                    fontWeight: active ? "600" : "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.label}
                </Nav.Link>
              );
            })}

          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}