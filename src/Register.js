import React, { useState } from "react";
import { Col, Form, Button, Row, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Home from "./component/Home";
export default function Register(prop) {
  const [val, setVal] = useState({ email: "", password: "" });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // setVal((values) => ({ ...values, [name]: value }));
    setVal({ ...val, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(val);
    localStorage.setItem("UserEmail", val.email);
    localStorage.setItem("UserPassword", val.password);
    prop.history.push("/login");
    setVal({});
  }

  return (
    <div>
      <Home />
      <Container>
        <Card style={{ padding: 100, margin: 120 }}>
          <Form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", color: "blue" }}>Registration Page</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" name="address" onChange={handleChange} />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control name="city" onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>State</Form.Label>
                <Form.Control name="state" onChange={handleChange} />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
            <span style={{ margin: "0 20px" }}>Aleady have a account</span>
            <Link to="/login">Login</Link>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
