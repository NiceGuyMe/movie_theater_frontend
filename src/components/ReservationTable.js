import React,{ useState, useEffect } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function ReservationTable(params) {
    const {list} = params;
    const [id, setID] = useState(null);
    const [name, setname] = useState('');
    const [seatsNo, setseatsNo] = useState('');
    const getData = () => {
      axios.get(`http://localhost:8080/reservations/`)
          .then((getData) => {
              list(getData.data);
          })
  }
  const onDelete = (id) => {
      axios.delete(`http://localhost:8080/reservations/${id}`)
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
            <th>Id</th>
            <th>Screening</th>
            <th>Employee Reservation</th>
            <th>Reservation Type</th>
            <th>Contact</th>
            <th>Reserved</th>
            <th>Employee Paid</th>
            <th>Paid</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
        {
                    list?.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.screeningId}</td>
            <td>{data.employeeReservedId}</td>
            <td>{data.reservationTypeId}</td>
            <td>{data.reservationTypeId}</td>
            <td>{data.reserved} </td>
            <td>{data.employeePaidId} </td>
            <td>{data.paid} </td>
            <td>{data.active} </td>
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
        ADD RESERVATION
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Screening</Form.Label>
              <Form.Control
                type="text"
                placeholder="A"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee reservation</Form.Label>
              <Form.Control
                type="text"
                placeholder="A"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reservation Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="A"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="A"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reserved</Form.Label>
              <Form.Control
                type="text"
                placeholder="A"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee paid</Form.Label>
              <Form.Control
                type="text"
                placeholder="A"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Paid</Form.Label>
              <Form.Control
                type="text"
                placeholder="A"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Active</Form.Label>
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

export default ReservationTable;