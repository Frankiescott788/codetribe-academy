import axios from "axios"
import { useRef } from "react"
import { v4 } from "uuid"


export default function useCreateUser () {
    const username = useRef();
    const email = useRef();
    const password = useRef();

    function foo() {
        console.log(username.current.value, email.current.value, password.current.value)
    }

    const sign_up = async () => {
        const new_user = {
            _id : v4(),
            username : username.current.value ,
            email : email.current.value ,
            password : password.current.value,
        };
        try {
            const res = await axios.post('http://localhost:8080/users', new_user)
            const data = await res.data
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return {
        username,
        email,
        password,
        foo,
        sign_up
    }
}