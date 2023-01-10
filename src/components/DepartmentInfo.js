import React from "react";
import './styles/Academics.css'


const DepartmentInfo = ({Ddata})=>{

    console.log(Ddata)
    return(
        <div>
            
            <h1>{Ddata.name}</h1>
        </div>
    );
}

export default DepartmentInfo