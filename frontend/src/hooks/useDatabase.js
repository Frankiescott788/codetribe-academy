import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db, fileUpload } from "../../firebase/config";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../store/UIreducer";
import { useNavigate } from "react-router-dom";

export default function useDB() {
    const [roomname, setRoomname] = useState(null);
    const [roomnumber, setRoomnumber] = useState(null);
    const [roomPernight, setRoompernight] = useState(null);
    const [numberofbeds, setNumberofbeds] = useState(null);
    const [occupancy, setOccupancy] = useState(null);
    const [description, setDescription] = useState(null);
    const [roomamenities, setRoomamenities] = useState(null);
    const [Photo, setPhoto] = useState(null);

    const { roomAdded } = useSelector(state => state.UI);
    const dispatch = useDispatch();
    const [loading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const add_room = async () => {
        try {
            setIsLoading(true);
            const addtodb = await addDoc(collection(db, 'rooms'), {
                roomname,
                roomnumber,
                roomPernight,
                numberofbeds,
                occupancy,
                description,
                roomamenities,
                Photo: Photo?.name || null, 
            });
            const imageRef = ref(fileUpload, 'pictures/' + Photo?.name || null);
            uploadBytes(imageRef, Photo);
            dispatch(showToast(true));

            setTimeout(() => {
                navigate('/admin/')
            }, 2000);            
            
        } catch (error) {
            console.error("Error adding room:", error);
        } finally {
            setIsLoading(false);
        }
    };

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
        loading
    };
}
