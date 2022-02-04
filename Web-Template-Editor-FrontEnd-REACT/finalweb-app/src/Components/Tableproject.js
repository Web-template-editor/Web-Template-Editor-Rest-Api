import React from "react";
import Project from "./Project";
function Tableproject(){
    const data =[
        {
            year :"2020-2022",project : "OPEN EHR"
        },
        {
            year : "2020-2022", project : "CALANDER MANAGEMENT"
        }
    ]

    return(
        <div className="table">
        <h1>PROJECTS</h1>
        <table>
            <tr>
                <th>YEAR</th>
                <th>PROJECT</th>
                
            </tr>
            {data.map((val,key)=>{
                return(
                    <tr key={key}>
                        <td>{val.year}</td>
                        <td ><a href="/Project">{val.project}</a></td>
                        
                    </tr>
                )
            })}
        </table>

        </div>

    )
}
export default Tableproject