import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import womenImg from "../../assets/projects/women.png";
import currencyImg from "../../assets/projects/currency.png";
import textImg from "../../assets/projects/text.png";
import countryImg from "../../assets/projects/country-data.svg";

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Project data (in real app, this would come from API or context)
  const projectsData = {
    "Women Security Alert Website": {
      title: "Be secure, Be safe",
      description: "A fully responsive security alert platform built with React and Bootstrap.",
      image: womenImg,
      technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
      github: "#",
      live: "#",
      duration: "3 months",
      role: "Full Stack Developer",
      overview: "Security alert platform providing women with emergency services access.",
      features: ["User authentication", "SOS emergency signal", "Location tracking", "Dark mode"],
      challenges: ["Real-time location tracking", "Data security", "Mobile performance"],
      learnings: ["Advanced React hooks", "Bootstrap responsive grid", "Real-time data handling"],
    },
    "Currency Converter Website": {
      title: "Convert your currency",
      description: "An attractive currency converter website showcasing web design skills.",
      image: currencyImg,
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "#",
      live: "https://dccurrencyconverter.netlify.app/",
      duration: "2 months",
      role: "Frontend Developer",
      overview: "Modern currency converter with real-time exchange rates.",
      features: ["Real-time rates", "Multiple currencies", "Smooth animations"],
      challenges: ["API integration", "Calculation accuracy", "Mobile animations"],
      learnings: ["API integration", "CSS animations", "Number formatting"],
    },
    "Text Editor Website": {
      title: "Edit Your Text",
      description: "Interactive web design mockup demonstrating modern UI/UX principles.",
      image: textImg,
      technologies: ["React", "JSX", "Tailwind CSS", "Figma"],
      github: "#",
      live: "https://dctexteditor.netlify.app/",
      duration: "6 weeks",
      role: "UI/UX Designer & Developer",
      overview: "Interactive text editor mockup showcasing modern UI/UX design principles.",
      features: ["Real-time text editing", "Text formatting", "Theme customization", "Word counter"],
      challenges: ["Rendering efficiency", "Complex state management", "Performance optimization"],
      learnings: ["Advanced React components", "Tailwind CSS", "Text processing"],
    },
    "Country Data Search Website": {
      title: "Search the Country and their data",
      description: "A beautiful landing page with smooth animations showing country data.",
      image: countryImg,
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      github: "#",
      live: "https://dccountrysearch.netlify.app/",
      duration: "1 month",
      role: "Frontend Developer",
      overview: "Comprehensive country data search application with detailed global information.",
      features: ["Country search", "Detailed information", "Statistics display", "Region filtering"],
      challenges: ["Dataset management", "Search optimization", "Cross-device compatibility"],
      learnings: ["Data filtering", "Bootstrap customization", "Performance optimization"],
    },
  };

  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <Container style={{ paddingTop: "150px", textAlign: "center" }}>
        <h2>Project not found</h2>
        <Button as={Link} to="/projects" className="mt-3">
          Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <div style={{ paddingTop: "80px", backgroundColor: "var(--custom-bg)" }}>
      {/* Back Button */}
      <Container className="py-4">
        <Button
          onClick={() => navigate(-1)}
          variant="link"
          className="p-0 d-flex align-items-center gap-2"
          style={{
            color: "#FF6B6B",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Button>
      </Container>

      {/* Hero Section */}
      <section className="pb-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="mb-4">
                <h1
                  className="display-4 mb-3"
                  style={{ color: "var(--custom-text)", fontWeight: "700" }}
                >
                  {project.title}
                </h1>
                <p
                  className="lead"
                  style={{ color: "var(--custom-text-muted)", lineHeight: "1.8" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="d-flex gap-3 mb-4 flex-wrap">
                <Button
                  href={project.live}
                  size="lg"
                  className="px-4 py-3 rounded-pill d-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#FF6B6B",
                    borderColor: "#FF6B6B",
                    fontWeight: "500",
                  }}
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </Button>
                <Button
                  href={project.github}
                  size="lg"
                  className="px-4 py-3 rounded-pill d-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#F08080",
                    color: "#F08080",
                    borderWidth: "2px",
                    fontWeight: "500",
                  }}
                >
                  <Github size={20} />
                  View Code
                </Button>
              </div>

              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    bg="light"
                    className="me-2 mb-2"
                    style={{
                      color: "#FF6B6B",
                      padding: "8px 16px",
                      fontSize: "0.9rem",
                      border: "1px solid var(--custom-border)",
                      fontWeight: "500",
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Row className="g-3 mb-5">
                <Col sm={6}>
                  <Card
                    className="border-0 rounded-3"
                    style={{ backgroundColor: "var(--custom-bg-secondary)" }}
                  >
                    <Card.Body className="p-3 d-flex align-items-center gap-3">
                      <div
                        className="p-2 rounded-circle"
                        style={{ backgroundColor: "rgba(255, 107, 107, 0.1)" }}
                      >
                        <Calendar size={24} color="#FF6B6B" />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.85rem", color: "var(--custom-text-muted)" }}>
                          Duration
                        </div>
                        <div style={{ fontWeight: "600", color: "var(--custom-text)" }}>
                          {project.duration}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card
                    className="border-0 rounded-3"
                    style={{ backgroundColor: "var(--custom-bg-secondary)" }}
                  >
                    <Card.Body className="p-3 d-flex align-items-center gap-3">
                      <div
                        className="p-2 rounded-circle"
                        style={{ backgroundColor: "rgba(240, 128, 128, 0.1)" }}
                      >
                        <Users size={24} color="#F08080" />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.85rem", color: "var(--custom-text-muted)" }}>
                          Role
                        </div>
                        <div style={{ fontWeight: "600", color: "var(--custom-text)" }}>
                          {project.role}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <div className="rounded-4 overflow-hidden shadow-lg mb-5">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Details */}
      <section className="py-5" style={{ backgroundColor: "var(--custom-bg-secondary)" }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="h3 mb-4" style={{ color: "var(--custom-text)" }}>
                Project Overview
              </h2>
              <p
                style={{
                  color: "var(--custom-text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                }}
              >
                {project.overview}
              </p>

              <h3
                className="h4 mt-5 mb-4 d-flex align-items-center gap-2"
                style={{ color: "var(--custom-text)" }}
              >
                <Target size={28} color="#FF6B6B" />
                Key Features
              </h3>
              <ul style={{ color: "var(--custom-text-muted)", lineHeight: "2" }}>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <h3
                className="h4 mt-5 mb-4 d-flex align-items-center gap-2"
                style={{ color: "var(--custom-text)" }}
              >
                <Lightbulb size={28} color="#F08080" />
                Challenges & Solutions
              </h3>
              <ul style={{ color: "var(--custom-text-muted)", lineHeight: "2" }}>
                {project.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>

              <Card
                className="border-0 rounded-4 mt-5"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B6B 0%, #F08080 100%)",
                  color: "#ffffff",
                }}
              >
                <Card.Body className="p-4">
                  <h4 className="h5 mb-3">What I Learned</h4>
                  <ul className="mb-0" style={{ lineHeight: "1.8" }}>
                    {project.learnings.map((learning, i) => (
                      <li key={i}>{learning}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>

              <div className="text-center mt-5">
                <Button
                  as={Link}
                  to="/projects"
                  size="lg"
                  className="px-5 py-3 rounded-pill"
                  style={{
                    backgroundColor: "#FF6B6B",
                    borderColor: "#FF6B6B",
                    fontWeight: "500",
                  }}
                >
                  View All Projects
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
