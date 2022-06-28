import { Container } from "react-bootstrap";
import CounterPart from "./ContentPart";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("LOGGEDIN")) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <Container>
      <div
        style={{
          padding: "2rem 1rem",
          marginBottom: "2rem",
          backgroundColor: "#0b09099e",
          borderRadius: ".3rem",
          textAlign: "center",
          fontSize: "1.5rem",
          color: "white",
        }}
        className="d-flex justify-content-center"
      >
        <h3>Home Page</h3>
      </div>
      <CounterPart />
      <Footer />
    </Container>
  );
}

export default HomePage;
