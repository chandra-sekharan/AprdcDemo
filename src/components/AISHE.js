import React,{useState,useEffect} from "react";
import './styles/about.css'
import ModalImage from 'react-modal-image'
import Aishe1 from './images/AISHE1.jpg';
import Aishe from './images/AISHE.jpg';
import Loader from "./Loader";

const AISHE = ()=>{

    const [loading , setLoading] = useState(true)
  
  useEffect(()=>{

      setLoading(true);   
   
     setTimeout(()=>{
       setLoading(false)
     },2300)
    },[])
     

    return(
        <>
        {loading ? <Loader/> :
        <div className="aishe">
            
            <center><ModalImage
                small={Aishe1}
                large={Aishe}
                hideDownload={true}
                alt="AISHE"
                /></center>
            
        </div>
        }</>
    )
}

export default AISHE