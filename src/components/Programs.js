import React,{useState,useEffect} from "react";
import './styles/Academics.css';
import Mpc from './images/BscMpc.jpg';
import Mscs from './images/bscMscs.jpg';
import BA from './images/BA.webp';
import BCOM from './images/BCOM.jpg';
import APSSDC from './images/Apssdc.jpg';
import MSPDF from './images/BSCCOMPUTERS.pdf'
import MPPDF from './images/BSCMATHS.pdf'
import BAPDF from './images/BAHISTORY.pdf'
import BCOMPDF from './images/BCOM.pdf'
import Loader from "./Loader";


const Programs = ()=>{

    const [loading , setLoading] = useState(true)
  
  useEffect(()=>{

      setLoading(true);   
   
     setTimeout(()=>{
       setLoading(false)
     },1200)
    },[])
     
    

    return(
        <>
        {loading ? <Loader/> :
        <div className="programs">
            <div className="titlepro">
            <h2>PROGRAMS OFFERED </h2>
            
            </div>
        <div className="program">
        <div className="another1">
                    <label>Core - Subjects</label>
                    <ul>
                        <li>Mathematics</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                    </ul>
                    <span>Availability</span>
                    <li>36 Seats</li>
                    <span>Pattern</span>
                    <li>CBCS</li>
                    <a href={MSPDF} target="_blank" rel="noreferrer" ><button>↓</button></a>
                </div>
            <div className="pro-item" >
                <img src={Mpc} alt="" />
                <div className="another">
                    <label>Core - Subjects</label>
                    <ul>
                        <li>Mathematics</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                    </ul>
                    <span>Availability</span>
                    <li>36 Seats</li>
                    <span>Pattern</span>
                    <li>CBCS</li>
                    <a href={MSPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
            </div>
            <div className="bottom">
           <h4>BACHELOR OF SCIENCE[MPC]</h4>
           </div>
        </div>
        <div className="program">
        <div className="another1">
                    <label>Core - Subjects</label>
                    <ul>
                        <li>Mathematics</li>
                        <li>Statistics</li>
                        <li>Computer Science</li>
                    </ul>
                    <span>Availability</span>
                    <li>36 Seats</li>
                    <span>Pattern</span>
                    <li>CBCS</li>
                    <a href={MPPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
        <div className="pro-item">
                <img src={Mscs} alt="" />
                <div className="another">
                    <label>Core - Subjects</label>
                    <ul>
                        <li>Mathematics</li>
                        <li>Statistics</li>
                        <li>Computer Science</li>
                    </ul>
                    <span>Availability</span>
                    <li>36 Seats</li>
                    <span>Pattern</span>
                    <li>CBCS</li>
                    <a href={MPPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
            </div>
            <div className="bottom">
           <h4>BACHELOR OF SCIENCE[MSCS]</h4>
           </div>
        </div>
        <div className="program">
        <div className="another1">
                    <label>Core - Subjects</label>
                    <ul>
                        <li>History</li>
                        <li>Economics</li>
                        <li>Political Science</li>
                    </ul>
                    <span>Availability</span>
                    <li>40 Seats</li>
                    <span>Pattern</span>
                    <li>CBCS</li>
                    <a href={BAPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
        <div className="pro-item">
                <img src={BA} alt="" />
                <div className="another">
                    <label>Core - Subjects</label>
                    <ul>
                        <li>History</li>
                        <li>Economics</li>
                        <li>Political Science</li>
                    </ul>
                    <span>Availability</span>
                    <li>40 Seats</li>
                    <span>Pattern</span>
                    <li>CBCS</li>
                    <a href={BAPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
            </div>
            <div className="bottom">
           <h4>BACHELOR OF ARTS</h4>
           </div>
          
        </div>
        <div className="program">
        <div className="another1">
                    <label>Core - Subjects</label>
                    <ul>
                        <li>Commerce</li>
                        <li>Accounts</li>
                        <li>Economics</li>
                    </ul>
                    <span>Availability</span>
                    <li>40 Seats</li>
                    <span>Pattern</span>
                    <li>CBCS</li>
                    <a href={BCOMPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
        <div className="pro-item">
                <img src={BCOM} alt="" />
                <div className="another">
                    <label>Core - Subjects</label>
                    <ul>
                        <li>Commerce</li>
                        <li>Accounts</li>
                        <li>Economics</li>
                    </ul>
                    <span>Availability</span>
                    <li>40 Seats</li>
                    <span>Pattern</span>
                    <li>CBCS</li>
                    <a href={BCOMPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
            </div>
            <div className="bottom">
           <h4>BACHELOR OF COMMERECE</h4>
           </div>
          
        </div>
        <div className="program">
        <div className="another1">
                    <label>Courses</label>
                    <ul>
                        <li>Python</li>
                        <li>MS Office</li>
                        <li>C</li>
                    </ul>
                    <span>Availability</span>
                    <li>For ALL</li>
                    
                    <a href={MSPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
        <div className="pro-item">
                <img src={APSSDC} id="apssdc" alt="" />
                <div className="another">
                    <label>Courses</label>
                    <ul>
                        <li>Python</li>
                        <li>MS Office</li>
                        <li>C</li>
                    </ul>
                    <span>Availability</span>
                    <li>For ALL</li>
                    
                    <a href={MSPDF} target="_blank" rel="noreferrer"><button>↓</button></a>
                </div>
            </div>
            <div className="bottom">
           <h4>SKILL DEVELOPMENT COURSES</h4>
           </div>
          </div>
          <footer></footer>
        </div>
        }
        </>
    );
}

export default Programs;