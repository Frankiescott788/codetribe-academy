import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const Authcontext = createContext();
export default function AuthProvider({ children }) {
    const [cookies, setCookies] = useCookies(['auth_token']);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [isLoading, setIsloading] = useState(true);
    useEffect( () => {
        async function checkAuth() {
            try {
                if(cookies.auth_token !== undefined) {
                    const { data } = await axios.get(`http://localhost:3005/users/`);
                    const current_user = data.find(user => user._id === cookies.auth_token);
                    setCurrentUser(current_user);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsloading(false);
            }
        }
        checkAuth();
    }, []);

    return (
        <Authcontext.Provider value={{ isAuthenticated, setIsAuthenticated, currentUser, isLoading }}>
            {children}
        </Authcontext.Provider>
    )
}