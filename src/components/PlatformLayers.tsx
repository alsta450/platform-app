import React from "react";
import { Card, ListGroup, Accordion, Container } from "react-bootstrap";

const PlatformLayers: React.FC = () => {
  return (
    <Container className="mt-5">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-center display-4">
            The Layers of Platform Engineering
          </Card.Title>
          <Card.Text className="lead text-muted text-center mb-4">
            Platform engineering comprises several distinct layers, each
            critical to the holistic management and operation of digital
            services. These layers work together to streamline development
            processes, reduce operational overhead, and enhance service
            delivery.
          </Card.Text>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Application Layer</Accordion.Header>
              <Accordion.Body>
                <p>
                  This layer focuses on the development, deployment, and
                  management of applications. It includes everything from
                  microservices and serverless functions to monolithic
                  applications. The application layer is where developers
                  interact most, using high-level programming languages and
                  frameworks to build software that meets business requirements.
                  Tools like Docker and Kubernetes can be used here to
                  containerize and orchestrate applications, improving
                  portability and scalability.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Platform Layer</Accordion.Header>
              <Accordion.Body>
                <p>
                  The platform layer provides a set of shared tools and services
                  that applications can use to enhance their capabilities
                  without needing to manage these services directly. This
                  includes middleware, database management, messaging systems,
                  and CI/CD pipelines. Platforms such as OpenShift or Cloud
                  Foundry offer a unified environment where these tools are
                  pre-integrated, simplifying the developer experience and
                  focusing on coding rather than infrastructure management.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Infrastructure Layer</Accordion.Header>
              <Accordion.Body>
                <p>
                  At the foundation lies the infrastructure layer, which
                  provides the computing resources needed to run applications
                  and platforms. This includes physical servers, virtual
                  machines, storage solutions, and networking resources.
                  Infrastructure as a Service (IaaS) providers like AWS, Azure,
                  and Google Cloud play a significant role in this layer,
                  offering scalable and flexible resources that can be managed
                  programmatically to support varying load and performance
                  requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PlatformLayers;
