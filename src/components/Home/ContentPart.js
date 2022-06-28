import { Container } from "react-bootstrap";
import Content from "./Content";
import { useState, useEffect } from "react";
import ContentPlaceholder from "./ContentPlaceholder";
import axios from "axios";

function ContentPart() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      axios
        .get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
        .then((res) => {
          setContent((prev) => {
            return [...prev, ...res.data.results];
          });
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    }, 1000);
  }, [page]);

  const handleScroll = (e) => {
    console.log("CAMEE");
    console.log(e.target.scrollHeight - e.target.scrollTop);
    if (loading) return;

    const bottom = e.target.scrollHeight - e.target.scrollTop < 637;
    if (bottom) {
      setPage(page + 1);
      setLoading(true);
    }
  };

  return (
    <Container
      style={{
        backgroundColor: "#0b09099e",
        padding: "2rem 1rem",
        marginBottom: "2rem",
        borderRadius: ".3rem",
        textAlign: "center",
        fontSize: "1.5rem",
        height: "80vh",
        overflow: "auto",
      }}
      onScroll={handleScroll}
    >
      {content &&
        content.map((item, index) => {
          return (
            <Content
              key={index}
              content={{
                name:
                  item.name.title +
                  " " +
                  item.name.first +
                  " " +
                  item.name.last,
                img: item.picture.medium,
              }}
            />
          );
        })}
      <ContentPlaceholder />
    </Container>
  );
}

export default ContentPart;
