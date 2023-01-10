import React from 'react';
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


const App =() => {
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
        <Route path='/Departments' element={<Department/>} />
       </Routes>     
    </div>
    </BrowserRouter>
  );
}

export default App;
