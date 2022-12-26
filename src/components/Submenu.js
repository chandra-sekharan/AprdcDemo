import React from "react";
import './styles/submenu.css'


const Submenu = ({items}) =>{
    
    return(
        <div className="submenu">
        <ul id="submenus">{items.map(name => <li key={name}> {name} </li>)}</ul>   
        </div>
    );
}

export default Submenu;