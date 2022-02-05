import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Projectform() {

    return (
        <div className="projform">
            <h3>NEW PROJECT FORM</h3>
            <Form>
                <Form.Group as={Row} className="mb-1" controlId="formPlaintextId">
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
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextGuide">
                    <Form.Label column sm="2">
                        External GUIDE
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Guide" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="formPlaintextIntGuide">
                    <Form.Label column sm="2">
                        Internal GUIDE
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="GUID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5" controlId="formPlaintextAddMembers">
                    <Form.Label column sm="2">
                      Members
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="number" />
                    
                    <Button style={{float: 'right'}}  variant="outline-primary"><a href="/Memberform"> Add Members</a></Button><br/>
                    </Col>
                </Form.Group>
                <Button variant="primary"  style={{float: 'center'}} type="submit">
                Submit
                </Button>
            </Form>
        </div>
    )
}
export default Projectform