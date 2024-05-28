// PlatformBenefits.tsx
import React from "react";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";

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
                <ListGroup.Item className="py-3">
                  <h5>
                    <i className="bi bi-gear-fill me-2"></i>Enhanced Developer
                    Productivity
                  </h5>
                  <p>
                    Platform engineering streamlines the development process by
                    reducing the complexity that developers face when setting up
                    and configuring environments. Tools and platforms automate
                    repetitive tasks such as provisioning, deployments, and
                    scaling operations. This automation frees developers to
                    focus on writing code and innovating, rather than managing
                    infrastructure, thereby accelerating the development cycles.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <h5>
                    <i className="bi bi-lightning-fill me-2"></i>Increased
                    Business Agility
                  </h5>
                  <p>
                    By adopting modular and scalable platform solutions,
                    businesses can respond more swiftly to market changes and
                    opportunities. Platforms enable rapid scaling of
                    applications according to demand, support for diverse
                    software ecosystems, and quicker integration of new
                    technologies. This flexibility ensures that businesses can
                    pivot and adapt strategies promptly, maintaining
                    competitiveness in dynamic markets.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <h5>
                    <i className="bi bi-shield-fill me-2"></i>Robust Security
                  </h5>
                  <p>
                    Platforms inherently enhance security by abstracting
                    underlying infrastructure complexities and standardizing
                    security policies across all applications. Integrated
                    security features such as automated compliance audits,
                    encryption services, and identity management reduce the risk
                    of human error and enforce consistent security measures at
                    scale.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <h5>
                    <i className="bi bi-piggy-bank-fill me-2"></i>Operational
                    Efficiency and Cost Reduction
                  </h5>
                  <p>
                    Platform engineering optimizes resource utilization,
                    reducing waste through more efficient infrastructure
                    management. By leveraging containerization, serverless
                    architectures, and dynamic resource allocation, platforms
                    ensure that organizations only pay for the resources they
                    actually use. Additionally, the consolidation of
                    infrastructure and central management reduces overhead costs
                    associated with maintaining multiple discrete systems.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <h5>
                    <i className="bi bi-arrows-fullscreen me-2"></i>Improved
                    Scalability
                  </h5>
                  <p>
                    The use of platforms enables organizations to scale their
                    operations seamlessly without significant additional
                    investments in hardware or personnel. Cloud-native platforms
                    offer elastic scalability — applications can grow or shrink
                    resource usage based on real-time demand, ensuring
                    performance stability under varying loads.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlatformBenefits;
