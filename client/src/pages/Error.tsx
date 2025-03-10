import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="notFound">
      <Link to="/" replace={true}>
        How about going back to safety
      </Link>
    </Container>
  );
};

export default Error;
