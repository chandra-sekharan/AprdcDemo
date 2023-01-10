import React, { useState } from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import './App.css';
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


const App =() => {
   
  const [Ddata , setDdata] = useState('');
  
 const Departmentdata =(data)=>{
    setDdata(data)
 }


  return (
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
       </Routes>     
    </div>
    </BrowserRouter>
  );
}

export default App;
