import React,{useState,useEffect} from "react";
import './styles/Campus.css'
import nss from './images/nss.jpg'
import nss1 from './images/nss1.jpeg'
import nss2 from './images/nss2.jpeg'
import ncc3 from './images/ncc3.jpg'
import ncc4 from './images/ncc4.jpg'
import ncc5 from './images/ncc5.jpg'
import Loader from "./Loader";

const Nss = ()=>{

    const [loading , setLoading] = useState(true)
  
    useEffect(()=>{
  
        setLoading(true);   
     
       setTimeout(()=>{
         setLoading(false)
       },1200)
      },[])
       

    const photos = [
        {
            src:nss,
            width:300,
            height:300
        },
        {
            src:nss1,
            width:300,
            height:300
        },
        {
            src:nss2,
            width:300,
            height:300
        },
        {
            src:ncc3,
            width:300,
            height:300
        },
        {
            src:ncc4,
            width:300,
            height:300
        },
        {
            src:ncc5,
            width:300,
            height:300
        },
        
  
    ]

    return(
        <>
        {loading ? <Loader/> :
        <div className="nss">
           <br></br><br></br><center><h1>N.S.S</h1></center><br></br><br></br>
           
            <b>NSS Officer: Dr.SK.MOHAMMED BASHA</b><br></br><br></br>

            <b>Sanctioned Strength:</b> 50<br></br><br></br>              
              
                <b>Programs Taken Up:</b><br></br><br></br>

                Various activities conducted by nss officer in the academic year.<br></br>
                Plastic usage awareness programme<br></br>
                Tree plantation<br></br>
                Blood Donation Camp<br></br>
                swachh Pakwada<br></br>
                NSS Camps<br></br><br></br>
              <div className="gallery">
              <center><h1>Gallery</h1></center>
              <div className="frame">
               {photos.map(photo =>
              <div className="gallery_image">
                <img src={photo.src} width={photo.width} height={photo.height} alt="" />
              </div>
              )} 
              </div>
              <footer></footer>
            </div>
        </div>
        }</>
    )
}
export default Nss