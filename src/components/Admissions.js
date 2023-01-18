import React , {useState,useEffect} from "react";
import Loader from "./Loader";
import './styles/Academics.css'


const Admission = () =>{

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
        <div className="admissions">
        <div className="admission">
        <center><h1>Admission Criteria and Entrance Examination</h1></center>
        <p>The admission into First Year Degree courses are given to the candidates on the basis of their merit in the Common Entrance Examination held in the first week of May every year at various centers in Andhra Pradesh.<br></br><br></br>

           Admissions are given as per the following reservations.<br></br><br></br>

<li>SC-15%,</li>
<li>ST-6%,</li>
<li>BC-25% (A-7%, B-10%, C-1%, D-7%)</li>
<li>Physically handicapped – 3%,</li>
<li>NCC, Sports & other extracurricular activities – 5%,</li>
<li>Children of Ex-Servicemen – 3%.</li><br></br><br></br>
Candidate should pass qualifying examination [Inter] in one attempt with not less than 50% relaxation is allowed in the case of SC, ST and BC students. A minimum of 25% marks, on the aggregate in the entrance test is required to make the student eligible for admission.<br></br><br></br>

The candidate should have passed the qualifying examination in English Medium or should have scored not less than 40% in English subject in qualifying examination.<br></br><br></br>

<b>The candidates have to take Entrance Examination in the following subjects:</b><br></br>

 <br></br><b>B.Sc. ( MPC & MSC ) ..</b><br></br><br></br>

<b>1) General English and General Knowledge – 1 ½ Hrs.</b><br></br><br></br>

100 marks : Objective type (fill up the blanks & multiple choices) <br></br><br></br>

<b>2) Telugu or Hindi – 1 Hr.</b><br></br>

50 marks : Objective type, translation, essay etc.<br></br><br></br>

<b>3) Mathematics – 1 Hr.</b><br></br><br></br>

50 marks : Objective type (fill up the blanks & multiple choices)<br></br><br></br>

<b>4) Physics – 1 Hr.</b><br></br><br></br>

50 marks : 20 Multiple choice & 30 fill up the blanks<br></br><br></br>

<b>5) Chemistry – 1 Hr.</b><br></br>

50 marks : 20 Multiple choice & 30 fill up the blanks Self Study Report<br></br><br></br>

<b>B.A. ( HEP) ..()</b><br></br><br></br>

<b>1) General English and General Knowledge – 1 ½ Hrs.</b><br></br><br></br>

100 marks : Objective type (fill up the blanks & multiple choices)<br></br><br></br>

<b>2) Telugu or Hindi – 1 Hr.</b><br></br><br></br>

50 marks : Objective type, translation, essay etc.<br></br><br></br>

<b>3) History – 1 Hr.</b><br></br><br></br>

50 Marks : multiple choices & fill up the blanks.<br></br><br></br>

<b>4) Economics – 1 Hr.</b><br></br><br></br>

50 Marks : multiple choices & fill up the blanks.<br></br><br></br>

<b>5) Civics – 1 Hr.</b><br></br><br></br>

50 Marks : multiple choices & fill up the blanks.<br></br><br></br>

<b>B.Com ( General ) .(rl)</b><br></br><br></br>

<b>1) General English and General Knowledge – 1 ½ Hrs.</b><br></br><br></br>

100 marks : Objective type (fill up the blanks & multiple choices)<br></br><br></br>

<b>2) Telugu or Hindi – 1 Hr.</b><br></br><br></br>

50 marks : Objective type, translation, essay etc.<br></br><br></br>

<b>3) Elements of Commerce – 1Hr</b><br></br><br></br>

50 Marks : Objective type & one essay.<br></br><br></br>

<b>4) Book keeping & Accounts – 1Hr</b><br></br><br></br>

50 Marks : Problems & Objective type.<br></br><br></br>

<b>5) Economics – 1Hr</b><br></br><br></br>

50 Marks : Objective type & Essay short answers.<br></br><br></br></p>

<center><h1>At The Time of Admission</h1></center>
After the merit list is finalized an “Intimation Letter” will be sent to the candidate and he has to come and take the admission within the stipulated time and date. At the time of admission the candidate has to submit.<br></br><br></br>

All the Original Certificates: SSC, Inter, TC Conduct Community, Income, NCC/PH/Games, Selection Memo Undertakings by the Student and Parent<br></br><br></br>
<center><a href="https://aprs.apcfss.in/" target="_blank" rel="noreferrer"><button>APPLY HERE</button></a></center><br></br><br></br>
        </div>
        </div>
        }
       </>
    );
}

export default Admission