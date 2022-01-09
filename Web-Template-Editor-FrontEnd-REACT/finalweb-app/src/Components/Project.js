import axios from "axios";
import React, { useEffect, useState } from "react";
import './components.css';
import Details from "./Details";
function Project (props){

    const[project,setProject]=useState([])
    useEffect(()=>{axios.get('http://localhost:8080/projects/project/'+props.match.params.id
    ).then((response)=>{
        setProject(response.data)
        console.log(response.data)

      })},[])
        return(
        
            <div>

            <div className='project'>
            <br/><br/>
            <h1>{project.projectName}</h1><br/>
            <p>{project.projectDescription} </p>
</div>

    <Details/>
            </div>
        )
        
    }

export default Project;