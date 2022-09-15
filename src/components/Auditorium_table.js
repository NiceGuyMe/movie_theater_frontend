
import axios from 'axios';import React,{ useState, useEffect } from "react";
function AudTable(params) {
    const {list} = params;

    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [seatsNo, setseatsNo] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setseatsNo(localStorage.getItem('seatsNo'));
    }, []);

    const getData = () => {
        axios.get(`http://localhost:3000/auditoriums/`)
            .then((getData) => {
                list(getData.data);
            })
    }
    const onDelete = (id) => {
        axios.delete(`http://localhost:8080/auditoriums/${id}`)
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
                    <th>ID</th>
                    <th>Auditorium name</th>
                    <th>Place number</th>
                </tr>
            </thead>
            <tbody>
            {
                    list?.map((data) => (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.seatsNo}</td>
                    <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
                    <td><button type='submit' onClick={updateAPIData}>Update</button></td>
                </tr>
                  ))
                }
            </tbody>
        </table>
    )
}

export default AudTable;