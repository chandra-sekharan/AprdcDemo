import { useState} from 'react'

import {Alert} from '@mui/material'

const Register = ()=>{
 
 const [resAlert , setAlert]=useState('');    
 const [resAlert1 , setAlert1]=useState(''); 

    const [inputdata , setinputdata]=useState({
        fname:"",
        hallnumber:"",
        email:"",
        mnumber:""
    })

    const inputhandle = (e)=>{
        const {name,value}=e.target;
        setinputdata({...inputdata,[name]:value})

    }
     
    const Postdata =async (e)=>{
        e.preventDefault();
        
        const {fname , hallnumber,email,mnumber } = inputdata;
     
        const res = await fetch("http://localhost:3001/student",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname , hallnumber,email,mnumber
            })
        })

        
        const status = res.status
        console.log(status)
        if(status === 200)
        {
           setAlert(true)
          
        }
        else{
            setAlert1(true)
        }

        
    }
    return(
        <>
         {resAlert ? <Alert severity='success'>Registration Success</Alert>:''}
         {resAlert1?<Alert severity='error'>Registration failed</Alert>:''}
         <form  onSubmit={Postdata}>
            <input type="text" placeholder='Enter your full name' name="fname" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your Hall ticket' name="hallnumber" required onChange={inputhandle} />
            <input type="email" placeholder='Enter your Email' name="email" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your mobile number' name="mnumber" required onChange={inputhandle} />
            <button>Register</button>
         </form>
        </>
    )
}

export default Register