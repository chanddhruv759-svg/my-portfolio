import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  BookOpen,
  Award,
  Target,
  Heart,
  Coffee,
  Music,
  Camera,
  Book,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import dhruv2Img from "../../assets/projects/dhruv2.jpeg";

export function AboutPage() {
  const education = [
    {
      degree: "Full Stack Web Development",
      institution: "Online Bootcamp",
      year: "2024 - Present",
      status: "In Progress",
    },
    {
      degree: "Web Design Fundamentals",
      institution: "Self-taught & Online Courses",
      year: "2023",
      status: "Completed",
    },
  ];

  const interests = [
    { icon: <Coffee size={24} />, name: "Coffee & Code", color: "#F08080" },
    { icon: <Music size={24} />, name: "Music", color: "#FF6B6B" },
    { icon: <Camera size={24} />, name: "Photography", color: "#F08080" },
    { icon: <Book size={24} />, name: "Reading", color: "#FF6B6B" },
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Goal-Oriented",
      description:
        "Setting clear objectives and working diligently to achieve them",
    },
    {
      icon: <Heart size={32} />,
      title: "Passionate",
      description: "Deeply invested in creating meaningful and impactful work",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving my skills",
    },
    {
      icon: <Award size={32} />,
      title: "Quality Focused",
      description: "Committed to delivering high-quality, polished solutions",
    },
  ];

  return (
    <div style={{ paddingTop: "80px", backgroundColor: "var(--custom-bg)" }}>
      {/* Hero Section */}
      <section className="py-5" style={{ backgroundColor: "var(--custom-bg-secondary)" }}>
        <Container>
          <div className="text-center mb-5">
            <h1
              className="display-4 mb-3"
              style={{ color: "var(--custom-text)", fontWeight: "700" }}
            >
              About <span style={{ color: "#FF6B6B" }}>Me</span>
            </h1>
            <p
              className="lead"
              style={{ color: "var(--custom-text-muted)", maxWidth: "700px", margin: "0 auto" }}
            >
              A passionate web developer on a journey to master the art of
              creating beautiful digital experiences
            </p>
          </div>

          <Row className="align-items-center mb-5">
            <Col lg={5} className="mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
              <div className="position-relative" style={{ maxWidth: "60%" }}>
                <div
                  className="position-absolute w-100 h-100 rounded-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B6B 0%, #F08080 100%)",
                    top: "15px",
                    left: "15px",
                    zIndex: 0,
                  }}
                />

                <ImageWithFallback
                  src={dhruv2Img}
                  alt="About Dhruv Chand"
                  className="img-fluid rounded-4 shadow-lg position-relative"
                  style={{ zIndex: 1 }}
                />
              </div>
            </Col>

            <Col lg={7}>
              <div
                className="p-5 rounded-4"
                style={{
                  backgroundColor: "var(--custom-bg-secondary)",
                  border: "2px solid var(--custom-border)",
                }}
              >
                <h2 className="h3 mb-4" style={{ color: "#FF6B6B" }}>
                  My Story
                </h2>
                <p
                  style={{
                    color: "var(--custom-text-muted)",
                    lineHeight: "1.8",
                    marginBottom: "1rem",
                  }}
                >
                  Hello! I'm Dhruv Chand, a dedicated web development student
                  with a passion for creating beautiful, functional, and
                  user-friendly websites. My journey into web development began
                  with a fascination for how websites work and a desire to bring
                  creative ideas to life through code.
                </p>
                <p
                  style={{
                    color: "var(--custom-text-muted)",
                    lineHeight: "1.8",
                    marginBottom: "1rem",
                  }}
                >
                  Currently, I'm specializing in full-stack development,
                  mastering both frontend technologies like HTML5, CSS3,
                  JavaScript, React (JSX), and Bootstrap, as well as backend
                  technologies including Node.js and MongoDB. I believe in
                  writing clean, semantic code and creating responsive designs
                  that provide seamless experiences across all devices.
                </p>
                <p
                  style={{
                    color: "var(--custom-text-muted)",
                    lineHeight: "1.8",
                    marginBottom: "0",
                  }}
                >
                  When I'm not coding, you'll find me exploring design trends,
                  contributing to open-source projects, or learning about
                  emerging web technologies. I'm excited about the endless
                  possibilities in web development and committed to continuous
                  learning and growth in this ever-evolving field.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5" style={{ backgroundColor: "var(--custom-bg)" }}>
        <Container>
          <h2 className="text-center h2 mb-5" style={{ color: "var(--custom-text)" }}>
            What Drives Me
          </h2>
          <Row className="g-4">
            {values.map((value, index) => (
              <Col md={6} lg={3} key={index}>
                <Card
                  className="h-100 border-0 text-center rounded-4"
                  style={{
                    backgroundColor: "var(--custom-bg-secondary)",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(255, 107, 107, 0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="d-inline-flex p-3 rounded-circle mb-3"
                      style={{
                        backgroundColor: "rgba(255, 107, 107, 0.1)",
                        color: "#FF6B6B",
                      }}
                    >
                      {value.icon}
                    </div>
                    <h3 className="h5 mb-3" style={{ color: "var(--custom-text)" }}>
                      {value.title}
                    </h3>
                    <p className="mb-0 small" style={{ color: "var(--custom-text-muted)" }}>
                      {value.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Education Section */}
      <section className="py-5" style={{ backgroundColor: "var(--custom-bg-secondary)" }}>
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="h2 mb-4" style={{ color: "var(--custom-text)" }}>
                <BookOpen
                  size={32}
                  className="me-2"
                  style={{ color: "#FF6B6B" }}
                />
                Education & Learning
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="border-0 rounded-4 mb-3"
                    style={{
                      backgroundColor: "var(--custom-bg)",
                      borderLeft: "4px solid #FF6B6B",
                    }}
                  >
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h4 className="h5 mb-0" style={{ color: "var(--custom-text)" }}>
                          {edu.degree}
                        </h4>
                        <Badge
                          bg="light"
                          style={{
                            color:
                              edu.status === "In Progress"
                                ? "#FF6B6B"
                                : "#F08080",
                            border: `1px solid ${edu.status === "In Progress" ? "#FF6B6B" : "#F08080"}`,
                            padding: "6px 12px",
                          }}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="mb-1" style={{ color: "var(--custom-text-muted)" }}>
                        {edu.institution}
                      </p>
                      <p className="mb-0 small" style={{ color: "#F08080" }}>
                        {edu.year}
                      </p>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>

            <Col lg={6}>
              <h2 className="h2 mb-4" style={{ color: "var(--custom-text)" }}>
                <Heart
                  size={32}
                  className="me-2"
                  style={{ color: "#F08080" }}
                />
                Interests & Hobbies
              </h2>
              <Row className="g-3">
                {interests.map((interest, index) => (
                  <Col sm={6} key={index}>
                    <Card
                      className="border-0 rounded-4 h-100"
                      style={{
                        backgroundColor: "var(--custom-bg)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = `${interest.color}15`;
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--custom-bg)";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <Card.Body className="p-4 text-center">
                        <div
                          className="d-inline-flex p-3 rounded-circle mb-3"
                          style={{
                            backgroundColor: `${interest.color}20`,
                            color: interest.color,
                          }}
                        >
                          {interest.icon}
                        </div>
                        <h5 className="mb-0" style={{ color: "var(--custom-text)" }}>
                          {interest.name}
                        </h5>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Card
                className="border-0 rounded-4 mt-4"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B6B 0%, #F08080 100%)",
                  color: "#ffffff",
                }}
              >
                <Card.Body className="p-4 text-center">
                  <h5 className="mb-2">Let's Connect!</h5>
                  <p className="mb-0 small" style={{ opacity: 0.95 }}>
                    I'm always excited to connect with fellow developers and
                    tech enthusiasts. Feel free to reach out if you'd like to
                    collaborate or just chat about web development!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
