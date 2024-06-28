// ToolsAndTechnologies.tsx
import React from "react";
import { Card, ListGroup, Accordion } from "react-bootstrap";
import "./ToolsAndTechnologies.css"; // Assuming you create this CSS file
import tools from "./tools.json"; // Importing tools from the JSON file

const ToolsAndTechnologies: React.FC = () => {
  return (
    <div className="container">
      <Card className="tool-card">
        <Card.Body>
          <Card.Title className="card-title">
            Essential Tools and Technologies in Platform Engineering
          </Card.Title>
          <Accordion defaultActiveKey="0">
            <ListGroup variant="flush">
              {tools.map((tool, index) => (
                <Accordion.Item eventKey={index.toString()} key={tool.name}>
                  <Accordion.Header>{tool.name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{tool.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </ListGroup>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToolsAndTechnologies;
