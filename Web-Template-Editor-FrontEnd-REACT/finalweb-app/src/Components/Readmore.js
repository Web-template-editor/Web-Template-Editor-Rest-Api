import React, { useState } from "react";
import "../App.css";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 200) : <a href="/Project"></a>}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ?<a href="/Project">"...read more"</a> : " show less"}
      </span>
    </p>
  );
};
  
const Readmore = () => {
  return (
    <div class='content'>
      <h4>
        <ReadMore>
          GeeksforGeeks: A Computer Science portal for geeks. 
          It contains well written, well thought and well explained
          computer science, programming articles and quizzes. 
          It provides a variety of services for you to learn, so thrive
          and also have fun! Free Tutorials, Millions of Articles, Live, 
          Online and Classroom Courses ,Frequent Coding Competitions,
          Webinars by Industry Experts, Internship opportunities, and Job
          Opportunities. Knowledge is power!
        </ReadMore>
      </h4>
    </div>
  );
};
  
export default Readmore;