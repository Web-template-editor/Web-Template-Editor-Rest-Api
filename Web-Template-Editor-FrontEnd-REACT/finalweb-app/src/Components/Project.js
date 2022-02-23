import axios from "axios";
import React, { useEffect, useState } from "react";
import './components.css';
import Details from "./Details";
function Project (props){

    const[project,setProject]=useState([])
    const[datas,setDatas]=useState([])
    useEffect(()=>{axios.get('http://localhost:8080/members/membersbyprojectid/'+props.match.params.id
    ).then((response)=>{

        setDatas(response.data)

        setProject(response.data[0].project)

      })},[])

        return(
        
            <div className='project container bg-dark text-white'>
            <br/><br/>
            <h1 className="project-name">{project.projectName}</h1><br/>
            <p>{project.projectDescription}</p>


    <Details datas={datas} projectdata={project}/>
            </div>
        )
        
    }

export default Project;