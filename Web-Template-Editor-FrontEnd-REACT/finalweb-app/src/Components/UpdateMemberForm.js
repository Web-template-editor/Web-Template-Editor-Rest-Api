import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function UpdateMemberForm() {
    var params=useParams()
    
    const[member_id,setMemberId]=useState()
const[member_name,setMemberName]=useState('')
const[member_github,setMemberGit]=useState('')
const[member_instagram,setMemberInsta]=useState('')
const[member_facebook,setMemberFb]=useState('')
const[member_linkedin,setMemberLinkedin]=useState('')
const[member_project,setMemberProject]=useState('')
useEffect(()=>{axios.get('http://localhost:8080/members/member/'+params.id
).then((response)=>{

    setMemberId(response.data.memberId)
    setMemberName(response.data.memberName)
    setMemberGit(response.data.memberGithub)
    setMemberLinkedin(response.data.memberLinkedIn)
    setMemberFb(response.data.memberFacebook)
    setMemberInsta(response.data.memberInstagram)
    setMemberProject(response.data.project.projectid)

    


  })},[])

    return (
        <div className="container text-white mt-3">
            <h3 className="sub-heading text-white">UPDATE</h3>
            <Form>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={member_name} onChange={(e)=>setMemberName(e.target.value)} type="text" placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextProject">
                    <Form.Label column sm="2">
                        Github Link
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={member_github} onChange={(e)=>setMemberGit(e.target.value)} type="text" placeholder="Github Link" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    LinkedIn Link
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={member_linkedin} onChange={(e)=>setMemberLinkedin(e.target.value)} type="text" placeholder="LinkedIn Link" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Facebook Link
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={member_facebook} onChange={(e)=>setMemberFb(e.target.value)} type="text" placeholder="Facebook Link" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Instagram Link
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={member_instagram} onChange={(e)=>setMemberInsta(e.target.value)} type="text" placeholder="Instagram Link" />

                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Project ID
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={member_project} onChange={(e)=>setMemberProject(e.target.value)} type="text" placeholder="Project ID" />
                        {/* <Button className="mt-4 mb-4" style={{float: 'right'}}  onClick={submitData} variant="outline-primary"><a href="/Members"> Add Member</a></Button><br/> */}
                        <Button onClick={submitData} className="mt-4 mb-4" style={{float: 'right'}}   variant="outline-primary" href="/Members">Update</Button><br/>


                    </Col>
                </Form.Group>
       
            </Form>
        </div>
    )
    function submitData(){
        let projecti={projectid:member_project}
        let member =  {memberId: member_id,
            memberName: member_name,
            memberGithub: member_github,
            memberLinkedIn: member_linkedin,
            memberFacebook: member_facebook,
            memberInstagram: member_instagram,
            project: projecti
        };
    
        console.log(member)
    
    
        axios
        .post("http://localhost:8080/members/member", member)
        .then((response) => {
        });
}
}
export default UpdateMemberForm