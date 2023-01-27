import React,{useState,useEffect} from "react";
import calender from './pdf/calender.pdf'
import Loader from "./Loader";

const Calender = ()=>{
  
    const [loading , setLoading] = useState(true)
  
    useEffect(()=>{
  
        setLoading(true);   
     
       setTimeout(()=>{
         setLoading(false)
       },1200)
      },[])
       

    return(
        <>{loading ? <Loader/>: 
        <div className="programOut">
        <iframe title="Academic calender" src={calender} frameBorder="0" scrolling="auto" ></iframe>
        </div>
        }</>
    )
}

export default Calender