import React,{ useState, useEffect } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


function SeatTable(params) {
    const {list} = params;

    const [id, setID] = useState(null);
    const [name, setname] = useState('');
    const [seatsNo, setseatsNo] = useState('');
    const getData = () => {
        axios.get(`http://localhost:8080/seats/`)
            .then((getData) => {
                list(getData.data);
            })
    }
    const onDelete = (id) => {
        axios.delete(`http://localhost:8080/seats/${id}`)
        .then(() => {
            getData();
        })
    }
    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
            name,
            seatsNo,
        })
    }
    return (
        <>
        <MODAL />
        <table class="blueTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Row</th>
                    <th>Number</th>
                     <th>Auditorium</th>
                </tr>
            </thead>
            <tbody>
            {
                    list?.map((data) => (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.row}</td>
                    <td>{data.number}</td>
                    <td>{data.auditoriumId}</td>
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
          ADD SEAT
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Row</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="4"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="14"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Auditorium</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="A"
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
  

export default SeatTable;