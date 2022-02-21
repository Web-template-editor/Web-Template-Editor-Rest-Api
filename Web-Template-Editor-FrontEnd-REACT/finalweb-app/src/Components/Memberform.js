import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Memberform() {

    return (
        <div className="container text-white mt-3">
            <h3 className="sub-heading text-white">ADD NEW MEMBER</h3>
            <Form>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextId">
                    <Form.Label column sm="2">
                        Member ID
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextProject">
                    <Form.Label column sm="2">
                        Project
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Project" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="mail id" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextPhone">
                    <Form.Label column sm="2">
                        Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Phone number" />
                        <Button className="mt-4 mb-4" style={{float: 'right'}}  variant="outline-primary"><a href="/Memberform"> Add Member</a></Button><br/>

                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}
export default Memberform