import { useEffect, useState } from "react";
import { Container, Navbar as BSNavbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Close navbar on route change (important for mobile)
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <BSNavbar
      expand="lg"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      fixed="top"
      className="shadow-sm"
      style={{
        backgroundColor: "var(--custom-bg-secondary)",
        borderBottom: "1px solid var(--custom-border)",
      }}
    >
      <Container>
        {/* 🔹 Brand */}
        <BSNavbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
          style={{
            fontSize: "1.4rem",
            fontWeight: "600",
            color: "#FF6B6B",
            textDecoration: "none",
          }}
        >
          <Sparkles size={22} fill="#FF6B6B" color="#FF6B6B" />
          Dhruv Chand
        </BSNavbar.Brand>

        {/* 🔹 Right Side Controls */}
        <div className="d-flex align-items-center gap-2 ms-auto">
          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-link p-2"
            style={{ color: "#FF6B6B" }}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Toggle Button */}
          <BSNavbar.Toggle
            aria-controls="navbar-nav"
            style={{ borderColor: "#FF6B6B" }}
          />
        </div>

        {/* 🔹 Collapse Menu */}
        <BSNavbar.Collapse
          id="navbar-nav"
          className="mt-3 mt-lg-0 p-3 p-lg-0"
          style={{
            backgroundColor: "var(--custom-bg-secondary)",
            borderRadius: "10px",
          }}
        >
          <Nav className="ms-auto text-center text-lg-start">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                onClick={() => setExpanded(false)}
                className="mx-lg-2 my-2 my-lg-0 px-3 py-2 rounded-pill"
                style={{
                  color: isActive(item.path)
                    ? "#fff"
                    : "var(--custom-text-muted)",
                  backgroundColor: isActive(item.path)
                    ? "#FF6B6B"
                    : "transparent",
                  fontWeight: isActive(item.path) ? "600" : "500",
                  transition: "all 0.3s ease",
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}