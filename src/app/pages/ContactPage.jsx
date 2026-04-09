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
  const [result, setResult] = useState("");

  // ✅ UPDATED SUBMIT FUNCTION (Web3Forms)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formDataObj = new FormData();
    formDataObj.append("access_key", "78b7d500-bb30-469a-8770-46116e67b984");
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult("❌ Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Error sending message.");
    }

    setIsSubmitting(false);
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
      link: "tel:+919888136950", // ✅ fixed
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
    <div style={{ paddingTop: "80px", backgroundColor: "var(--custom-bg)", minHeight: "100vh" }}>
      
      {/* HERO */}
      <section
        className="py-5 text-center"
        style={{
          background: "linear-gradient(135deg, #FF6B6B 0%, #F08080 100%)",
          color: "#fff",
        }}
      >
        <Container>
          <Sparkles size={20} />
          <h1 className="display-4 fw-bold">Get In Touch</h1>
          <p className="lead">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="py-5">
        <Container>
          <Row className="g-4">

            {/* LEFT SIDE */}
            <Col lg={4}>
              {contactInfo.map((info, i) => (
                <Card key={i} className="mb-3 border-0 shadow-sm">
                  <Card.Body className="d-flex align-items-center gap-3">
                    <div style={{ color: info.color }}>{info.icon}</div>
                    <div>
                      <h6>{info.title}</h6>
                      {info.link ? (
                        <a href={info.link}>{info.value}</a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              ))}

              {/* SOCIAL */}
              <Card className="border-0 mt-3">
                <Card.Body className="d-flex gap-3">
                  {socialLinks.map((s, i) => (
                    <a key={i} href={s.link} target="_blank" rel="noreferrer">
                      {s.icon}
                    </a>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            {/* FORM */}
            <Col lg={8}>
              <Card className="border-0 shadow">
                <Card.Body>
                  <h4 className="mb-4">Send Message</h4>

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mb-3"
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mb-3"
                        />
                      </Col>
                    </Row>

                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mb-3"
                    />

                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mb-3"
                    />

                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {/* ✅ RESULT MESSAGE */}
                    {result && (
                      <p
                        style={{
                          marginTop: "15px",
                          color: result.includes("successfully")
                            ? "green"
                            : "red",
                        }}
                      >
                        {result}
                      </p>
                    )}
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