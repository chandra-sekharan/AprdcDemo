import React, { useState } from "react";
import '../components/styles/header.css';
import logo from './images/collegelogo12.png';
import logo1 from './images/AP1.png';
import Submenu from "./Submenu";


const Header =()=>{

    const Administration = ["Administrative staff" ,"committees","Teaching staff","Non-teaching staff", "Internal complaints committee"];
    const Academics = ["Programs Offered","Admissions","Program Outcomes","Departments","Academic Calender","Achievements","Skill based courses","Syllabus"];
    const Facilities=["Hostel","Health Center","RO Water Plant","Internet Facility","GYM"];
    const Campus = ["Library","Rusa","NCC","NSS","Placement Cell","Digital Classroom","Laboratories"];
    const Visit = ["Visit APRDC" , "Maps and Direction"];
    const About = ["History of APRDC","List of succcession of Principals","College Profile","NIRF","AISHE"];

    const [menuitems , setitems] = useState(['']);
    
    const sub = (data)=>{                                               //An Event handler for submenu display
        document.getElementById('submenus').style.display="block";         
        setitems(data);
    }
    
    const open = () =>{                                              //An event handler for main menu opening                            
        var home = document.getElementsByClassName('homesection')[0];
        home.style.display="none";
        var l =document.getElementById('menubox');    
        l.style.marginTop = '0';
        l.style.opacity = '1';
         
     var k = document.querySelectorAll('li') ;
      for(let i=0 ; i<=5;i++)
      {    
        k[i].style.marginTop = '40px';
        k[i].style.opacity = '1';
     }
        
    }

   const close = ()=>{                                            //An event handler for main menu closing  
         
    var home = document.getElementsByClassName('homesection')[0];
    home.style.display="block";
    
       document.getElementById('submenus').style.display="none";
        var z =document.getElementById('menubox');    

         z.style.marginTop = '-100%';
         z.style.opacity = '0';
         
         setitems(['']);
         
             
    }
    
    
    return(
        <div className="header">
            <div className="logo">
            <img src={logo} alt=""/>
            </div>
            <div className="menu" onClick={()=>open()}>
            <div className="bar1"></div>
            <div className="bar1"></div>
            <div className="bar1"></div>
            </div>
            <div id="menubox">
            <div className="header1">
            <div className="logo">
            <img src={logo1} alt=""/>
            </div>
            <div className="close">
               <label >Close</label>
                <span onClick={()=>close()}>X</span>
            </div>
            </div>
            <div className="menucontainer">
               <div className="menucontent">
                <ul>
                    <li onClick={()=>sub(Administration)}>Administration</li>
                    <li onClick={()=>sub(Academics)}>Academics</li>
                    <li onClick={()=>sub(Facilities)}>Facilities</li>
                    <li onClick={()=>sub(Campus)}>Campus</li><br></br>
                    <li onClick={()=>sub(Visit)}>Visit</li><br></br>
                    <li onClick={()=>sub(About)}>About</li>
                </ul>
                </div>
                <Submenu items={menuitems}/>
                 
             </div>   
                <div className="footer">   
                    <li>Quick Links</li>
                    <li>Events</li>
                    <li>Support</li>
                    <li>Alumini</li>
                    <li>NAAC</li>
                    <li>Student Forum</li>
                    <li>Contact us</li>
                </div>
            </div>
        </div>

    );
}

export default Header;