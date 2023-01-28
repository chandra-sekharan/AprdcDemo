import React from "react";
import './styles/Administration.css'
import RTITelugu from './pdf/RTI_Telugu.pdf'
import RTIEnglish from './pdf/RTI_English.pdf'

const RTI = ()=>{

    return(
        <div>
            <br></br><center><h1>Right To Information</h1></center>
            <div className="rtipdf">
            <iframe title="RTI" src={RTITelugu} frameBorder="0" scrolling="auto" ></iframe>
            <iframe title="RTI" src={RTIEnglish} frameBorder="0" scrolling="auto" ></iframe>
            </div>
        </div>
    )
}

export default RTI