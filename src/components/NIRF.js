import React from "react";
import './styles/about.css'
import nirf2017 from './images/NIRF-2017.pdf'
import nirf2018 from './images/NIRF-2018.pdf'
import nirf2019 from './images/NIRF-2019.pdf'
import nirf2020 from './images/NIRF-2020.pdf'
import nirf2021 from './images/NIRF-2021.pdf'
const Nirf = ()=>{
    return(
        <div className="nirf">
            <center><h1>NIRF</h1></center>
            <li><a href={nirf2017} target="_blank">NIRF 2017</a></li>
            <li><a href={nirf2018} target="_blank">NIRF 2018</a></li>
            <li><a href={nirf2019} target="_blank">NIRF 2019</a></li>
            <li><a href={nirf2020} target="_blank">NIRF 2020</a></li>
            <li><a href={nirf2021} target="_blank">NIRF 2021</a></li>
        </div>
    )
}

export default Nirf