import React from "react";
import { Button, Table } from "react-bootstrap";
function Tablemember(){
    return(
      <div className="row justify-content-center mt-4">
  
  <Table className="col-auto" striped bordered hover variant="dark">
  <thead>
    <tr>
      <th width="100">Member id</th>
      <th width="400"> Name</th>
      <th > Edit</th>
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
      </div>
      
    )
}
export default Tablemember