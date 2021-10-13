import React from "react";
import { Col, Form, Button, Row, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Update(prop) {
  const handleUpdate = (e) => {
    e.preventDefault();
    prop.history.push("/");
  };
  return (
    <div>
      <Container>
        <Card style={{ padding: 100, margin: 120 }}>
          <Form>
            <h1 style={{ textAlign: "center", color: "blue" }}>Update Data</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridId">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Id" name="id" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" name="email" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" name="address" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleUpdate}>
              Update
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
