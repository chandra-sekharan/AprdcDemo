import { useState} from 'react'
import FileBase64 from 'react-file-base64';
import {Alert} from '@mui/material'
import Loadersmall from './Loadersmall'

const Register = ()=>{
 
 const [resAlert , setAlert]=useState('');    
 const [resAlert1 , setAlert1]=useState(''); 
 const [load , setload]=useState(false);

    const [inputdata , setinputdata]=useState({
        fname:"",
        hallnumber:"",
        branch:"",
        email:"",
        mnumber:"",
        image:""
    })

    const inputhandle = (e)=>{
        const {name,value}=e.target;
        setinputdata({...inputdata,[name]:value})

    }
     
    const Postdata =async (e)=>{
        e.preventDefault();
        setload(true)
        const {fname , hallnumber,branch,email,mnumber,image } = inputdata;
     
        const res = await fetch("https://aprdc-backend-wc83.onrender.com/student",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname , hallnumber,branch,email,mnumber,image
            })
        })

     console.log(inputdata)        
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
    setTimeout(()=>{
         setAlert(false)
         setAlert1(false)
         setload(false)
         
    },1500)
    return(
        <> 
         {resAlert ? <Alert severity='success'>Registration Success</Alert>:''}
         {resAlert1?<Alert severity='error'>Registration failed</Alert>:''}
         {load ? <Loadersmall/> :
         <form onSubmit={Postdata}>
            <input type="text" placeholder='Enter your full name' name="fname" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your Hall ticket' name="hallnumber" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your Branch' name="branch" required onChange={inputhandle} />
            <input type="email" placeholder='Enter your Email' name="email" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your mobile number' name="mnumber" required onChange={inputhandle} />
            <FileBase64 multiple={ false } onDone={({base64})=> setinputdata({...inputdata,image:base64})} />
            <button>Register</button>
         </form>
         }
        </>
    )
}

export default Register
