import React from "react";
import './styles/loader.css'
import logo from './images/logo.png'

const Loader = ()=>{
    return(
        <div className="loadersection">
            <div className="loaderCard">
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}

export default Loader