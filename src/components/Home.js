import React from "react";
import Header from "./Header";
import './styles/Home.css';
import ncc from './images/ncc.jpg'
import sports from './images/sports.jpg'
import arrowleft from './images/arrowleft.png'
import nss from './images/ncc.jpg'
const Home = ()=>{
 
    const Moments = [
        {
            id:1,
            src:ncc,
            title:"National Cadet Corps",
            desc:"NCC Unit Starting Date: September, 1984.  139 Coy 25(A) Bn N.C.C  NCC Officer: Lt D Vijaya Kumar",

        },
        {
            id:2,
            src:sports,
            title:"Sports",
            desc:"Lorium ipsem is a dummy text used for random purpose it is used by developers for dummy content",
        },
        {
            id:3,
            src:nss,
            title:"National ServiceScheme",
            desc:"Lorium ipsem is a dummy text used for random purpose it is used by developers for dummy content",
        },
    ]

    return(
        <>
        <div className="Home">
            <Header/>
            <center><h1>ALL THE RICHES IN THE WORLD CANNOT <br></br> MATCH THE WEALTH OF EDUCATION</h1></center>
        </div>
        <div className="homesection">
        <div className="events">
            <h1>Moments of APRDC</h1>
            {Moments.map(data =>
            <div className="event">
              <div className="image">
                <img src={data.src} alt="ncc" />
              </div>
              <h2>{data.title}</h2>
              <h6>{data.desc}</h6>
              <img src={arrowleft} id="more" /><span>Visit For More</span>
            </div>
            )}
            <footer></footer>
            </div> 
            </div>
        </>
    );
}

export default Home;