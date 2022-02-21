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
        
            <div className='project container bg-dark text-white'>
            <br/><br/>
            <h1 className="project-name">OPEN EHR</h1><br/>
            <p>asjkzsmfdl.masdfslldsflk;dsanflansf';adsf sasfddkfma;jlma'sd;lfmads;lmfasjkfdjk;asdf fdfnsaisfdjn;f asdfdsfjkfdas;lnkf asfdnlkjalkfdkhlj;fdlm  ,dsanflansf lanf </p>


    <Details datas={datas}/>
            </div>
        )
        
    }

export default Project;