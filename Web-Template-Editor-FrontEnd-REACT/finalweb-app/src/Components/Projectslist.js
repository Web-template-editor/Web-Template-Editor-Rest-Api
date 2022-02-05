import React from "react";
import { Button } from "react-bootstrap";
import Tableproject from "./Tableproject";
function Projectlist(){
    return(
        <div className="Projlist">
            <h1>  </h1>
            <Button style={{float: 'right'}}  variant="outline-primary"><a href="/Projectform"> Add New Projects</a></Button><br/>
            <Tableproject/>
        </div>
    )
}
export default Projectlist