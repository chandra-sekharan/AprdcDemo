import React, { useState} from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import './styles/App.css';
import Home from './Home';
import Administration from './Administration';
import Header from './Header';
import Nonteaching from './Nonteaching';
import Internal from './InternalComplaints';
import Committees from './Committees';
import Teaching from './Teaching';
import Programs from './Programs';
import Admission from './Admissions';
import ProgramOut from './ProgramOut';
import Department from './Departments';
import DepartmentInfo from './DepartmentInfo';
import Calender from './Calender';
import Achievement from './Achievements';
import Syllabus from './Syllabus';
import Hostel from './Hostel';
import Gym from './Gym';
import Blindsoftware from './Blind';
import RO from './RO';
import Industrial from './Industrial';
import Library from './Library';
import Ncc from './Ncc';
import Nss from './Nss';
import Placement from './Placement';
import Laboratory from './Laboratory';
import Maps from './Maps';
import Visit from './Visit';
import History from './History';
import Principal from './Principal';
import CollegeProfile from './CollegeProfile';
import Nirf from './NIRF';
import AISHE from './AISHE';
import Alumini from './Alumini';
import NAAC from './NAAC';


const Router =() => {
   
  const [Ddata , setDdata] = useState('');

   

 const Departmentdata =(data)=>{
    setDdata(data)
 }

  return (
    <>
    
    <BrowserRouter>
    <div>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Administrative-staff' element={<Administration/>} />
        <Route path='/Non-teaching-staff' element={<Nonteaching/>} />
        <Route path='/Internal-Complaints-Committee' element={<Internal/>} />
        <Route path='/Committees' element={<Committees/>} />
        <Route path='/Teaching-staff' element={<Teaching/>} />
        <Route path='/Programs-Offered' element={<Programs/>} />
        <Route path='/Admissions' element={<Admission/>} />
        <Route path='/Program-Outcomes' element={<ProgramOut/>} />
        <Route path='/Departments' element={<Department Departmentdata={Departmentdata}/>} />
        <Route path='/Department' element={<DepartmentInfo Ddata={Ddata}/>} />
        <Route path='/Academic-Calender' element={<Calender/>} />
        <Route path='/Achievements' element={<Achievement/>} />
        <Route path='/Syllabus' element={<Syllabus/>} />
        <Route path='/Hostel' element={<Hostel/>} />
        <Route path='/GYM' element={<Gym/>} />
        <Route path='/Blind-Software' element={<Blindsoftware/>} />
        <Route path='/RO-Water-Plant' element={<RO/>} />
        <Route path='/Industrial-Collaboration' element={<Industrial/>} />
        <Route path='/Library' element={<Library/>} />
        <Route path='/NCC' element={<Ncc/>} />
        <Route path='/NSS' element={<Nss/>} />
        <Route path='/Placement-Cell' element={<Placement/>} />
        <Route path='/Laboratories' element={<Laboratory/>} />
        <Route path='/visit-APRDC' element={<Visit/>} />
        <Route path='/Maps-and-Direction' element={<Maps/>} />
        <Route path='/History-of-APRDC' element={<History/>} />
        <Route path='/List-of-succcession-of-Principals' element={<Principal/>} />
        <Route path='/College-Profile' element={<CollegeProfile/>} />
        <Route path='/NIRF' element={<Nirf/>} />
        <Route path='/AISHE' element={<AISHE/>} />
        <Route path='/Alumini' element={<Alumini/>} />
        <Route path='/NAAC' element={<NAAC/>} />
       </Routes>    
        
    </div>
  
    </BrowserRouter>
    </>
  );
}

export default Router;
