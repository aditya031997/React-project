import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Container, Table } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
export default function Home(prop) {
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

  const handleEdit = (e) => {
    e.preventDefault();
    prop.history.push("/update");
  };

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>User Data</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <Button onClick={handleEdit}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
