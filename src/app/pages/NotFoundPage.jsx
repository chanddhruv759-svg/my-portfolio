import { Container, Button } from "react-bootstrap";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, var(--custom-gradient-1) 0%, var(--custom-gradient-2) 50%, var(--custom-gradient-3) 100%)",
        paddingTop: "80px",
      }}
    >
      <Container>
        <div className="text-center">
          <h1
            className="display-1 mb-4"
            style={{
              fontSize: "8rem",
              fontWeight: "800",
              color: "#FF6B6B",
              opacity: 0.3,
            }}
          >
            404
          </h1>
          <h2 className="h2 mb-3" style={{ color: "var(--custom-text)" }}>
            Oops! Page Not Found
          </h2>
          <p
            className="lead mb-5"
            style={{
              color: "var(--custom-text-muted)",
              maxWidth: "500px",
              margin: "0 auto 2rem",
            }}
          >
            The page you're looking for seems to have wandered off. Let's get
            you back on track!
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button
              as={Link}
              to="/"
              size="lg"
              className="px-5 py-3 rounded-pill d-flex align-items-center gap-2"
              style={{
                backgroundColor: "#FF6B6B",
                borderColor: "#FF6B6B",
                fontWeight: "500",
              }}
            >
              <Home size={20} />
              Go Home
            </Button>
            <Button
              onClick={() => window.history.back()}
              size="lg"
              className="px-5 py-3 rounded-pill d-flex align-items-center gap-2"
              style={{
                backgroundColor: "transparent",
                borderColor: "#F08080",
                color: "#F08080",
                borderWidth: "2px",
                fontWeight: "500",
              }}
            >
              <ArrowLeft size={20} />
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
