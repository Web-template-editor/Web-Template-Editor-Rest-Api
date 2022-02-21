import React from "react";
import { ListGroup } from "react-bootstrap";

function Details(props) {



    return (
       
    

        <ListGroup className="container">
        <h1>DETAILS</h1>

            <ListGroup.Item>External Guide</ListGroup.Item>
            <ListGroup.Item>Internal Guide</ListGroup.Item>
            <ListGroup.Item action href="/Media">Member 1</ListGroup.Item>

{
    (props.datas).map((val,index)=>{
        return(
            <ListGroup.Item key={index} action href="/Media">{val.memberName}</ListGroup.Item>

            
        )
    })

}



   
            

            {/* <ListGroup.Item>Member 2</ListGroup.Item>
            <ListGroup.Item>Member 3</ListGroup.Item> */}
           
            
        </ListGroup>
               



  

           
        )
}

export default Details;