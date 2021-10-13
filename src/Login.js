import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Card } from "react-bootstrap";
import Header from "./component/Header";
import { Link, Redirect } from "react-router-dom";
export default function User(prop) {
  const [data, setData] = useState("");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (localStorage.getItem("UserEmail") === data.email) {
      prop.history.push("/about");
    }
    console.log(data);
  }
  if (localStorage.getItem("UserEmail")) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Header />
      <Container>
        <Card style={{ padding: 130, margin: 160 }}>
          <Form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", color: "blue" }}>Login Page</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <span style={{ margin: "0 20px" }}>New User</span>
            <Link to="/register">Register</Link>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
