

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
function Projects(){
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
        <div className="row justify-content-center">
        <div className=" col-auto table">
            
        <h1 className="projects-heading">PROJECTS</h1>
        <table>
            <thead>
                <tr>
                <th>YEAR</th>
                <th>PROJECT</th>
                </tr>
            </thead>
            <tbody>
            {data.map((val,key)=>{
                return(
                    
                    <tr key={key}>
                        <td>2020-2022</td>
                        <td ><a href={"/Project/"+val.projectid}>{val.projectName}</a></td>
                        
                    </tr>
                )
            })}
            </tbody>
        </table>
        </div>
        </div>
    )
}
export default Projects;