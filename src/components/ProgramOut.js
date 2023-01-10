import React from "react";
import ProgramOutcome from './images/ProgramOut.pdf'

const ProgramOut = () =>{
    return(
        <div className="programOut">
        <iframe src={ProgramOutcome} frameBorder="0" scrolling="auto" ></iframe>
        </div>
    );
}

export default ProgramOut