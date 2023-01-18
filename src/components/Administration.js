import React,{useState,useEffect} from "react";
import college from './images/college.jpg'
import principal from './images/principal.jpg';
import Basha from './images/Basha.jpg';
import './styles/Administration.css';
import Loader from "./Loader";

const Administration = ()=>{

    const [loading , setLoading] = useState(true)
  
    useEffect(()=>{

        setLoading(true);   
     
       setTimeout(()=>{
         setLoading(false)
       },2000)
      },[])
       

    return(
        <>
        {loading ? <Loader/> :
        <div className="administration">
            <div className="clg_img">
                <img src={college} alt="" />
            </div>
            <div className="principal">
                <img src={principal} alt="" />
                <div className="detail">
                <h1>Principal</h1><br></br>
                <h2>Y.N.S.CHAUDHARY [M.A. , UGC NET]</h2>
                </div>
                
            </div>
            <div className="staff">
             <div className="dis">
             <p>The administrative staff of the college oversees the overall development of the college in both academics, curricular and co-curricular activities. To monitor these activities , the Principal constituted various committees. Each committee has its own responsibilities. The committees are constituted as a mixture of Senior and Junior faculty to smoothly run the institute with the ideas of junior Faculty and experienced knowledge of the senior faculty. Each committee periodically meet to discuss and implement the ideas which will enrich the functioning of college in a fruitful manner and to maintain the harmony between students and staff.</p>
             </div>
             <div className="visionMission">
             <h1>VISION AND MISSION OF APRDC</h1>
             <p>A.P. Residential Degree College, Nagarjuna Sagar was started in 1982 with a vision and mission to cater to the educational needs to the meritorious students belonging to the rural areas. Mostly students from oppressed sections of the society got opportunity study in this college.
                The vision statement:
             <li>Continues monitoring of the students progress in residential pattern where the student is available in the campus.</li>
             <li>To bring out the innate talents of students to the fore by involving them in extra and co-curricular activities.</li>
             <li> We inspire students to set higher goals in life.</li>
             <li> We create good academic atmosphere by providing value based education.</li></p>
             </div>
             <h3>Administrative-Staff of the Institute</h3>
             
             <div className="Employees">
              <table>
                <tr>
                    <th>Department</th>
                    <th>Name of the faculty</th>
                    <th>Designation</th>
                    <th>Qualification</th>
                    <th>Photo</th>
                </tr>
                <tr>
                    <td>Commerce</td>
                    <td>Dr.B.VENKATRAMANA</td>
                    <td>ATP</td>
                    <td>M.Com.,Ph.D.,</td>
                    <td><img src={college} alt="" /></td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>Dr.SK.MOHAMMED BASHA</td>
                    <td>Deputy Warden</td>
                    <td>M.A.,Ph.D.,</td>
                    <td><img src={Basha} alt="" /></td>
                </tr>
                
              </table>
             </div>
            </div>
        </div>
    }
    </>
    );
}

export default Administration;