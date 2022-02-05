import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Memberform() {

    return (
        <div className="memform">
            <h3>NEW MEMBER FORM</h3>
            <Form>
                <Form.Group as={Row} className="mb-1" controlId="formPlaintextId">
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
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextProject">
                    <Form.Label column sm="2">
                        Project
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Project" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="mail id" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5" controlId="formPlaintextPhone">
                    <Form.Label column sm="2">
                        Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Phone number" />
                    </Col>
                </Form.Group>
                <Button variant="primary"  style={{float: 'center'}} type="submit">
                Submit
                </Button>
            </Form>
        </div>
    )
}
export default Memberform