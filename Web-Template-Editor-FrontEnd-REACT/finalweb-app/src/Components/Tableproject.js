import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
function Tableproject(){
  const[data,setData]=useState([])

  useEffect(()=>{axios.get('http://localhost:8080/projects/project/').then((response)=>{
setData(response.data)


    })},[])  
    // const data =[
    //     {
    //         year :"2020-2022",project : "OPEN EHR"
    //     },
    //     {
    //         year : "2020-2022", project : "CALANDER MANAGEMENT"
    //     }
    // ]

    return(
        
        <div className="table">
            
        <h1 className="sub-heading">PROJECTS</h1>
        {/* <table>
            <tr>
                <th>YEAR</th>
                <th>PROJECT</th>
                
            </tr>
            {data.map((val,key)=>{
                return(
                    <tr key={key}>
                        <td>{val.year}</td>
                        <td ><a href="/Project">{val.project}</a></td>
                        
                    </tr>
                )
            })}
        </table> */}
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
    {/* <tr>
      <td>101</td>
      <td>OPEN EHR</td>
      <td><Button as="input" type="reset" value="Reset" /></td>
      <td><Button variant="outline-danger">Delete</Button></td>
    </tr>
    <tr>
      <td>102</td>
      <td>Web Template Editor</td>
      <td><Button as="input" type="reset" value="Reset" /></td>
      <td><Button variant="outline-danger">Delete</Button></td>
    </tr> */}
    {data.map((val,key)=>{
                return(
                    
                    <tr key={key}>
                           <td>{val.projectid}</td>
      <td>{val.projectName}</td>
      <td><Button as="input" type="reset" value="Reset" /></td>
      <td><Button variant="outline-danger">Delete</Button></td>
                        
                    </tr>
                )
            })}
    
  </tbody>
</Table>
        </div>
        </div>

    )
}
export default Tableproject