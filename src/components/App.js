import React , {useState} from "react";
import Router from "./Router";
import Loader from "./Loader";

const App = () =>{

  const [loading , setLoading] = useState(true);
  
  setTimeout(()=>{
    setLoading(false)
  },1600)
  

  return(
    <>
    {loading ? <Loader/> : <Router/>}
    </>
  )

}



export default App