import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Code2,
  Palette,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import dhruv1Img from "../../assets/projects/dhruv1.jpeg";

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{
          paddingTop: "80px",
          background: "linear-gradient(135deg, var(--custom-gradient-1) 0%, var(--custom-gradient-2) 50%, var(--custom-gradient-3) 100%)",
        }}
      >
        {/* Decorative elements */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)",
            top: "-100px",
            right: "-100px",
            zIndex: 0,
          }}
        />

        <div
          className="position-absolute rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(240, 128, 128, 0.1) 0%, transparent 70%)",
            bottom: "50px",
            left: "-50px",
            zIndex: 0,
          }}
        />

        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div
                className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-4"
                style={{
                  backgroundColor: "rgba(255, 107, 107, 0.1)",
                  border: "1px solid rgba(255, 107, 107, 0.2)",
                }}
              >
                <Sparkles size={18} color="#FF6B6B" />
                <span
                  style={{
                    color: "#FF6B6B",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                  }}
                >
                  Welcome to my portfolio
                </span>
              </div>

              <h1
                className="display-3 mb-4"
                style={{
                  color: "var(--custom-text)",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Hi, I'm <span style={{ color: "#FF6B6B" }}>Dhruv </span>
              </h1>

              <h2
                className="h3 mb-4"
                style={{
                  color: "#F08080",
                  fontWeight: "500",
                }}
              >
                Full Stack Web Developer Student
              </h2>

              <p
                className="lead mb-4"
                style={{ color: "var(--custom-text-muted)", lineHeight: "1.8" }}
              >
                Passionate about creating beautiful and functional web
                experiences. I specialize in HTML, CSS, JSX, and Bootstrap,
                bringing designs to life with clean code and creative solutions.
              </p>

              <div className="d-flex gap-3 mb-4 flex-wrap">
                <Button
                  as={Link}
                  to="/projects"
                  size="lg"
                  className="px-4 py-3 rounded-pill d-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#FF6B6B",
                    borderColor: "#FF6B6B",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#FF4C4C";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#FF6B6B";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  View My Work
                  <ArrowRight size={20} />
                </Button>

                <Button
                  as={Link}
                  to="/contact"
                  size="lg"
                  className="px-4 py-3 rounded-pill"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#F08080",
                    color: "#F08080",
                    borderWidth: "2px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#F08080";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#F08080";
                  }}
                >
                  Get In Touch
                </Button>
              </div>

              {/* <div className="d-flex gap-3">
                {[
                  { icon: <Github size={28} />, link: "https://github.com" },
                  {
                    icon: <Linkedin size={28} />,
                    link: "https://linkedin.com",
                  },
                  {
                    icon: <Mail size={28} />,
                    link: "mailto:dhruv.chand759@gmail.com",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target={
                      social.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(255, 107, 107, 0.1)",
                      color: "#FF6B6B",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#FF6B6B";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 107, 107, 0.1)";
                      e.currentTarget.style.color = "#FF6B6B";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div> */}
            </Col>

            <Col lg={6} className="d-flex justify-content-center align-items-center mt-15 mt-lg-50">
              <div className="position-relative" style={{ maxWidth: "60%" }}>
                <div
                  className="position-absolute w-50 h-50 rounded-4"
                  style={{
                    boxShadow: "0 2px 10px rgba(232, 224, 224, 0.84)",
                    background:
                      "linear-gradient(135deg, #FF6B6B 0%, #F08080 100%)",
                    top: "20px",
                    left: "20px",
                    zIndex: 0,
                  }}
                />

                <ImageWithFallback
                  src={dhruv1Img}
                  alt="Dhruv Chand - Web Developer"
                  className="img-fluid rounded-4 shadow-lg position-relative"
                  style={{ zIndex: 1 }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Overview Section */}
      <section className="py-5" style={{ backgroundColor: "var(--custom-bg-secondary)" }}>
        <Container>
          <Row className="g-4">
            {[
              {
                icon: <Code2 size={40} />,
                title: "Clean Code",
                description:
                  "Writing semantic, maintainable, and well-structured code",
                color: "#FF6B6B",
              },
              {
                icon: <Palette size={40} />,
                title: "Creative Design",
                description:
                  "Crafting visually appealing and user-friendly interfaces",
                color: "#F08080",
              },
              {
                icon: <Sparkles size={40} />,
                title: "Modern Tech",
                description: "Using latest web technologies and best practices",
                color: "#FF6B6B",
              },
            ].map((item, index) => (
              <Col md={4} key={index}>
                <div
                  className="p-4 rounded-4 h-100 text-center"
                  style={{
                    backgroundColor: "var(--custom-bg)",
                    border: "2px solid var(--custom-border)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--custom-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="d-inline-flex p-4 rounded-circle mb-3"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="h5 mb-3" style={{ color: "var(--custom-text)" }}>
                    {item.title}
                  </h3>
                  <p className="mb-0" style={{ color: "var(--custom-text-muted)" }}>
                    {item.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
