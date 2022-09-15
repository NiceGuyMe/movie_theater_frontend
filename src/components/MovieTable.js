import React,{ useState, useEffect } from "react";
import axios from 'axios';
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
    )
}
export default MovieTable;