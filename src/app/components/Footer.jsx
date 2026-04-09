import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import { Heart, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        backgroundColor: "#FF6B6B",
        color: "#ffffff",
      }}
    >
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Sparkles size={24} fill="#F08080" color="#F08080" />
              <h5 className="mb-0" style={{ fontSize: "1.25rem" }}>
                Dhruv Chand
              </h5>
            </div>
            <p className="mb-0" style={{ color: "#e8f4f1" }}>
              Full Stack Web Developer Student passionate about creating
              beautiful and functional web experiences.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3" style={{ fontSize: "1.1rem" }}>
              Quick Links
            </h5>
            <div className="d-flex flex-column gap-2">
              <Link
                to="/"
                className="text-decoration-none"
                style={{ color: "#e8f4f1", transition: "color 0.3s ease" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#F08080")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#e8f4f1")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-decoration-none"
                style={{ color: "#e8f4f1", transition: "color 0.3s ease" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#F08080")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#e8f4f1")}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-decoration-none"
                style={{ color: "#e8f4f1", transition: "color 0.3s ease" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#F08080")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#e8f4f1")}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-decoration-none"
                style={{ color: "#e8f4f1", transition: "color 0.3s ease" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#F08080")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#e8f4f1")}
              >
                Contact
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <h5 className="mb-3" style={{ fontSize: "1.1rem" }}>
              Connect With Me
            </h5>
            <div className="d-flex gap-3 mb-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#F08080";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#F08080";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:chanddhruv759@gmail.com"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#F08080";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </Col>
        </Row>
        <div
          className="text-center pt-4"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
          <p className="mb-2">
            © {new Date().getFullYear()} Dhruv Chand. All rights reserved.
          </p>
          <p
            className="mb-0 small d-flex align-items-center justify-content-center gap-1"
            style={{ color: "#e8f4f1" }}
          >
            Crafted with <Heart size={14} fill="#F08080" color="#F08080" />{" "}
            using React, Bootstrap & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
