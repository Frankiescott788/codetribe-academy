import { useState, useContext } from "react";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db, fileUpload } from "../../firebase/config";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../store/UIreducer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";

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
    const { currentuser } = useContext(AuthContext);

    const add_room = async () => {
        try {
            setIsLoading(true);
    
            // Add room details to Firestore and get document reference
            const addtodb = await addDoc(collection(db, 'rooms'), {
                roomname,
                roomnumber,
                roomPernight,
                numberofbeds,
                occupancy,
                description,
                roomamenities,
                Photo: Photo?.name || null, // Just store the name initially
            });
    
            const imageRef = ref(fileUpload, 'pictures/' + addtodb.id);
    
            await uploadBytes(imageRef, Photo);
    
            const downloadURL = await getDownloadURL(imageRef);
    
            await updateDoc(doc(db, 'rooms', addtodb.id), {
                Photo: downloadURL
            });
    
            dispatch(showToast(true));
    
            setTimeout(() => {
                navigate('/admin/');
            }, 2000);
    
        } catch (error) {
            console.error("Error adding room:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const check_out = () => {
        
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
        loading
    };
}
