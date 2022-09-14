import React from "react";

function MovieTable(params) {
    const {list} = params;
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
            <td>{data.duration} min </td>
          </tr>
           ))
        }
        </tbody>
    
      </table>
    )
}
export default MovieTable;