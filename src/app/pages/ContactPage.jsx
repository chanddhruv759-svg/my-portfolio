import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Instagram,
  Heart,
  Sparkles,
} from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon. 💌");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: "Email",
      value: "chanddhruv759@gmail.com",
      link: "mailto:chanddhruv759@gmail.com",
      color: "#FF6B6B",
    },
    {
      icon: <Phone size={28} />,
      title: "Phone",
      value: "+91 9888136950",
      link: "tel:+91",
      color: "#F08080",
    },
    {
      icon: <MapPin size={28} />,
      title: "Location",
      value: "India",
      link: null,
      color: "#FF6B6B",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      link: "https://github.com/",
      color: "#FF6B6B",
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      link: "https://www.instagram.com/its_dc_lyrics/",
      color: "#F08080",
    },
  ];

  return (
    <div
      style={{
        paddingTop: "80px",
        backgroundColor: "var(--custom-bg)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FF6B6B 0%, #F08080 100%)",
          color: "#ffffff",
        }}
      >
        <Container>
          <div className="text-center">
            <div
              className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-3"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <Sparkles size={18} />
              <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                Let's Connect
              </span>
            </div>
            <h1 className="display-4 mb-3" style={{ fontWeight: "700" }}>
              Get In Touch
            </h1>
            <p
              className="lead mb-0"
              style={{ maxWidth: "700px", margin: "0 auto", opacity: 0.95 }}
            >
              Have a question or want to work together? I'd love to hear from
              you! Feel free to reach out and I'll respond as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {/* Contact Info Cards */}
            <Col lg={4}>
              <div className="mb-4">
                <h2 className="h4 mb-4" style={{ color: "var(--custom-text)" }}>
                  Contact Information
                </h2>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="border-0 rounded-4 mb-3"
                      style={{
                        backgroundColor: "var(--custom-bg-secondary)",
                        boxShadow: "0 2px 15px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(255, 107, 107, 0.15)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 15px rgba(0, 0, 0, 0.05)";
                      }}
                    >
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="p-3 rounded-circle"
                            style={{
                              backgroundColor: `${info.color}15`,
                              color: info.color,
                            }}
                          >
                            {info.icon}
                          </div>
                          <div className="flex-grow-1">
                            <h5
                              className="mb-1 h6"
                              style={{ color: "var(--custom-text)" }}
                            >
                              {info.title}
                            </h5>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-decoration-none"
                                style={{
                                  color: "var(--custom-text-muted)",
                                  fontSize: "0.95rem",
                                }}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p
                                className="mb-0"
                                style={{
                                  color: "var(--custom-text-muted)",
                                  fontSize: "0.95rem",
                                }}
                              >
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <Card
                className="border-0 rounded-4"
                style={{
                  background:
                    "linear-gradient(135deg, var(--custom-bg-secondary) 0%, var(--custom-bg) 100%)",
                  boxShadow: "0 2px 15px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Card.Body className="p-4">
                  <h3 className="h6 mb-3" style={{ color: "var(--custom-text)" }}>
                    Connect on Social Media
                  </h3>
                  <div className="d-flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex flex-column align-items-center justify-content-center rounded-4 flex-grow-1 text-decoration-none"
                        style={{
                          padding: "20px",
                          backgroundColor: `${social.color}10`,
                          color: social.color,
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = social.color;
                          e.currentTarget.style.color = "#ffffff";
                          e.currentTarget.style.transform = "translateY(-5px)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = `${social.color}10`;
                          e.currentTarget.style.color = social.color;
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {social.icon}
                        <span className="mt-2 small">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              {/* Decorative Card */}
              <Card
                className="border-0 rounded-4 mt-4"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B6B 0%, #F08080 100%)",
                  color: "#ffffff",
                }}
              >
                <Card.Body className="p-4 text-center">
                  <Heart
                    size={40}
                    fill="currentColor"
                    className="mb-3"
                    style={{ opacity: 0.9 }}
                  />
                  <h4 className="h6 mb-2">Let's Create Together</h4>
                  <p className="mb-0 small" style={{ opacity: 0.95 }}>
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col lg={8}>
              <Card
                className="border-0 rounded-4"
                style={{
                  backgroundColor: "var(--custom-bg-secondary)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Card.Body className="p-5">
                  <h2 className="h4 mb-4" style={{ color: "var(--custom-text)" }}>
                    Send Me a Message
                  </h2>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-4">
                        <Form.Group>
                          <Form.Label
                            style={{ color: "var(--custom-text)", fontWeight: "500" }}
                          >
                            Your Name{" "}
                            <span style={{ color: "#FF6B6B" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="rounded-3 bg-transparent text-foreground"
                            style={{
                              padding: "12px 16px",
                              border: "2px solid var(--custom-border)",
                              backgroundColor: "var(--custom-bg)",
                              color: "var(--custom-text)",
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-4">
                        <Form.Group>
                          <Form.Label
                            style={{ color: "var(--custom-text)", fontWeight: "500" }}
                          >
                            Your Email{" "}
                            <span style={{ color: "#FF6B6B" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="rounded-3 bg-transparent text-foreground"
                            style={{
                              padding: "12px 16px",
                              border: "2px solid var(--custom-border)",
                              backgroundColor: "var(--custom-bg)",
                              color: "var(--custom-text)",
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label
                        style={{ color: "var(--custom-text)", fontWeight: "500" }}
                      >
                        Subject <span style={{ color: "#FF6B6B" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="rounded-3 bg-transparent text-foreground"
                        style={{
                          padding: "12px 16px",
                          border: "2px solid var(--custom-border)",
                          backgroundColor: "var(--custom-bg)",
                          color: "var(--custom-text)",
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label
                        style={{ color: "var(--custom-text)", fontWeight: "500" }}
                      >
                        Message <span style={{ color: "#FF6B6B" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me more about your project or question..."
                        required
                        className="rounded-3 bg-transparent text-foreground"
                        style={{
                          padding: "12px 16px",
                          border: "2px solid var(--custom-border)",
                          backgroundColor: "var(--custom-bg)",
                          color: "var(--custom-text)",
                          resize: "vertical",
                        }}
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
                      style={{
                        backgroundColor: "#FF6B6B",
                        borderColor: "#FF6B6B",
                        padding: "15px",
                        fontWeight: "500",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = "#FF4C4C";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#FF6B6B";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
