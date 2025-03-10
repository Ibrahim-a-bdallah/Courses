import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

// Render a YouTube video player
const Video = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Row>
      <Col
        xs={12}
        md={8}
        style={{
          position: isSticky ? "fixed" : "relative",
          transition: "all 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <ReactPlayer
          width="100%"
          playing={true}
          controls
          url="https://youtu.be/Ndc67sUKMsg?si=dooLEvR_poC7qjqI"
        />
        ;
      </Col>
    </Row>
  );
};

export default Video;
