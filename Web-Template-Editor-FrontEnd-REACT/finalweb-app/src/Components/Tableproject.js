import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
function Tableproject(){
  const[data,setData]=useState([])

  useEffect(()=>{axios.get('http://localhost:8080/projects/project/').then((response)=>{
setData(response.data)


    })},[])  


    return(
        
        <div className="table">
            
        <h1 className="sub-heading">PROJECTS</h1>
 
<div className="row justify-content-center">
<Table className="col-auto" striped bordered hover variant="dark">
  <thead>
    <tr>
      <th width="100">Project ID</th>
      <th width="400">Project Name</th>
      <th > Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>

    {data.map((val,key)=>{
                return(
                    
                    <tr key={key}>
                           <td>{val.projectid}</td>
      <td>{val.projectName}</td>
      <td><Button as="input" type="reset" value="Reset" /></td>
      <td><Button variant="outline-danger" value={val.projectid} onClick={deleteProject} >Delete</Button></td>
                        
                    </tr>
                )
            })}
    
  </tbody>
</Table>
        </div>
        </div>

    )
    function deleteProject(e){

      console.log(e.target.value)

    }
}
export default Tableproject