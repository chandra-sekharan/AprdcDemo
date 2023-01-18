import React,{useState,useEffect} from "react";
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
import photo from './images/logo.png'
import Loader from "./Loader";

const Department = ({Departmentdata})=>{

  const [loading , setLoading] = useState(true)
  
  useEffect(()=>{

      setLoading(true);   
   
     setTimeout(()=>{
       setLoading(false)
     },1200)
    },[])
     

    const Department = [
      {
        id:"Mathematics",
        name:"MATHEMATICS",
        img:Maths,
        faculty:[{
          "id": "1",
          "Name of the Employee": "Y.CHINNA MEERA VALI",
          "Qualification": "M.Sc.,",
          "Subject": "Mathematics",
          "Phone No": "8886294470",
          "Photo" : photo,
      },
      {
          "id": "2",
          "Name of the Employee": "B.SHARATH BABU",
          "Qualification": "M.Sc.,",
          "Subject": "Mathematics",
          "Phone No": "9866532024",
          "Photo" : photo,
      }],
      },
      {
        id:"Physics",
        name:"PHYSICS",
        img:Physics,
        faculty:[{
          "id": "1",
          "Name of the Employee": "Dr.M.SURESH BABU",
          "Qualification": "M.Sc.,Ph.D.",
          "Subject": "Physics",
          "Phone No": "9849029976",
          "Photo" : photo,
      },
      {
        "id": "2",
        "Name of the Employee": "Dr.P.SUDHAKAR",
        "Qualification": "M.Sc.,Ph.D.",
        "Subject": "Physics",
        "Phone No": "8500243342",
        "Photo" : photo,
    },{
      "id": "3",
      "Name of the Employee": "K.V.KONDAIAH",
      "Qualification": "M.Sc.,",
      "Subject": "Phisics",
      "Phone No": "",
      "Photo" : photo,
  }
    ],
      },
      {
        id:"Chemistry",
        name:"CHEMISTRY",
        img:Chemistry,
        faculty:[  {
          "id": "1",
          "Name of the Employee": "P.REVATHI DEVI",
          "Qualification": "M.Sc.,APSET",
          "Subject": "Chemistry",
          "Phone No": "8500465944",
          "Photo" : photo,
      },
      {
          "id": "2",
          "Name of the Employee": "C.GANGADHAR",
          "Qualification": "M.Sc.,APSET",
          "Subject": "Chemistry",
          "Phone No": "8500233284",
          "Photo" : photo,
      },
      {
          "id": "3",
          "Name of the Employee": "T.RAMANJANEYULU",
          "Qualification": "M.Sc.,APSET",
          "Subject": "Chemistry",
          "Phone No": "9666119513",
          "Photo" : photo,
      },],
      },
      {
        id:"Statistics",
        name:"STATISTICS",
        img:Statistics,
        faculty:[  {
          "id": "1",
          "Name of the Employee": "N.SATISH BABU",
          "Qualification": "M.Sc.,B.Ed.,",
          "Subject": "Statistics",
          "Phone No": "9440900528",
          "Photo" : photo,
      },
      {
          "id": "2",
          "Name of the Employee": "V.UDAYA KUMAR",
          "Qualification": "M.Sc.,Ph.D.",
          "Subject": "Statistics",
          "Phone No": "9848264780",
          "Photo" : photo,
      },],
        
      },
      {
        id:"Computer science",
        name:"COMPUTER SCIENCE & APPLICATIONS",
        img:computer,
        faculty:[ {
          "id": "1",
          "Name of the Employee": "CH.MADHAVI LATHA",
          "Qualification": "M.Sc.,UGC NET,SET",
          "Subject": "Computer Science",
          "Phone No": "9494354385",
          "Photo" : photo,
      },
      {
          "id": "2",
          "Name of the Employee": "D.VIJAY KUMAR",
          "Qualification": "MCA.,UGC NET",
          "Subject": "Computer Science",
          "Phone No": "7382789601",
          "Photo" : photo,
      },
      {
          "id": "3",
          "Name of the Employee": "CH.CHANDRA SEKHAR",
          "Qualification": "M.Sc.,M.Tech",
          "Subject": "Computer Science",
          "Phone No": "9440949983",
          "Photo" : photo,
      },],
      },
      {
        id:"Commerce",
        name:"COMMERCE",
        img:commerce,
        faculty:[{
          "id": "1",
          "Name of the Employee": "Dr.B.VENKATRAMANA",
          "Qualification": "M.Com.,Ph.D.,",
          "Subject": "Commerce",
          "Phone No": "9441730700",
          "Photo" : photo,
      },{
        "id": "2",
        "Name of the Employee": "P.VEERANJANEYA REDDY",
        "Qualification": "M.Com.,UGC NET,APSET",
        "Subject": "Commerce",
        "Phone No": "9010371505",
        "Photo" : photo,
    },
    {
        "id": "3",
        "Name of the Employee": "V.SOWRI BABU",
        "Qualification": "M.Com.,UGC NET,APSET",
        "Subject": "Commerce",
        "Phone No": "9154715755",
        "Photo" : photo,
    },
    {
        "id": "4",
        "Name of the Employee": "G.SRINIVASA REDDY",
        "Qualification": "M.Com",
        "Subject": "Commerce",
        "Phone No": "9000377551",
        "Photo" : photo,
    },],
      },
      {
        id:"Political science",
        name:"POLITICAL SCIENCE",
        img:political,
        faculty:[{
          "id": "1",
          "Name of the Employee": "Y.N.S.CHAUDHARY",
          "Qualification": "M.A., UGC NET",
          "Subject": "Political Science",
          "Phone No": "7382033300",
          "Photo" : photo,
      },{
        "id": "2",
        "Name of the Employee": "CH.KIRAN KUMAR",
        "Qualification": "M.A.,Ph.D.,",
        "Subject": "Political Science",
        "Phone No": "",
        "Photo" : photo,
    },],
      },
      {
        id:"Economics",
        name:"ECONOMICS",
        img:economics,
        faculty:[{
          "id": "1",
          "Name of the Employee": "P.RAVINDRANATH",
          "Qualification": "M.A.,SET",
          "Subject": "Economics",
          "Phone No": "9490050228",
          "Photo" : photo,
      },{
        "id": "2",
        "Name of the Employee": "K.RAMA KRISHNA",
        "Qualification": "M.A.,APSET",
        "Subject": "Economics",
        "Phone No": "9347496278",
        "Photo" : photo,
    },],
        
      },
      {
        id:"History",
        name:"HISTORY",
        img:history,
        faculty:[ {
          "id": "1",
          "Name of the Employee": "V.RANI",
          "Qualification": "M.A.,APSET",
          "Subject": "History",
          "Phone No": "9440392877",
          "Photo" : photo,
      },
      {
          "id": "2",
          "Name of the Employee": "I.SUDARSANA RAO",
          "Qualification": "M.A.,UGC NET",
          "Subject": "History",
          "Phone No": "8008414593",
          "Photo" : photo,
      },],
        
      },
      {
        id:"English",
        name:"ENGLISH",
        img:english,
        faculty:[{
          "id": "1",
          "Name of the Employee": "Dr.SK.MOHAMMED BASHA",
          "Qualification": "M.A.,Ph.D.,",
          "Subject": "English",
          "Phone No": "9441083540",
          "Photo" : photo,
      },{
        "id": "2",
        "Name of the Employee": "M.SRINIVASA RAO",
        "Qualification": "M.A.,APSET",
        "Subject": "English",
        "Phone No": "9160661788",
        "Photo" : photo,
    },],
        
      },
      {
        id:"Telugu",
        name:"TELUGU",
        img:telugu,
        faculty:[{
          "id": "1",
          "Name of the Employee": "Dr.M.NAGARAJU",
          "Qualification": "M.A.,Ph.D.,",
          "Subject": "Telugu",
          "Phone No": "9701338070",
          "Photo" : photo,
      },],
      },
      {
        id:"Sanscrit",
        name:"SANSCRIT",
        img:sanscrit,
        faculty:[{
          "id": "1",
          "Name of the Employee": "Dr.S.L.D.SARMA",
          "Qualification": "M.A.,Ph.D.,",
          "Subject": "Sanskrit",
          "Phone No": "9441002806",
          "Photo" : photo,
      },],
      },
    ]

    const DepartmentR = (data) =>{
        Departmentdata(data);
    }
    return(
      <>{loading ? <Loader/> :
        <div className="department">
          {Department.map(data=>
         <div className="Dcard">
            <Link to="/Department"><img onClick={()=>DepartmentR(data)} src={data.img} alt=""/></Link>
            <h3>{data.name}</h3>
         </div>
         )}
        </div>
      }</>
    );
}

export default Department