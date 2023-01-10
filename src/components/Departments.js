import React from "react";
import './styles/Academics.css'


const Department = ()=>{

    const Department = [
      {
        id:"Mathematics",
        name:"MATHEMATICS",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Physics",
        name:"PHYSICS",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Chemistry",
        name:"CHEMISTRY",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Statistics",
        name:"STATISTICS",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Computer science",
        name:"COMPUTER SCIENCE & APPLICATIONS",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Commerce",
        name:"COMMERCE",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Political science",
        name:"POLITICAL SCIENCE",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Economics",
        name:"ECONOMICS",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"History",
        name:"HISTORY",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Fine arts",
        name:"FINE ARTS",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"English",
        name:"ENGLISH",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Telugu",
        name:"TELUGU",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Sanscrit",
        name:"SANSCRIT",
        img:"",
        fac1:{},
        fac2:{},
        fac3:{},
      },
      

    ]
    return(
        <div className="department">
         {Department.map(data=>
         <h1>{data.name}</h1>
            )}
        </div>
    );
}

export default Department