import { Fragment, useEffect, useState } from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Form from './components/form';
import Login_form from './components/auth/login';
import Todo from './components/todo';
import UpdateForm from './components/updateForm';


function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const authenticate = () => {
    let res = JSON.parse(localStorage.getItem('user_auth'));
    if (res) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    setLoading(false); 
  };

  useEffect(() => {
    authenticate();
  }, []);

  return loading ? (<div className='text-center mt-5'> Loading... </div>) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />} />
        <Route path='/todo/:id' element={auth ? <Todo /> : <Navigate to='/login' />} />
        <Route path='/todo/:id/:doc' element={auth ? <UpdateForm /> : <Navigate to='/login' />} />
        <Route path='/login' element={<Login_form />} />
        <Route path='/new' element={auth ? <Form /> : <Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
