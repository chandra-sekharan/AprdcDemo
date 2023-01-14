import React from "react";
import './styles/Academics.css'


const DepartmentInfo = ({Ddata})=>{

    console.log(Ddata)
    return(
        <div>
            <div className="faculty">
        <h1>DEPARTMENT OF {Ddata.name}</h1><br></br><br></br>
         <h3>Our Faculty</h3><br></br><br></br>
         <div className="departmentFAC">
         <table>
            <tr>
                <th>Name of the Employee</th>
                <th>Qualification</th>
                <th>Subject</th>
                <th>Phone No</th>
                <th>Photo</th>
            </tr>
            {Ddata.faculty.map(data =>
            <tr>
             <td>{data["Name of the Employee"]}</td>
             <td>{data.Qualification}</td>
             <td>{data.Subject}</td>
             <td>{data["Phone No"]}</td>
             <td><img src={data.Photo} alt=""/></td>
            </tr>    
            )}

         </table>
         </div>
        </div>
            
        </div>
    );
}

export default DepartmentInfo