import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect } from "react";
import actGetCourses from "../store/coursesSlice/actGetCourses";
import Loading from "../component/feedback/loading/Loading";
import { Link } from "react-router-dom";

const Courses = () => {
  const dispatch = useAppDispatch();

  const { records, error, loading } = useAppSelector((state) => state.courses);
  console.log(records);
  useEffect(() => {
    dispatch(actGetCourses());
  }, [dispatch]);

  return (
    <Container className="pt-5 pb-5 mt-5 mb-5">
      <Row>
        <Loading loading={loading} error={error}>
          {records.map((record) => {
            return (
              <Col
                key={record.id}
                xs={12}
                md={4}
                className="d-flex justify-content-center mb-5 mt-2 "
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ height: "120px" }}
                    variant="top"
                    src={record.img}
                  />
                  <Card.Body>
                    <Card.Title>title: {record.title}</Card.Title>
                    <Card.Text>description: {record.description}</Card.Text>
                    <p>instructor: {record.instructor}</p>
                    <Link to="/courseDetails">
                      <Button variant="primary">Enroll Now</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Loading>
      </Row>
    </Container>
  );
};

export default Courses;
