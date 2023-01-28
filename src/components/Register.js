import { useState} from 'react'
import {Alert} from '@mui/material'
import Loadersmall from './Loadersmall'
import compress from 'compress-base64';


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
    const handleImage = (e)=>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onload = event => {
          compress(event.target.result, {
            width: 400,
            type: 'image/png',
            max: 200, 
            min: 20, 
            quality: 10
          }).then(result => {
            setinputdata({...inputdata,image:result})
          });
        };
        reader.readAsDataURL(file);
        
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
         
    },1600)
    return(
        <> 
         {resAlert ? <Alert severity='success'>Registration Success</Alert>:''}
         {resAlert1?<Alert severity='error'>Registration failed</Alert>:''}
         {load ? <Loadersmall/> :
         <>

         <center><h2>Student Registration</h2></center>
         <form onSubmit={Postdata}>
            <input type="text" placeholder='Enter your full name *' name="fname" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your Hall ticket. caps only*' name="hallnumber" pattern='Y+[230]{4}[520]{3}[0-9]{2}' required onChange={inputhandle} />
            <input type="text" placeholder='Enter your Branch *' name="branch" required onChange={inputhandle} />
            <input type="email" placeholder='Enter your Email *' name="email" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your mobile number *' name="mnumber" required onChange={inputhandle} />
            <label><b>Upload your Photo *</b></label><input type="file" required onChange={handleImage} />
            <button>Register</button>
         </form>
         </>
         }
        </>
    )
}

export default Register
