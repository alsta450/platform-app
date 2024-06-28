import React from "react";
import { Card, ListGroup, Accordion, Container } from "react-bootstrap";
import platformLayersData from "./platformLayersData.json"; // Import the JSON data

const PlatformLayers: React.FC = () => {
  return (
    <Container className="mt-5">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-center display-4">
            {platformLayersData.title}
          </Card.Title>
          <Card.Text className="lead text-muted text-center mb-4">
            {platformLayersData.description}
          </Card.Text>
          <Accordion defaultActiveKey="0">
            {platformLayersData.layers.map((layer, index) => (
              <Accordion.Item eventKey={String(index)} key={index}>
                <Accordion.Header>{layer.title}</Accordion.Header>
                <Accordion.Body>
                  <p>{layer.content}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PlatformLayers;
