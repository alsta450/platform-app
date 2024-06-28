import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./PlatformIntroduction.css";
import platformIntroductionData from "./platformIntroductionData.js"; // Importieren Sie die Daten

const PlatformIntroduction: React.FC = () => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="text-center mb-4">
          {platformIntroductionData.title}
        </Card.Title>
        <Card.Text className="text-justify">
          {platformIntroductionData.description}
        </Card.Text>
        <ListGroup variant="flush">
          {platformIntroductionData.sections.map((section, index) => (
            <ListGroup.Item className="py-3" key={index}>
              <h5 className="text-primary">{section.title}</h5>
              <p className="text-justify">{section.content}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PlatformIntroduction;
