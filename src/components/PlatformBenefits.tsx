import React from "react";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import benefitsData from "./benefitsData.js";

const PlatformBenefits: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-3 shadow-sm rounded">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/800x200.png?text=Platform+Engineering+Benefits"
              alt="Platform Engineering Benefits"
            />
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Comprehensive Benefits of Platform Engineering
              </Card.Title>
              <ListGroup variant="flush">
                {benefitsData.map((benefit, index) => (
                  <ListGroup.Item className="py-3" key={index}>
                    <h5>
                      <i className={`bi ${benefit.icon} me-2`}></i>
                      {benefit.title}
                    </h5>
                    <p>{benefit.description}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlatformBenefits;
