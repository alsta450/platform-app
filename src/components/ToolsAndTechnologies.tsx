// ToolsAndTechnologies.tsx
import React from "react";
import { Card, ListGroup, Accordion } from "react-bootstrap";
import "./ToolsAndTechnologies.css"; // Assuming you create this CSS file

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

const tools = [
  {
    name: "Crossplane",
    description:
      "Crossplane is an open-source Kubernetes add-on that enhances Kubernetes clusters, enabling the management of infrastructure in the same way as applications. Crossplane orchestrates more than just containers with Kubernetes, integrating infrastructure provisioning with application lifecycle management and enabling GitOps for both. This approach unifies the management of applications and their dependent infrastructure, supporting multi-cloud environments by allowing developers to declare infrastructure needs alongside application resources.",
  },
  {
    name: "Kratix",
    description:
      "Kratix is a promising tool designed to help organizations create powerful, self-service platform-as-a-product offerings. Built on top of Kubernetes, Kratix enables platform teams to deliver a platform that evolves with the needs of developers. Teams can craft custom platform promises defining the services and resources application developers require. This tool facilitates the delivery of these resources through a simple, automated workflow, reducing the time spent on provisioning and managing infrastructure.",
  },
  {
    name: "Argo CD",
    description:
      "Argo CD is a critical tool in the modern platform engineer's toolkit. It is a declarative, GitOps continuous delivery tool for Kubernetes, automating the deployment of desired application states in Kubernetes clusters. By tracking updates to branches, tags, or specific versions of manifests in Git repositories, Argo CD simplifies maintaining consistency between configuration files and the live state of resources.",
  },
  {
    name: "Terraform",
    description:
      "Terraform by HashiCorp is an open-source infrastructure as code software tool that enables the definition and provisioning of data center infrastructure using a high-level configuration language. It is cloud-agnostic, allowing a single configuration to manage multiple service providers and handle cross-cloud dependencies. This capability simplifies management and orchestration, facilitating seamless migration and management of cloud resources.",
  },
];


export default ToolsAndTechnologies;
