import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Container, Table } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Update from "./Update";
import { Helmet } from "react-helmet";
export default function Home(prop) {
  const [modalShow, setModalShow] = useState(false);
  const [data, SetData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("http://localhost:8000/Register").then((reqs) => {
      reqs.json().then((result) => {
        SetData(result);
        //console.log(result);
      });
    });
  };

  const handleDelete = (id) => {
    fetch("http://localhost:8000/Register/" + id, {
      method: "DELETE",
    }).then((reqs) => {
      reqs.json().then((result) => {
        alert("Deleted");
        getData();
      });
    });
  };

  return (
    <div>
      <Header />
      <Helmet>
        <style>{"body { background-color: red; }"}</style>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>User Data</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td key={i}>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </Button>
                  <Update show={modalShow} onHide={() => setModalShow(false)} />
                  <Button variant="primary" className="m-2" onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
