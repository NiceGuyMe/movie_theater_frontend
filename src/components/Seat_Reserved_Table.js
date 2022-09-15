import React,{ useState} from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function Seat_Reserved_Table(params) {
    const {list} = params;
    const [name, setname] = useState('');
    const [seatsNo, setseatsNo] = useState('');
    const getData = () => {
        axios.get(`http://localhost:8080/seatReserveds/`)
            .then((getData) => {
                list(getData.data);
            })
    }
    const onDelete = (id) => {
        axios.delete(`http://localhost:8080/seatReserveds/${id}`)
        .then(() => {
            getData();
        })
    }
    const updateAPIData = (id) => {
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
                    <th>Seat Row</th>
                    <th>Seat number</th>
                     <th>Auditorium</th>
                     <th>Movie</th>
                </tr>
            </thead>
            <tbody>
            {
                    list?.map((data) => (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.seat_id.row}</td>
                    <td>{data.seat_id.number}</td>
                    <td>{data.seat_id.auditorium.name}</td>
                    <td>{data.reservation_id.screening_id.movie.title}</td>
                    <td> <Button variant="primary" onClick={() => onDelete(data.id)}>Delete</Button></td>
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
          ADD SEAT RESERVED
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Seat</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="5"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Reservation</Form.Label>
                <Form.Control
                  type=""
                  placeholder="5"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Screening</Form.Label>
                <Form.Control
                  type=""
                  placeholder="7"
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
  

export default Seat_Reserved_Table;