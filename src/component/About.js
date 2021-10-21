import React from "react";
import Header from "./Header";
import img1 from "../image/about.jpg";
import { Card, Button } from "react-bootstrap";
export default function About() {
  return (
    <div>
      <Header />
      <h1>About page</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Img variant="top" src={img1} alt="" />
          <Card.Text>About page</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
