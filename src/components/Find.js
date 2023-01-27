import React, { useEffect, useState } from 'react'

const Find = ()=>{
   const [detail , setDetail] = useState([])
    useEffect(()=>{
        fetch('https://aprdc-backend-wc83.onrender.com/details').then((Response)=>Response.json()).then((data)=>setDetail(data))
    },[])
    
    
    
    return(
        <div>
        {detail.map(data=>
        <>
            <p>{data['fname']}</p>
            <p>{data['hallnumber']}</p>
            <p>{data['branch']}</p>
            <p>{data['email']}</p>
            <p>{data['mnumber']}</p>
        </>
        )}
        </div>
    );
}

export default Find