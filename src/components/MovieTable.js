import React,{ useState, useEffect } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function MovieTable(params) {
    const {list} = params;

    const [id, setID] = useState(null);
    const [title, setusername] = useState('');
    const [director, setrole] = useState('');
    const [casting, setcasting] = useState('');
    const [description, setdescription] = useState('');
    const [durationMin, setdurationMin] = useState('');

    const getData = () => {
      axios.get(`http://localhost:8080/movies/`)
          .then((getData) => {
              list(getData.data);
          })
  }
  const onDelete = (id) => {
      axios.delete(`http://localhost:8080/movies/${id}`)
      .then(() => {
          getData();
      })
  }
  const updateAPIData = () => {
    axios.put(`ttp://localhost:8080/movies/${id}`, {
      title,
      director,
      casting,
      description,
      durationMin
    })
}
    return (
      <>
      <MODAL />
        <table class="blueTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Director</th>
            <th>Casting</th>
            <th>Synopsis</th>
            <th>duration</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colspan="4">
              <div class="links"><a href="#">&laquo;</a> <a class="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
            </td>
          </tr>
        </tfoot>
        <tbody>
        {
                    list?.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.director}</td>
            <td>{data.casting}</td>
            <td>{data.description}</td>
            <td>{data.durationMin} min </td>
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
        ADD MOVIE
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="titanic"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Director</Form.Label>
              <Form.Control
                type=""
                placeholder="Kevin Feige"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Casting</Form.Label>
              <Form.Control
                type="text"
                placeholder="RDJ"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Synopsis</Form.Label>
              <Form.Control
                type=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type=""
                placeholder="150"
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

export default MovieTable;