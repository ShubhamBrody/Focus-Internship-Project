import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("LOGGEDIN")) {
      navigate("/home", { replace: true });
    }
  });
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            e.target.formBasicUsername.value === "foo" &&
            e.target.formBasicPassword.value === "bar"
          ) {
            window.localStorage.setItem("LOGGEDIN", true);
            setTimeout(() => {}, 500);
            navigate("/home", { replace: true });
          }
        }}
      >
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "2rem" }}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
