import React , {useState , useEffect} from "react";
import Router from "./Router";
import Loader from "./Loader";

const App = () =>{

  const [loading , setLoading] = useState(false);
  
 useEffect(()=>{

   setLoading(true);   

  setTimeout(()=>{
    setLoading(false)
  },3000)
 },[])
  
  

  return(
    <>
    {loading ? <Loader/> : <Router/>}
    </>
  )

}



export default App