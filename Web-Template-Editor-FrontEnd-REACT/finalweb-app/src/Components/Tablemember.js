import React from "react";
import { Button, Table } from "react-bootstrap";
function Tablemember(){
    return(
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Member id</th>
      <th> Name</th>
      <th> Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td><Button as="input" type="reset" value="Reset" /></td>
      <td><Button variant="outline-danger">Delete</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td><Button as="input" type="reset" value="Reset" /></td>
      <td><Button variant="outline-danger">Delete</Button></td>
    </tr>
    
  </tbody>
</Table>
    )
}
export default Tablemember