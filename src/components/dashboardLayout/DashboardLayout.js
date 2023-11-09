import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Container fluid>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={"events"}>
            Events
          </Nav.Link>
          <Nav.Link as={Link} to={"/programs"}>
            Programs
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Content */}
      <Row>
        <Col>
          <h1>Welcome to the Dashboard</h1>
          {/* Add content for the Events and Programs sections here */}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
