import React,{ useState, useEffect } from "react";
import axios from 'axios';
function EmployeeTable(params) {
    const {list} = params;

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
    )
}
export default EmployeeTable;