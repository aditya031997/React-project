import React from "react";
import Header from "./Header";
import "./cnct.css";
import { Container, Card } from "react-bootstrap";
export default function Contact() {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", margin: 5 }}>Contact Us</h1>
      <Container>
        <Card style={{ padding: 60, margin: 40 }}>
          <div className="container">
            <form action="action_page.php">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

              <label for="country">Country</label>
              <input type="text" id="country" name="country" placeholder="Enter country name.." />
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: 200 }}
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </Card>
      </Container>
    </div>
  );
}
