import React,{useState,useEffect} from "react";
import './styles/about.css'
import Naac from './images/NAAC.jpg'
import Naac1 from './images/NAAC1.jpg'
import ModalImage from 'react-modal-image'
import NAACPetition from './images/NAAC-Challenge-Petition.pdf'
import NAACSSR from './images/NAAC-SSR-cycle.pdf'
import Loader from "./Loader";

const NAAC = () =>{

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
        <div className="naac">
            <button><a href={NAACPetition} target="_blank" rel="noreferrer">NAAC-Challenge-Petition</a></button>
            <button><a href={NAACSSR} target="_blank" rel="noreferrer">NAAC-SSR-cycle-I</a></button>
            <div className="naaccert">
            <center><ModalImage
                small={Naac1}
                large={Naac}
                hideDownload={true}
                alt="AISHE"
                /></center>
            </div>
        </div>
        }</>
    )
}

export default NAAC