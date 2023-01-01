import React from "react";
import './styles/submenu.css'
import {Link} from 'react-router-dom';


const Submenu = ({items,close}) =>{
    
    return(
        <div className="submenu">
        <ul id="submenus">{items.map(menname => <Link style={{textDecoration: 'none'}} to={menname.id}><li key={menname.name} onClick={close}> {menname.name} </li></Link>)}</ul>   
        </div>
    );
}

export default Submenu;