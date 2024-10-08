import axios from "axios";
import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { v4 } from "uuid";
import { Authcontext } from "../context/authProvider";
import { useNavigate } from "react-router-dom";

export default function useAuth () {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [cookies, setCookies] = useCookies(['auth_token']);

    const { setIsAuthenticated } = useContext(Authcontext);

    const redirect = useNavigate();

    const sign_up = async () => {
        try {
            const new_user = {
                _id : v4(),
                username,
                email,
                password
            }
            const { status } = await axios.post('http://localhost:3005/users', new_user);
            if(status === 201) {
                setCookies('auth_token', new_user._id);
                setIsAuthenticated(true);
                redirect('/');
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        setUsername,
        setEmail,
        setPassword,
        sign_up
    }
}