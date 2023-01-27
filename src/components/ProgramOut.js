import React,{useState,useEffect} from "react";
import ProgramOutcome from './pdf/ProgramOut.pdf'
import Loader from "./Loader";

const ProgramOut = () =>{

    const [loading , setLoading] = useState(true)
  
  useEffect(()=>{

      setLoading(true);   
   
     setTimeout(()=>{
       setLoading(false)
     },1200)
    },[])
     

    return(
        <>
        {loading ? <Loader/>:
        <div className="programOut">
        <iframe title="Program Outcomes" src={ProgramOutcome} frameBorder="0" scrolling="auto" ></iframe>
        </div>
        }</>
    );
}

export default ProgramOut