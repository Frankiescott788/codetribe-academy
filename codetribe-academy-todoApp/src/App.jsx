import { Fragment, useEffect, useState } from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/404';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
