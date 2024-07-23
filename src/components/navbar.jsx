import { Avatar, IconButton } from '@mui/material'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){

    const [user, setUser] = useState('');
    const [authStatus, setAuthStatus] = useState(false);

    useEffect(() => {
        const getUser = () => {
            let res = JSON.parse(localStorage.getItem('user_auth'));
            if(!res) {
                console.log('You should login')
            } else {
                setUser(res);
                setAuthStatus(true);
            }
        }
        getUser();
    }, []);

    return (
        <nav>
            <div className="container mt-3 mb-2 d-flex justify-content-between">
                <div className="logo">
                    KEEPLIST
                </div>
                <div className="d-flex">
                    <ul className="d-flex list-unstyled mt-3" style={{
                        gap : '30px',
                    }}>
                        <li> <NavLink to={'/'} className='nav-link' activeClassName="active">Home</NavLink> </li>
                        <li> <NavLink to={'/new'} className='nav-link' activeClassName="active">New todos</NavLink> </li>
                    </ul>
                    {authStatus ? (
                        <div className="nav-btn d-flex gap-1">
                        <IconButton>
                            <Avatar sx={{
                                background : '#667BC6'
                            }}>
                                {user.username[0].toUpperCase()}
                            </Avatar>
                        </IconButton>
                        <div className='text-muted mt-3'>
                            {user.username}
                        </div>
                    </div>
                    ) : (
                        <div className='mt-3 mx-4 '>
                           <span className=' py-2 px-3 shadow-sm' style={{
                            background : '#F6FB7A',
                            borderRadius : '50pt',
                           }}> please sign in </span>
                        </div>
                    )}
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar