import { Placeholder, Row, Col } from "react-bootstrap";

function ContentPlaceholder() {
  return (
    <div
      style={{
        backgroundColor: "#567572ff",
        borderRadius: ".3rem",
        height: "5rem",
      }}
    >
      <Row className="mb-4 flex-wrap">
        <Col sm className="col-md-2">
          <Placeholder as="p" animation="wave">
            <Placeholder xs={6} style={{ height: "5rem", width: "7rem" }} />
          </Placeholder>
        </Col>
        <Col sm>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        </Col>
      </Row>
    </div>
  );
}

export default ContentPlaceholder;
