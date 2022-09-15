import React,{ useState, useEffect } from "react";
import axios from 'axios';
function ReservationTypeTable(params) {
    const {list} = params;
    const [id, setID] = useState(null);
    const [name, setname] = useState('');
    const [seatsNo, setseatsNo] = useState('');
    const getData = () => {
      axios.get(`http://localhost:8080/reservationTypes/`)
          .then((getData) => {
              list(getData.data);
          })
  }
  const onDelete = (id) => {
      axios.delete(`http://localhost:8080/reservationTypes/${id}`)
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
        <table class="blueTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>reservation Type</th>
          </tr>
        </thead>
        <tbody>
        {
                    list?.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.reservationType}</td>
            <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
            <td><button type='submit' onClick={updateAPIData}>Update</button></td>
          </tr>
           ))
        }
        </tbody>
      </table>
    )
}
export default ReservationTypeTable;