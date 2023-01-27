import React,{useState,useEffect} from "react";
import './styles/Academics.css'
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
import maths from './pdf/BSCMATHS.pdf'
import physics from './pdf/PHYSICS.pdf'
import chemistry from './pdf/CHEMISTRY.pdf'
import statistics from './pdf/STAT.pdf'
import Computer from './pdf/BSCCOMPUTERS.pdf'
import Commerce from './pdf/BCOM.pdf'
import Political from './pdf/POLITICAL.pdf'
import Economics from './pdf/ECONOMICS.pdf'
import History from './pdf/BAHISTORY.pdf'
import Loader from "./Loader";



const Syllabus = ()=>{
 
    const [loading , setLoading] = useState(true)
  
    useEffect(()=>{
  
        setLoading(true);   
     
       setTimeout(()=>{
         setLoading(false)
       },1200)
      },[])
       

    const images = [{id:Maths , name:"MATHEMATICS",pdf:maths},{id:Physics,name:"PHYSICS",pdf:physics},{id:Chemistry,name:"CHEMISTRY",pdf:chemistry},{id:Statistics,name:"STATISTICS",pdf:statistics},{id:computer,name:"COMPUTER SCIENCE",pdf:Computer},{id:commerce,name:"COMMERCE",pdf:Commerce,},{id:political,name:"POLITICAL",pdf:Political},{id:economics,name:"ECONOMICS",pdf:Economics},{id:history,name:"HISTORY",pdf:History},{id:english,name:"ENGLISH",},{id:telugu,name:"TELUGU",},{id:sanscrit,name:"SANSCRIT",}]
    
    console.log(images)
    return(
        <>{loading ? <Loader/>:
        <div className="syllabus">
         {images.map(data=>
          <div className="Dcard">
            <a href={data.pdf} target="_blank" rel="noreferrer"><img src={data.id} alt=""/></a>
            <h3>{data.name}</h3>
         </div>
         )}
        </div>
        }</>
    );
}

export default Syllabus