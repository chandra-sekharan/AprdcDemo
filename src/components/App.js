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
       </Routes>     
    </div>
    </BrowserRouter>
  );
}

export default App;
