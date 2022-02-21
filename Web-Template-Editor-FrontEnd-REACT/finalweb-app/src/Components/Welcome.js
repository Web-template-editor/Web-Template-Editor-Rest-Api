import React from "react";
import Readmore from "./Readmore";
import { Card } from "react-bootstrap";
import Home from "./Home";


function Welcome(){
   
    const styleWeb ={
        fontSize:33,
        textAlign:"left",
        color:"white",
        fontfamily:"Copperplate Papyrus",

    }
    const styleheading={
        fontSize:180,
        textAlign:"center",
        color:"white"
    }

    
    return(
        <div className="container">
                    <Home/>

        <h2 style={styleheading}>WELCOME</h2>
        <h1 style={styleWeb}>TKM COLLEGE OF ENGINEERING</h1>
        
        <Card className="text-white">
        <Card.Title className="" style={{color:"black",fontSize:'3rem',textAlign:'center'}}>ABOUT</Card.Title>
    <Card.Text className="p-2" style={{color:"black"}}>
    TKM Engineering College kollam here presents a platform for the next generation.
        MCA batch of 2020-2022 created this web page as their project during their final semester.
        This page is created to expose the young ideas to the world.
        This place gives you a great start and exposure.
    </Card.Text>
   
</Card>
<br/>
        
       
        {/* <Tableproject/> */}
        <Readmore/>

        </div>

    )
}

export default Welcome;