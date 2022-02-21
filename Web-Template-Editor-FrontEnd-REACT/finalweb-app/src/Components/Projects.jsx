import React from "react";
import { Button, Table } from "react-bootstrap";
function Projects(){
    const data =[
        {
            year :"2020-2022",project : "OPEN EHR"
        },
        {
            year : "2020-2022", project : "CALANDER MANAGEMENT"
        }
    ]

    return(
        <div className="row justify-content-center">
        <div className=" col-auto table">
            
        <h1 className="projects-heading">PROJECTS</h1>
        <table>
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
        </table>
        </div>
        </div>
    )
}
export default Projects;