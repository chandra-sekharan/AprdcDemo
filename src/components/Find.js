import React, {useState } from 'react'
import './styles/find.css'
import Loadersmall from './Loadersmall'


const Find = ()=>{
   const [detail , setDetail] = useState([])
   const [search , setSearch]=useState('')
   const [load , setLoad] = useState(false);
    
    const searchdata =(e)=>{
      e.preventDefault()
      setLoad(true)
      fetch(`https://aprdc-backend-wc83.onrender.com/details/${search}`).then((Response)=>Response.json()).then((data)=>{
        setDetail(data)
        setLoad(false)
       })
     
    

      
      
    }
    
    return(
        <>
        {load ? <Loadersmall/> :
        <div>
        <div className='searchstudent'>
        <form onSubmit={searchdata}>
        <input type="text" placeholder='Enter your hall ticket' onChange={(e)=>setSearch(e.target.value)} />
        <button >Search</button>
        </form>
        </div>
        {detail.map(data=>
        <div className='findAPRDC'>
            <center><img src={data['image']} alt="" /></center>
            <center><h2>{data.fname}</h2><br></br></center>
            <p>Branch: <b>{data['branch']}</b></p><br></br>
            <p>Student ID: <b>{data['hallnumber']}</b></p><br></br>
            <span>Email: <b>{data['email']}</b></span><br></br><br></br>
            <p>Phone No: <b>{data['mnumber']}</b></p>
            <div className='svgbottom'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L34.3,96C68.6,96,137,96,206,128C274.3,160,343,224,411,261.3C480,299,549,309,617,282.7C685.7,256,754,192,823,160C891.4,128,960,128,1029,160C1097.1,192,1166,256,1234,245.3C1302.9,235,1371,149,1406,106.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>
           
        </div>
        )}
        
        
        </div>
        }
        </>
    );
}

export default Find
