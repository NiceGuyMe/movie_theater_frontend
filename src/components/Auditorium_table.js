import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function AudTable(params) {
  const { list } = params;

  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [seatsNo, setseatsNo] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setseatsNo(localStorage.getItem("seatsNo"));
  }, []);

  const getData = () => {
    axios.get(`http://localhost:3000/auditoriums/`).then((getData) => {
      list(getData.data);
    });
  };
  const onDelete = (id) => {
    axios.delete(`http://localhost:8080/auditoriums/${id}`).then(() => {
      getData();
    });
  };
  const updateAPIData = () => {
    axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
      name,
      seatsNo,
    });
  };

  return (
    <>
      <MODAL />
      <table class="blueTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Auditorium name</th>
            <th>Place number</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.seatsNo}</td>
              <td>
                <button onClick={() => onDelete(data.id)}>Delete</button>
              </td>
              <td>
                <button type="submit" onClick={updateAPIData}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function MODAL() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD Auditorium
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="A"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Place Number</Form.Label>
              <Form.Control
                type=""
                placeholder="15"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AudTable;
