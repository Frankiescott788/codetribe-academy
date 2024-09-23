import { Button, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Divider } from "@nextui-org/react";
import Logo from '../assets/pictures//Rectangle 22.png'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authProvider";
import useAuth from "../hooks/useAuth";
import { Toaster } from "react-hot-toast";

export default function Navbar() {
    const { pathname } = useLocation();
    const [disable, setDisable] = useState(false);
    const { auth, currentuser, isLoggedin } = useContext(AuthContext);
    const { sign_out } = useAuth();
    const navigate = useNavigate();



    const paths = [
        '/signin',
        '/signup',
        '/admin/',
        '/admin/new'
    ];
    useEffect(() => {
        paths.forEach(path => {
            if (pathname === path) {
                setDisable(true)
            }
        })
    }, [pathname])

    return  (

        <nav className={` ${disable ? "hidden" : "block"} fixed top-0 right-0 left-0 bg-white z-50`}>
            <div className="flex justify-between mt-5 px-6">
                <div className="logo">
                    <Image
                        src={Logo}
                        className="h-[3rem] lg:h-[4rem] z-20"
                    />
                </div>
                <div className="flex gap-5 mt-1">
                    <ul className="hidden lg:flex gap-5 mt-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/explore">Explore</NavLink></li>
                        <li>Features</li>
                        <li>About</li>
                    </ul>
                    <div>
                        {!isLoggedin ? (
                            <>
                                <Button className="bg-[#FF9F1C] text-white px-[30pt] rounded-full shadowed-btn hidden lg:block" onClick={() => {
                                    navigate('/signin')
                                }}>Sign in</Button>
                                <Button className="bg-[#FF9F1C] text-white px-[20pt] rounded-full shadowed-btn lg:hidden mt-1" size="sm" onClick={() => {
                                    navigate('/signin')
                                }}>Sign in</Button>
                            </>
                        ) : (
                            <Dropdown placement="bottom-start">
                                <DropdownTrigger>
                                    <User
                                        as="button"
                                        avatarProps={{
                                            isBordered: true,
                                            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                                        }}
                                        className="transition-transform"
                                        description={currentuser.email}
                                        name={currentuser.username}

                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="User Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="">Signed in as</p>
                                        <p className="font-bold text-gray-500">{currentuser.email}</p>
                                    </DropdownItem>
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <div className="flex gap-1 py-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#000000"} fill={"none"}>
                                                    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                                                </svg>
                                            </div>
                                            
                                            <div>
                                                Profile
                                            </div>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem key="logout" color="white">
                                        <div className="flex justify-center">
                                            <Button onClick={sign_out} className="px-[5rem] bg-[#d00000] text-white">Sign out</Button>
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        )}

                    </div>
                    <Toaster />
                    <div className="mt-3 lg:hidden">
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#000000"} fill={"none"}>
                                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )

}