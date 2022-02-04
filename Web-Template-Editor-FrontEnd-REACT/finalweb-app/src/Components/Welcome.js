import React from "react";
import Tableproject from "./Tableproject";

function Welcome(){
    const styleObj = {
        fontSize: 78,
        color:"aliceblue",
        textAlign: "center",
        
        
    }
    const styleWeb ={
        fontSize:33,
        textAlign:"left",
        color:"white",
        fontfamily:"Copperplate Papyrus",

    }
    const styleheading={
        fontSize:29,
        textAlign:"right",
        color:"white"
    }
    const stylepara={
        fontSize:14,
        textAlign:"right",
        color:"white"
    }
    
    return(
        <div>
        <h1 style={styleObj}>WELCOME</h1>
        <h1 style={styleWeb}>TKM COLLEGE OF ENGINEERING</h1>
        <h1 style={styleheading}>ABOUT</h1>
        <p style={stylepara}>TKM Engineering College kollam here presents a platform for the next generation.<br/> 
        MCA batch of 2020-2022 created this web page as their project during their final semester.<br/>
        This page is created to expose the young ideas to the world.<br/>
        This place gives you a great start and exposure.</p>
        <Tableproject/>

        </div>

    )
}

export default Welcome;