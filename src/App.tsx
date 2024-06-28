import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PlatformIntroduction from "./components/PlatformIntroduction";
import PlatformBenefits from "./components/PlatformBenefits";
import ToolsAndTechnologies from "./components/ToolsAndTechnologies";
import PlatformLayers from "./components/PlatformLayers";
import QuizComponent from "./components/QuizComponent";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={NavLink} to="/">
            Platform Engineering Insights
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Introduction
              </Nav.Link>
              <Nav.Link as={NavLink} to="/benefits">
                Benefits
              </Nav.Link>
              <Nav.Link as={NavLink} to="/tools">
                Tools & Technologies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/layers">
                Layers
              </Nav.Link>
              <Nav.Link as={NavLink} to="/quiz">
                Quiz
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<PlatformIntroduction />} />
          <Route path="/benefits" element={<PlatformBenefits />} />
          <Route path="/tools" element={<ToolsAndTechnologies />} />
          <Route path="/layers" element={<PlatformLayers />} />
          <Route path="/quiz" element={<QuizComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
