import React from "react";
import Tableproject from "./Tableproject";
import Readmore from "./Readmore";
import { Card } from "react-bootstrap";


function Welcome(){
   
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

    
    return(
        <div className="container">
        <h2>WELCOME</h2>
        <h1 style={styleWeb}>TKM COLLEGE OF ENGINEERING</h1>
        
        <Card className="bg-dark text-white">
  <Card.Img src="https://cdn.mwallpapers.com/photos/celebrities/colors/md/work-android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4khd-wallpapers-desktop-background-android-iphone-1080p-4k-k3t7m.jpg" alt="Card image" height="100px"/>
  <Card.ImgOverlay>
    <Card.Title style={{color:"black"}}>ABOUT</Card.Title>
    <Card.Text style={{color:"black"}}>
    TKM Engineering College kollam here presents a platform for the next generation.
        MCA batch of 2020-2022 created this web page as their project during their final semester.
        This page is created to expose the young ideas to the world.
        This place gives you a great start and exposure.
    </Card.Text>
   
  </Card.ImgOverlay>
</Card>
<br/>
        
       
        {/* <Tableproject/> */}
        <Readmore/>

        </div>

    )
}

export default Welcome;