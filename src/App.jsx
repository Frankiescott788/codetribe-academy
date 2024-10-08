import { Button} from '@nextui-org/react';
import React, { Fragment, useContext } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/authentication/signup';
import Addtodos from './components/pages/create/create';
import { Authcontext } from './context/authProvider';

function App() {

  const { isAuthenticated, isLoading } = useContext(Authcontext);

  return isLoading ? <p>Loading...</p> : (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={  <Addtodos />}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App;
