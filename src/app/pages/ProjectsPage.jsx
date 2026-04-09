import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router";
import { ExternalLink, Github, Search, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import womenImg from "../../assets/projects/women.png";
import currencyImg from "../../assets/projects/currency.png";
import textImg from "../../assets/projects/text.png";
import countryImg from "../../assets/projects/country.png";

export function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      id: "Women Security Alert Website",
      title: "Be secure, Be safe",
      description:
        "A fully responsive security alert platform built with React and Bootstrap. Features include login page, regestration page, SOS signalk concept.",
      image: womenImg,
      technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
      category: "React",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: "Currency Converter Website",
      title: "Convert your currency",
      description:
        "An attractive currency converter website showcasing web design skills. Built with HTML, CSS, and JavaScript with smooth animations and responsive design.",
      image: currencyImg,
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "HTML/CSS",
      github: "#",
      live: "https://dccurrencyconverter.netlify.app/",
      featured: true,
    },
    {
      id: "Text Editor Website",
      title: "Edit Your Text",
      description:
        "Interactive web design mockup demonstrating modern UI/UX principles. Features dynamic components and mobile-first design approach.",
      image: textImg,
      technologies: ["React", "JSX", "Tailwind CSS", "Figma"],
      category: "React",
      github: "#",
      live: "https://dctexteditor.netlify.app/",
      featured: false,
    },
    {
      id: "Country Data Search Website",
      title: "Search the Country and thier data",
      description:
        "A beautiful landing page with smooth scroll animations and modern design. Built using Bootstrap and custom CSS.",
      image: countryImg,
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      category: "HTML/CSS",
      github: "#",
      live: "https://dccountrysearch.netlify.app/",
      featured: false,
    },
  ];

  const categories = ["All", "React", "HTML/CSS"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesFilter = false;
    if (selectedFilter === "All") {
      matchesFilter = true;
    } else if (selectedFilter === "HTML/CSS") {
      matchesFilter = project.id === "Country Data Search Website";
    } else if (selectedFilter === "React") {
      matchesFilter = project.category === "React" || project.id === "Currency Converter Website";
    }
    return matchesSearch && matchesFilter;
  });

  const featuredProjects = projects.filter((p) => p.featured);

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
                My Work
              </span>
            </div>
            <h1 className="display-4 mb-3" style={{ fontWeight: "700" }}>
              Projects Portfolio
            </h1>
            <p
              className="lead mb-0"
              style={{ maxWidth: "700px", margin: "0 auto", opacity: 0.95 }}
            >
              A showcase of my web development journey, featuring projects that
              demonstrate my skills in HTML, CSS, JavaScript, React, and
              Bootstrap
            </p>
          </div>
        </Container>
      </section>

      {/* Search and Filter */}
      <section
        className="py-4"
        style={{
          backgroundColor: "var(--custom-bg-secondary)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <div className="position-relative">
                <Search
                  size={20}
                  className="position-absolute"
                  style={{
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#FF6B6B",
                  }}
                />

                <Form.Control
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-pill bg-transparent text-foreground"
                  style={{
                    paddingLeft: "45px",
                    border: "2px solid var(--custom-border)",
                    backgroundColor: "var(--custom-bg)",
                    color: "var(--custom-text)",
                  }}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex gap-2 justify-content-md-end flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                    className="rounded-pill"
                    style={{
                      backgroundColor:
                        selectedFilter === category ? "#FF6B6B" : "transparent",
                      color:
                        selectedFilter === category ? "#ffffff" : "var(--custom-text-muted)",
                      border: `2px solid ${selectedFilter === category ? "#FF6B6B" : "var(--custom-border)"}`,
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Projects */}
      {selectedFilter === "All" && searchTerm === "" && (
        <section className="py-5">
          <Container>
            <h2 className="h3 mb-4" style={{ color: "var(--custom-text)" }}>
              <Sparkles
                size={28}
                className="me-2"
                style={{ color: "#F08080" }}
              />
              Featured Projects
            </h2>
            <Row className="g-4">
              {featuredProjects.map((project) => (
                <Col lg={6} key={project.id}>
                  <Card
                    className="border-0 rounded-4 h-100 overflow-hidden"
                    style={{
                      backgroundColor: "var(--custom-bg-secondary)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 40px rgba(255, 107, 107, 0.2)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(0, 0, 0, 0.08)";
                    }}
                  >
                    <div
                      className="position-relative"
                      style={{ height: "250px", overflow: "hidden" }}
                    >
                      <Badge
                        className="position-absolute top-0 end-0 m-3"
                        style={{
                          backgroundColor: "#F08080",
                          padding: "8px 15px",
                          fontSize: "0.75rem",
                          zIndex: 2,
                        }}
                      >
                        Featured
                      </Badge>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-100 h-100 object-cover"
                      />
                    </div>
                    <Card.Body className="p-4">
                      <h3 className="h4 mb-3" style={{ color: "var(--custom-text)" }}>
                        {project.title}
                      </h3>
                      <p style={{ color: "var(--custom-text-muted)", lineHeight: "1.7" }}>
                        {project.description}
                      </p>
                      <div className="mb-3">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            bg="light"
                            className="me-2 mb-2"
                            style={{
                              color: "#FF6B6B",
                              padding: "6px 12px",
                              fontSize: "0.75rem",
                              border: "1px solid #e9ecef",
                              fontWeight: "500",
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="d-flex gap-2">
                        <Button
                          as={Link}
                          to={`/projects/${project.id}`}
                          className="flex-grow-1 rounded-pill"
                          style={{
                            backgroundColor: "#FF6B6B",
                            borderColor: "#FF6B6B",
                            fontWeight: "500",
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          href={project.github}
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            backgroundColor: "transparent",
                            borderColor: "#FF6B6B",
                            color: "#FF6B6B",
                            padding: 0,
                          }}
                        >
                          <Github size={20} />
                        </Button>
                        <Button
                          href={project.live}
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            backgroundColor: "transparent",
                            borderColor: "#F08080",
                            color: "#F08080",
                            padding: 0,
                          }}
                        >
                          <ExternalLink size={20} />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* All Projects */}
      <section className="py-5">
        <Container>
          <h2 className="h3 mb-4" style={{ color: "var(--custom-text)" }}>
            {selectedFilter === "All"
              ? "All Projects"
              : `${selectedFilter} Projects`}
          </h2>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-5">
              <p style={{ color: "var(--custom-text-muted)" }}>
                No projects found matching your criteria.
              </p>
            </div>
          ) : (
            <Row className="g-4">
              {filteredProjects.map((project) => (
                <Col lg={4} md={6} key={project.id}>
                  <Card
                    className="border-0 rounded-4 h-100 overflow-hidden"
                    style={{
                      backgroundColor: "var(--custom-bg-secondary)",
                      boxShadow: "0 2px 15px rgba(0, 0, 0, 0.05)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(255, 107, 107, 0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 15px rgba(0, 0, 0, 0.05)";
                    }}
                  >
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-100 h-100 object-cover"
                      />
                    </div>
                    <Card.Body className="p-4 d-flex flex-column">
                      <h3 className="h5 mb-3" style={{ color: "var(--custom-text)" }}>
                        {project.title}
                      </h3>
                      <p
                        className="flex-grow-1"
                        style={{
                          color: "var(--custom-text-muted)",
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {project.description}
                      </p>
                      <div className="mb-3">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            bg="light"
                            className="me-2 mb-2"
                            style={{
                              color: "#FF6B6B",
                              padding: "4px 10px",
                              fontSize: "0.7rem",
                              border: "1px solid #e9ecef",
                              fontWeight: "500",
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        as={Link}
                        to={`/projects/${project.id}`}
                        className="w-100 rounded-pill"
                        style={{
                          backgroundColor: "#FF6B6B",
                          borderColor: "#FF6B6B",
                          fontWeight: "500",
                        }}
                      >
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </div>
  );
}
