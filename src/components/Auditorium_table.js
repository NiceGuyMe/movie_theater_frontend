import React from "react";

function AudTable(params) {
    const {list} = params;
    return (
        <table class="blueTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Auditorium name</th>
                    <th>Place number</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td colspan="3">
                        <div class="links">
                            <a href="#">&laquo;</a>{" "}
                            <a class="active" href="#">
                                1
                            </a>{" "}
                            <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
                            <a href="#">&raquo;</a>
                        </div>
                    </td>
                </tr>
            </tfoot>
            <tbody>
            {
                    list?.map((data) => (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.seatsNo}</td>
                </tr>
                  ))
                }
            </tbody>
        </table>
    )
}
export default AudTable;