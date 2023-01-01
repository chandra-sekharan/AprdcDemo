import React from "react";
import college from './images/college.jpg'
import './styles/Administration.css';

const Administration = ()=>{
    return(
        <div className="administration">
            <div className="clg_img">
                <img src={college} alt="" />
            </div>
            <div className="staff">
             <div className="dis">
             <p>"The administrative staff of the college oversees the overall development of the college in both academics, curricular and co-curricular activities. To monitor these activities , the Principal constituted various committees. Each committee has its own responsibilities. The committees are constituted as a mixture of Senior and Junior faculty to smoothly run the institute with the ideas of junior Faculty and experienced knowledge of the senior faculty. Each committee periodically meet to discuss and implement the ideas which will enrich the functioning of college in a fruitful manner and to maintain the harmony between students and staff."</p>
             </div>
             <div className="Employees">
                <div className="profile_pho">

                </div>
                <div className="Employee_detail">
                    
                </div>
             </div>
            </div>
        </div>
        
    );
}

export default Administration;