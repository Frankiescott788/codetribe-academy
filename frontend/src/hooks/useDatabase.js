import { useContext, useState } from "react";
import { addDoc, collection } from 'firebase/firestore'
import { AuthContext } from '../context/authProvider'

export default function useDB () {
    const [roomname, setRoomname] = useState(null);
    const [roomnumber, setRoomnumber] = useState(null);
    const [roomPernight, setRoompernight] = useState(null);
    const [numberofbeds, setNumberofbeds] = useState(null);
    const [occupancy, setOccupancy] = useState(null);
    const [description, setDescription] = useState(null);
    const [roomamenities, setRoomamenities] = useState(null);
    const [Photo, setPhoto] = useState(null);

    const { db } = useContext(AuthContext)

    const add_room = async () => {
        try {
            // const addtodb = await addDoc(db, collection('rooms'), {
               
            // });
            console.table( {
                roomname,
                roomnumber,
                roomPernight,
                numberofbeds,
                occupancy,
                description,
                roomamenities,
                Photo
            })
        } catch (error) {
            console.log(error)
        }
    }

    return {
        setRoomname,
        setRoomamenities,
        setRoomnumber,
        setOccupancy,
        setNumberofbeds,
        setRoompernight,
        
        setDescription,
        add_room,
        setPhoto,
    }
}