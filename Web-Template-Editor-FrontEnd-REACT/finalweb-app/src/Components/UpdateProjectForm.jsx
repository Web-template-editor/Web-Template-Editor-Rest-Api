import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function UpdateProjectForm(props) {

    const[data,setData]=useState([])

    useEffect(()=>{axios.get('http://localhost:8080/projects/project/'+props.match.params.id
    ).then((response)=>{

        console.log(response.data)
        setData(response.data)

        // setProject(response.data[0].project)

      })},[])
const[project_id,setProjectId]=useState('')
const[project_name,setProjectName]=useState('')
const[external_guide,setProjectExternalGuide]=useState('')
const[internal_guide,setProjectInternalGuide]=useState('')
const[project_description,setProjectDescription]=useState('')


    return (
        <div className="projform container bg-dark">
            <br />
            <h3 className="sub-heading text-white">UPDATE</h3>
            <Form className="text-white">
                <Form.Group as={Row} className=" mb-2" controlId="formPlaintextId">
                    <Form.Label column sm="2">
                        PROJECT ID
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={data.projectid} onChange={(e)=>setProjectId(e.target.value)} type="text" placeholder="ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                       PROJECT NAME
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={data.projectName} onChange={(e)=>setProjectName(e.target.value)} type="text"  placeholder="Name" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextGuide">
                    <Form.Label column sm="2">
                        External GUIDE
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={data.externalGuide} onChange={(e)=>setProjectExternalGuide(e.target.value)} type="text" placeholder="External Guide" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextIntGuide">
                    <Form.Label column sm="2">
                        Internal GUIDE
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={data.internalGuide} onChange={(e)=>setProjectInternalGuide(e.target.value)} type="text" placeholder="Internal Guide" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}  className="mb-2" controlId="formPlaintextprojectDescription">
                    <Form.Label column sm="2">
                        Project Description
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={data.projectDescription}  onChange={(e)=>setProjectDescription(e.target.value)} as='textarea' rows={10} placeholder='Describe about your project' type="text"  />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextAddMembers">
                    {/* <Form.Label column sm="2">
                      Members
                    </Form.Label> */}
                     {/* <Form.Control type="text" placeholder="number" /> */}

                    <Col sm="10">
                    
                    <Button onClick={submitData} className="mt-4 mb-4" style={{float: 'right'}} href='/Projectlist'  variant="outline-primary">ADD</Button><br/>
                    </Col>
                </Form.Group>

            </Form>
        </div>
    )
    function submitData(){
        let employee =  {projectid: project_id,
        projectName: project_name,
        projectDescription: project_description,
        internalGuide: internal_guide,
        externalGuide: external_guide};
    
    
    
        axios
        .put("http://localhost:8080/projects/project", employee)
        .then((response) => {
        });
}



}
export default UpdateProjectForm