import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
function Update(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="text" placeholder="987654321" name="contact" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control name="city" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>State</Form.Label>
            <Form.Control name="state" />
          </Form.Group>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Update;
