import { useState } from "react";
import { Container, Navbar as BSNavbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import { Menu, X, Sparkles, Moon, Sun } from "lucide-react";
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

  return (
    <BSNavbar
      expand="lg"
      className="fixed-top shadow-sm"
      expanded={expanded}
      style={{
        backgroundColor: "var(--custom-bg-secondary)",
        borderBottom: "2px solid var(--custom-border)",
      }}
    >
      <Container>
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
        <div className="d-flex align-items-center ms-auto gap-2">
          <button
            onClick={toggleTheme}
            className="btn btn-link p-2"
            style={{ color: "#FF6B6B" }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <BSNavbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            style={{ borderColor: "#FF6B6B" }}
          >
          {expanded ? (
            <X size={24} color="#FF6B6B" />
          ) : (
            <Menu size={24} color="#FF6B6B" />
          )}
          </BSNavbar.Toggle>
        </div>
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
              className="mx-2 px-3 py-2 rounded-pill"
              style={{
                color: isActive("/") ? "#ffffff" : "var(--custom-text-muted)",
                backgroundColor: isActive("/") ? "#FF6B6B" : "transparent",
                fontWeight: isActive("/") ? "600" : "500",
                transition: "all 0.3s ease",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => setExpanded(false)}
              className="mx-2 px-3 py-2 rounded-pill"
              style={{
                color: isActive("/about") ? "#ffffff" : "var(--custom-text-muted)",
                backgroundColor: isActive("/about") ? "#FF6B6B" : "transparent",
                fontWeight: isActive("/about") ? "600" : "500",
                transition: "all 0.3s ease",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => setExpanded(false)}
              className="mx-2 px-3 py-2 rounded-pill"
              style={{
                color: isActive("/projects") ? "#ffffff" : "var(--custom-text-muted)",
                backgroundColor: isActive("/projects")
                  ? "#FF6B6B"
                  : "transparent",
                fontWeight: isActive("/projects") ? "600" : "500",
                transition: "all 0.3s ease",
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setExpanded(false)}
              className="mx-2 px-3 py-2 rounded-pill"
              style={{
                color: isActive("/contact") ? "#ffffff" : "var(--custom-text-muted)",
                backgroundColor: isActive("/contact")
                  ? "#FF6B6B"
                  : "transparent",
                fontWeight: isActive("/contact") ? "600" : "500",
                transition: "all 0.3s ease",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
