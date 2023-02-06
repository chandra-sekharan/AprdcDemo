import { useState} from 'react'
import Loadersmall from './Loadersmall'

const Register = ()=>{
 
 const [load , setload]=useState(false);

  

    const [inputdata , setinputdata]=useState({
        fname:"",
        hallnumber:"",
        branch:"",
        yearofpass:"",
        designation:"",
        email:"",
        mnumber:"",
        image:""
    })

    const inputhandle = (e)=>{
        const {name,value}=e.target;
        setinputdata({...inputdata,[name]:value})

    }
    const handleImage = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) =>{
            const imgelement = document.createElement("img");
            imgelement.src = event.target.result;
            imgelement.onload = (e)=>{
                const canvas = document.createElement("canvas");
                const MAX_WIDTH = 400;
                const scalesize = MAX_WIDTH / e.target.width
                canvas.width = MAX_WIDTH;
                canvas.height = e.target.height * scalesize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(e.target , 0,0,canvas.width,canvas.height);
                const srcEncoded = ctx.canvas.toDataURL(e.target , 'image/jpg');
                setinputdata({...inputdata,image:srcEncoded});
            }
        }
    }
    
     
    const Postdata =async (e)=>{
        e.preventDefault();
        setload(true)
        const {fname , hallnumber,branch,yearofpass,designation,email,mnumber,image } = inputdata;

     

        const res = await fetch("https://aprdc-backend-wc83.onrender.com/student",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname , hallnumber,branch,yearofpass,designation,email,mnumber,image
            })
        })

        console.log(res)  
        const status = res.status
        console.log(status)
        if(status === 200)
        {
           alert("Registration Success")
            
        }
        else{
            alert("Registration failed")
        }

        
    }
    setTimeout(()=>{
         setload(false)
    },1800)
    return(
        <> 
         
         {load ? <Loadersmall/> :
         <>
         <br></br>
         <center><h2>Student Registration</h2></center><br></br>
         <form onSubmit={Postdata}>
            <input type="text" placeholder='Enter your full name *' name="fname" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your Hall ticket. caps only*' name="hallnumber" pattern='Y+[230]{4}[520]{3}[0-9]{2}' required onChange={inputhandle} />
            <input type="text" placeholder='Enter your Branch *' name="branch" required onChange={inputhandle} />
            <input type="text" placeholder='Enter Year of Passing *' name="yearofpass" required onChange={inputhandle} />
            <input type="text" placeholder='Enter Your Designation (if any)  optional' name="designation" onChange={inputhandle} />
            <input type="email" placeholder='Enter your Email *' name="email" required onChange={inputhandle} />
            <input type="text" placeholder='Enter your mobile number *' name="mnumber" required onChange={inputhandle} />
            <label><b>Upload your Photo *</b></label><input type="file" required  accept="image/*" onChange={handleImage} />
            <button>Register</button>
         </form>
         </>
         }
        </>
    )
}

export default Register
