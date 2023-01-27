import React from "react";
import './styles/about.css'
import nirf2017 from './pdf/NIRF-2017.pdf'
import nirf2018 from './pdf/NIRF-2018.pdf'
import nirf2019 from './pdf/NIRF-2019.pdf'
import nirf2020 from './pdf/NIRF-2020.pdf'
import nirf2021 from './pdf/NIRF-2021.pdf'
const Nirf = ()=>{
    return(
        <div className="nirf">
            <center><h1>NIRF</h1></center>
            <ul>
            <li><a href={nirf2017} target="_blank" rel="noreferrer">NIRF 2017</a></li>
            <li><a href={nirf2018} target="_blank" rel="noreferrer">NIRF 2018</a></li>
            <li><a href={nirf2019} target="_blank" rel="noreferrer">NIRF 2019</a></li>
            <li><a href={nirf2020} target="_blank" rel="noreferrer">NIRF 2020</a></li>
            <li><a href={nirf2021} target="_blank" rel="noreferrer">NIRF 2021</a></li>
            </ul>
        </div>
    )
}

export default Nirf