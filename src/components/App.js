import React from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Administration from './Administration';
import Header from './Header';


const App =() => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Administrative-staff' element={<Administration/>} />
       </Routes>     
    </div>
    </BrowserRouter>
  );
}

export default App;
