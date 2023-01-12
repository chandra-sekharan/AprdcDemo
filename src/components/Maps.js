import React from "react";
import './styles/visit.css'

const Maps = ()=>{
    return(
        <div className="maps">
            <h1>Maps and Direction</h1>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.151510314925!2d79.30980919604971!3d16.561248156981748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcab414ee829fb5%3A0x3d7b762b8e0298fd!2sAPRDC%20College%2C%20Vijayapuri%20South%2C%20Nagarjuna%20Sagar%2C%20Andhra%20Pradesh%20522439!5e0!3m2!1sen!2sin!4v1673521309709!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <footer></footer>
        </div>
    )
}

export default Maps