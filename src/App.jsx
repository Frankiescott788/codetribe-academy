import { Button} from '@nextui-org/react';
import React, { Fragment } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/authentication/signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
    </BrowserRouter>
      
  )
}

export default App;
