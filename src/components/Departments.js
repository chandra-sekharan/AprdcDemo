import React from "react";
import './styles/Academics.css'
import {Link} from 'react-router-dom'
import Maths from './images/MathsD.jpg'
import Physics from './images/PhysicsD.jpg'
import Chemistry from './images/chemistryD.avif'
import Statistics from './images/statD.jpg'
import computer from './images/computerD.jpg'
import commerce from './images/commerceD.png'
import political from './images/politicalD.jpg'
import economics from './images/EconomicsD.png'
import history from './images/HistoryD.png'
import english from './images/EnglishD.png'
import telugu from './images/TeluguD.webp'
import sanscrit from './images/SanscritD.jpg'

const Department = ({Departmentdata})=>{

    const Department = [
      {
        id:"Mathematics",
        name:"MATHEMATICS",
        img:Maths,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Physics",
        name:"PHYSICS",
        img:Physics,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Chemistry",
        name:"CHEMISTRY",
        img:Chemistry,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Statistics",
        name:"STATISTICS",
        img:Statistics,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Computer science",
        name:"COMPUTER SCIENCE & APPLICATIONS",
        img:computer,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Commerce",
        name:"COMMERCE",
        img:commerce,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Political science",
        name:"POLITICAL SCIENCE",
        img:political,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Economics",
        name:"ECONOMICS",
        img:economics,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"History",
        name:"HISTORY",
        img:history,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"English",
        name:"ENGLISH",
        img:english,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Telugu",
        name:"TELUGU",
        img:telugu,
        fac1:{},
        fac2:{},
        fac3:{},
      },
      {
        id:"Sanscrit",
        name:"SANSCRIT",
        img:sanscrit,
        fac1:{},
        fac2:{},
        fac3:{},
      },
    ]

    const DepartmentR = (data) =>{
        Departmentdata(data);
    }
    return(
        <div className="department">
          {Department.map(data=>
         <div className="Dcard">
            <Link to="/Department"><img onClick={()=>DepartmentR(data)} src={data.img} alt=""/></Link>
            <h3>{data.name}</h3>
         </div>
         )}
        </div>
    );
}

export default Department