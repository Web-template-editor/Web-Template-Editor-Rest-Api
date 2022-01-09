import axios from "axios";
import React, { useEffect, useState } from "react";
import './components.css';
import Details from "./Details";
function Project (props){

    const[project,setProject]=useState([])
    const[datas,setDatas]=useState([])
    useEffect(()=>{axios.get('http://localhost:8080/members/membersbyprojectname/'+props.match.params.id
    ).then((response)=>{

        setDatas(response.data)

        setProject(response.data[0].project)




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