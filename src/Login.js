import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Card } from "react-bootstrap";
import Header from "./component/Header";
import { Link, Redirect } from "react-router-dom";
import jsonData from "./database/db.json";
import FormValidation from "./component/FormValidation";
export default function User(prop) {
  const [data, setData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  let name, value;
  function handleChange(e) {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
    setFormErrors({
      ...formErrors,
      [e.target.name]: FormValidation.Login(e.target.name, e.target.value),
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    var isExist = jsonData.Register.findIndex(
      (obj) => obj.email === data.email && obj.password === data.password
    );
    if (isExist !== -1) {
      localStorage.setItem("UserEmail", data.email);
      prop.history.push("/");
    }
  };
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
            </Form.Group>
            {formErrors.email && (
              <div style={{ color: "red", fontSize: 14 }}>{formErrors.email}</div>
            )}
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
            {formErrors.password && (
              <div style={{ color: "red", fontSize: 14 }}>{formErrors.password}</div>
            )}
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
