import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const getRooms = createAsyncThunk('rooms', async () => {
    const room_res = await getDocs(collection(db, 'rooms'));
    const rooms = room_res.docs.map(doc => doc.data());
    return rooms
});

const addBookings = createAsyncThunk('bookings', async (data) => {
    const addtodb = await addDoc(collection(db, 'bookings'), data);
    return addtodb
})


const roomSlice = createSlice({
    name : 'rooms',
    initialState : {
        rooms : [],
        status : 'idle',
        error : null,
        booking_status : false
    },
    reducers : {
        book_now : (state, action) => {
            addBookings(action.payload);
        }
    },
    extraReducers : builder => {
        builder
            .addCase(getRooms.pending, state => {
                state.status = 'loading'
            })
            .addCase(getRooms.fulfilled, ( state, action ) => {
                state.status = 'fetched';
                state.rooms = action.payload
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message
            })
            .addCase(addBookings.fulfilled, (state, action) => {
                state.booking_status = true
            })
            .addCase(addBookings.rejected, (state, action) => {
                state.booking_status = false
            })
            .addCase(addBookings.pending, (state, action) => {
                state.status = 'loading'
            })
    }
})

export const roomreducer = roomSlice.reducer