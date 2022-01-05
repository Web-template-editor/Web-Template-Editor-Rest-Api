import React from "react";
import { ListGroup } from "react-bootstrap";

function Details() {

    return (
    

        <ListGroup>
        <h1 >DETAILS</h1>

            <ListGroup.Item>External Guide</ListGroup.Item>
            <ListGroup.Item>Internal Guide</ListGroup.Item>
            <ListGroup.Item action href="/Media">Member 1</ListGroup.Item>
            <ListGroup.Item>Member 2</ListGroup.Item>
            <ListGroup.Item>Member 3</ListGroup.Item>
           
            
        </ListGroup>
               



  

           
        )
}

export default Details;