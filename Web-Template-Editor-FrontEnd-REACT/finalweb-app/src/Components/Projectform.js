import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Projectform() {

    return (
        <div className="projform container bg-dark">
            <br />
            <h3 className="sub-heading text-white">ADD NEW PROJECT</h3>
            <Form className="text-white">
                <Form.Group as={Row} className=" mb-2" controlId="formPlaintextId">
                    <Form.Label column sm="2">
                        PROJECT ID
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                       PROJECT NAME
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Name" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextGuide">
                    <Form.Label column sm="2">
                        External GUIDE
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Guide" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextIntGuide">
                    <Form.Label column sm="2">
                        Internal GUIDE
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="GUIDE" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextAddMembers">
                    <Form.Label column sm="2">
                      Members
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="number" />
                    
                    <Button className="mt-4 mb-4" style={{float: 'right'}}  variant="outline-primary"><a href="/Memberform"> Add Project</a></Button><br/>
                    </Col>
                </Form.Group>

            </Form>
        </div>
    )
}
export default Projectform