import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./style.scss";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Perform login logic if needed

    // Redirect to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-background">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <div className="login-container">
              <h2 className="header">Login</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleLoginClick}>
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
