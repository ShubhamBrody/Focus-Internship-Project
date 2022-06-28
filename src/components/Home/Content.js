import { Row, Col, Image } from "react-bootstrap";

function Content({ content }) {
  return (
    <div
      style={{
        backgroundColor: "#567572ff",
        borderRadius: ".3rem",
        color: "white",
      }}
    >
      <Row className="mb-4 flex-wrap">
        <Col sm className="col-md-2">
          <Image
            style={{ height: "5rem" }}
            placeholder="Just an Image"
            src={
              content && content.img
                ? content.img
                : "https://upload.wikimedia.org/wikipedia/commons/8/85/Bagel_with_sesame_3.jpg"
            }
          />
        </Col>
        <Col sm>
          <p>{content && content.name ? content.name : "Username"}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
