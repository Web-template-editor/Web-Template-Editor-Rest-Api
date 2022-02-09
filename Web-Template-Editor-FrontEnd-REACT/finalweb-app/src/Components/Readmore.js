import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 200) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ?"...read more": " show less"}
      </span>
    </p>
  );
};
  
const Readmore = () => {
  return (
    <div class='content'>
      <h4>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://healthitanalytics.com/images/site/features/_normal/ThinkstockPhotos-637917212.jpg" />
  <Card.Body>
    <Card.Title>Project Title</Card.Title>
    <Card.Text>
    <ReadMore >
    openEHR is a technology for e-health consisting of open platform specifications, clinical models and software that together define a domain-driven information systems platform for healthcare and medical research. The principal architectural concepts include the patient-centric health record, clinical guidelines and decision support.
        </ReadMore>
    </Card.Text>
    <Button variant="info"><a href="/Project">Go to Project</a></Button>
  </Card.Body>
</Card>
        
      </h4>
    </div>
  );
};
  
export default Readmore;