import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" expand="lg" style={{ color: "white" }}>
      <Container>
        <Navbar.Brand href="#home">INFINITY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {window.localStorage.getItem("LOGGEDIN") && (
              <Nav.Item
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  window.localStorage.removeItem("LOGGEDIN");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
