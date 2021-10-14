import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Header(prop) {
  const history = useHistory();
  function handleClear() {
    localStorage.clear();
    history.push("/login");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Link to="/" className="mx-4  text-light text-decoration-none">
              Home
            </Link>
            <Link to="/about" className="mx-4 text-light text-decoration-none">
              About
            </Link>
            <Link to="/contact" className="mx-4 text-light text-decoration-none">
              Contact
            </Link>
          </Nav>
          <div>
            <Nav>
              <NavDropdown id="nav-dropdown-dark-example" title="Dropdown" menuVariant="dark">
                {localStorage.getItem("UserEmail") ? (
                  <>
                    <Link to="/about" className="text-light text-decoration-none">
                      About
                    </Link>
                    <br />
                    <Button
                      variant="link"
                      className="text-light text-decoration-none p-0"
                      onClick={handleClear}
                    >
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link to="/register" className="text-light text-decoration-none">
                      Registration
                    </Link>
                    <br />
                    <Link to="/login" className="text-light">
                      Login
                    </Link>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
