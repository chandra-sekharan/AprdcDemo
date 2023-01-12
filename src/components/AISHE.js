import React from "react";
import './styles/about.css'
import ModalImage from 'react-modal-image'
import Aishe1 from './images/AISHE1.jpg';
import Aishe from './images/AISHE.jpg';
const AISHE = ()=>{
    return(
        <div className="aishe">
            
            <center><ModalImage
                small={Aishe1}
                large={Aishe}
                hideDownload={true}
                alt="AISHE"
                /></center>
            
        </div>
    )
}

export default AISHE