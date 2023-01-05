import React, { useState } from "react";
import '../components/styles/header.css';
import logo from './images/logo.png';
import Submenu from "./Submenu";


const Header =()=>{

    const Administration = [
        {
            id:"Administrative-staff",
            name: "Administrative staff",
        },
         {
            id:"committees",
            name:"committees",
         },
         {
            id:"Teaching-staff",
            name:"Teaching staff",
         },
         {
            id:"Non-teaching-staff",
            name:"Non-teaching staff",
         },
         {
            id:"Internal-Complaints-Committee",
            name:"Internal complaints committee",
         },  
        ];
    const Academics = [{id:"Programs-Offered",name:"Programs Offered",},{id:"Admissions",name:"Admissions",},{id:"Program Outcomes",name:"Program Outcomes",},{id:"Departments",name:"Departments"},{id:"Academic-Calender",name:"Academic Calender"},{id:"Achievements",name:"Achievements"},{id:"Skill based courses",name:"Skill based courses"},{id:"Syllabus",name:"Syllabus"},];
    const Facilities=[{id:"Hostel",name:"Hostel",},{id:"Health-Center",name:"Health Center",},{id:"RO-Water-Plant",name:"RO Water Plant",},{id:"Internet-Facility",name:"Internet Facility",},{id:"GYM",name:"GYM",},];
    const Campus = [{id:"Library",name:"Library",},{id:"Rusa",name:"Rusa",},{id:"NCC",name:"NCC",},{id:"NSS",name:"NSS",},{id:"Placement-Cell",name:"Placement Cell",},{id:"Digital-Classroom",name:"Digital Classroom"},{id:"Laboratories",name:"Laboratories",},];
    const Visit = [{id:"Visit-APRDC",name:"Visit APRDC"} , {id:"Maps-and-Direction",name:"Maps and Direction"},];
    const About = [{id:"History-of-APRDC",name:"History of APRDC"},{id:"List-of-succcession-of-Principals",name:"List of succcession of Principals"},{id:"College-Profile",name:"College Profile"},{id:"NIRF",name:"NIRF"},{id:"AISHE",name:"AISHE"},];

    const [menuitems , setitems] = useState(['']);
    
    const sub = (data)=>{                                               //An Event handler for submenu display
        document.getElementById('submenus').style.display="block";         
        setitems(data);
    }
    
    const open = () =>{                                              //An event handler for main menu opening                            
     
      //  var body = document.getElementsByTagName('body')[0];

       // body.style.overflow = "hidden";
        
        var l =document.getElementsByClassName('menubox')[0];    
        l.classList.add('active');
     
     var k = document.querySelectorAll('li') ;
      for(let i=0 ; i<=5;i++)
      {    
        k[i].style.marginTop = '40px';
        k[i].style.opacity = '1';
     }
        
    }

   const close = ()=>{                                            //An event handler for main menu closing  
         
   // var body = document.getElementsByTagName('body')[0];

    // body.style.overflow = "auto";

       
        var m =document.getElementsByClassName('menubox')[0];    
        m.classList.remove('active');

         
         //setitems(['']);

document.getElementById('submenus').style.display="none";
         //alert("ok")
             
    }
    
    
    return(
        <div className="header" >
            <div className="logo">
            <img src={logo} alt=""/>
            <div className="logotext">
            <p>ANDHRA PRADESH</p>
            <span>Residential Degree College</span>
            </div>
            </div>
            <div className="menu" onClick={open}>
            <div className="bar1"></div>
            <div className="bar1"></div>
            <div className="bar1"></div>
            </div>
            <div id="menubox" className="menubox">
            <div className="header1">
            <div className="logo">
            <img src={logo} alt=""/>
            <div className="logotext">
            <p>ANDHRA PRADESH</p>
            <label>Residential Degree College</label>
            </div>
            </div>
            <div className="close">
               <label >Close</label>
                <span onClick={close}>X</span>
            </div>
            </div>
            <div className="menucontainer">
               <div className="menucontent">
                <ul>
                    <li onClick={()=>sub(Administration)}>Administration</li><br></br>
                    <li onClick={()=>sub(Academics)}>Academics</li><br></br>
                    <li onClick={()=>sub(Facilities)}>Facilities</li><br></br>
                    <li onClick={()=>sub(Campus)}>Campus</li><br></br>
                    <li onClick={()=>sub(Visit)}>Visit</li><br></br>
                    <li onClick={()=>sub(About)}>About</li>
                </ul>
                </div>
                <Submenu items={menuitems} close={close}/>
                 
             </div>   
             <div className="footer">   
                    <li onClick={close}>Quick Links</li>
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
