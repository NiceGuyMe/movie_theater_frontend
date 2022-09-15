import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function EmployeeTable(params) {
  const { list } = params;

  const [id, setID] = useState(null);
  const [username, setusername] = useState('');
  const [role, setrole] = useState('');
  const [enabled, setenabled] = useState('');

  const getData = () => {
    axios.get(`http://localhost:8080/employees/`)
      .then((getData) => {
        list(getData.data);
      })
  }
  const onDelete = (id) => {
    axios.delete(`http://localhost:8080/employees/${id}`)
      .then(() => {
        getData();
      })
  }
  const updateAPIData = (id) => {
    axios.put(`http://localhost:8080/employees/${id}`, {
      username,
      role,
      enabled
    })
  }
  return (
    <>
      <MODAL />
      <table class="blueTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Role</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {
            list?.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.role}</td>
                <td>{data.enabled}</td>
                <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
                <td><button type='submit' onClick={updateAPIData}>Update</button></td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </>
  )
}

function MODAL() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD EMPLOYEE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>uSERNAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="TONIO"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ROLE</Form.Label>
              <Form.Control
                type=""
                placeholder="ADMIN"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ACTIVITY</Form.Label>
              <Form.Control
                type=""
                placeholder="1"
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


export default EmployeeTable;