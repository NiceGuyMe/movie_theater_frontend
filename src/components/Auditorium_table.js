import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function AudTable(params) {
  const { list } = params;

  const [name, setName] = useState("");
  const [seatsNo, setseatsNo] = useState("");


  const onDelete = (id) => {
    axios.delete(`http://localhost:8080/auditoriums/${id}`)
  };
  const updateAPIData = (id) => {
    axios.put(`http://localhost:8080/auditoriums/${id}`, {
      name,
      seatsNo,
    });
  };
  const postData = () => {
    axios.put(`http://localhost:8080/auditoriums/`, {
      name,
      seatsNo,
    })
    console.log(name);
    console.log(seatsNo);
  }

  return (
    <>
      <ADDMODAL />
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
                <Button variant="primary" onClick={() => onDelete(data.id)}>Delete</Button>
              </td>
              <td>
                <UPDATEMODAL ID={data.id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  function ADDMODAL() {
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
            <Modal.Title>ADD Auditorium</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onSubmit={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="A"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Place Number</Form.Label>
                <Form.Control
                onChange={(e) => setseatsNo(e.target.value)}
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
            <Button variant="primary" onClick={postData}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function UPDATEMODAL(ID) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Naame,setNaame]= useState('');
    const [No, setNo] = useState("");


    const onChangeNaame = (e) => {
      if(e.target === "Naame") {
          setNaame(e.target.value);
          console.log(Naame);
      }
    }
    const onChangeNo = (e) => {
      if(e.target === "No") {
          setNo(e.target.value);
          console.log(No);
      }
    }
    console.log(No,Naame);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          UPDATE
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD Auditorium</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{Naame}</Form.Label>
                <Form.Control
                  //onChange={(e) => setName(e.target.value)}

                  onChange={(e)=>{onChangeNaame(e)}}
                  placeholder="A"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Place Number</Form.Label>
                <Form.Control
                  //onChange={(e) => setseatsNo(e.target.value)}

                  onChange={(e)=>{onChangeNo(e)}}
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
            <Button variant="primary" onClick={updateAPIData(ID)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }



}


export default AudTable;
