import React from "react";

function ReservationTable(params) {
    const {list} = params;
    return (
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
            <td>{data.screeningId}</td>
            <td>{data.employeeReservedId}</td>
            <td>{data.reservationTypeId}</td>
            <td>{data.reservationTypeId}</td>
            <td>{data.reserved} </td>
            <td>{data.employeePaidId} </td>
            <td>{data.paid} </td>
            <td>{data.active} </td>
          </tr>
           ))
        }
        </tbody>
    
      </table>
    )
}
export default ReservationTable;