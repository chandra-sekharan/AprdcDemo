import React,{useState,useEffect} from "react";
import './styles/Campus.css'
import physics from './images/college8.jpeg'
import chemistry from './images/college15.jpeg'
import computer from './images/college10.jpeg'
import Loader from "./Loader";

const Laboratory = ()=>{

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
        <div className="laboratory">
            <div className="labsection">
            <h1>Physics Laboratory</h1><br></br>
            <img src={physics} alt=""/>
             <p>The Laboratory practical contains comprehensive hands-on practice of laboratory experiments that are academically aligned and mirror those performed on campuses around the world.

                We have a well furnished, large physics practical lab having a separate dark room for optics experiments. There are more than 45 experiment and more than 70 apparatus for B.Sc. students.

                Various important experiments on Bar Pendulum, Katter’s Pendulum, Bending of beam, Polari meter, Moment of Inertia, Nodal Slide, Newton’s ring, Calibration of Voltmeter, Calibration of Ammeter, Neon Lamp, P.N. Junction Diode etc are conducted in the laboratory.

                We believe that the graduation in B.Sc. with PCM stream will provide you the core knowledge of science and avail you the opportunities in distinguished fields of science & technology.

                Core knowledge of science is the only way to occupy leading positions in research institutes and industrial laboratories in India and the world over.</p>
                
            </div>
            
            <div className="labsection">
            <h1>Chemistry Laboratory</h1><br></br>
            <img src={chemistry} alt=""/>
                <p>There is a lot of interesting chemistry to explore in the Chemistry labs. The laboratory is designed to support and illustrate chemical concepts studied in the lecture portion of the course, as well as to introduce important laboratory techniques and encourage analytical thinking.

                    Along with concepts and chemistry covered in lecture, the laboratory portion of the course will present some additional chemistry, both theoretical and practical.

                    The lab manual contains background information and procedures for the experiments you will perform as part of your Chemistry course. The pages immediately following contain helpful information about laboratory policies, your lab notebook, Safety Regulations, and use of laboratory equipment.

                    The laboratory is equipped with most advanced instruments such as spectrophotometer, Polarimeter, Chromatographic column, electric balance, and chemical balance, Water deionizer, Conductometer, colorimeter, magnet stirrer and various others. For safety there are all arrangements like fire extinguisher, first aid kit etc.</p>
                    
            </div>
            
            <div className="labsection">
            <h1>Computer Laboratory</h1><br></br>
            <img src={computer} alt=""/>
                  <p>The primary goal of the computer labs is to provide assistance to students that will enhance their chances of succeeding in technology-based classroom assignments.

                    The computer labs support the curriculum of the college and the assignments of the instructors. APRDC has spacious computer labs equipped with computer sets with the latest configurations and software. All the computer systems are connected by LAN & 24 hour’s internet connectivity is provided for the benefit of students as well as faculty members.

                    Our computer labs are highly functional, with all the state-of-the-art features available on the tap. They are constructed to cater the various needs of the students, like academic purposes, digital learning and internet browsing. The knowledge and skills of our students can improve by multiple folds, and they can use these resources to complete their academic projects without any issues.

                    We use advanced hardware for our computers, so that our students do not face any problem while running the high end applications. This arrangement is perfect for the students, who want to do some real challenging projects.

                    We never leave the software copies go outdated. We track every new version of the software application, and stack them up in our software library. Our systems are provided by high speed internet connections, so that there is zero delay while venturing out in the World Wide Web.</p>  
                    
            </div>
        </div>
      }</>
    )
}

export default Laboratory