import { Button, User } from '@nextui-org/react'
import { useContext } from 'react';
import { Authcontext } from '../context/authProvider';

const Navbar = () => {

    const { currentUser, isAuthenticated, setIsAuthenticated } = useContext(Authcontext);

    return (
        <nav className='px-5 py-2'>
            <div className='flex justify-between'>
                <div className="logo">
                    <img src="https://i.pinimg.com/564x/89/3e/83/893e832cd4345075522b42ae3f9d63d2.jpg" alt="logo" className="logo-img" />
                </div>
                <div className='flex gap-6 mt-4'>
                    <ul className='list-none flex gap-5 mt-3'>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>About</li>
                    </ul>
                    <div>
                        {isAuthenticated && (
                            <User
                                isFocusable
                                name={currentUser.username}
                                description={currentUser.email}
                            />
                        )}
                        { !isAuthenticated && <Button className='bg-[#FF0000] text-white px-[40pt] shadow-[#FF0000] rounded'>Login</Button>}         
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;