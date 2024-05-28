import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import './PlatformIntroduction.css';

const PlatformIntroduction: React.FC = () => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="text-center mb-4">What is Platform Engineering?</Card.Title>
        <Card.Text className="text-justify">
          Platform engineering is an emerging field that focuses on creating robust and scalable digital platforms. These platforms are designed to support the full software development lifecycle, enhancing the efficiency and reliability of both development and operational processes.
        </Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item className="py-3">
            <h5 className="text-primary">Core Objectives</h5>
            <p className="text-justify">
              The primary goal of platform engineering is to reduce complexity for software developers. It achieves this by abstracting the underlying infrastructure and providing a suite of tools and services that automate many aspects of development, testing, deployment, and scaling. This not only speeds up the development process but also ensures consistency and reliability across different environments.
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <h5 className="text-primary">Key Components</h5>
            <p className="text-justify">
              A typical platform engineering ecosystem includes container orchestration systems like Kubernetes, CI/CD pipelines, monitoring tools, and infrastructure as code (IaC) solutions. These components work together to provide a seamless, automated workflow that supports cloud-native application development.
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <h5 className="text-primary">Modern Relevance</h5>
            <p className="text-justify">
              In today's fast-paced, cloud-centric world, platform engineering plays a crucial role in helping organizations achieve digital transformation. It allows businesses to be more agile, enabling rapid adaptation to market changes and user demands with minimal disruption.
            </p>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PlatformIntroduction;
