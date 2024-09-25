import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


export const getRooms = createAsyncThunk('rooms', async () => {
    const room_res = await getDocs(collection(db, 'users'));
    const rooms = room_res.docs.map(doc => doc.data());
    return rooms
});

const roomSlice = createSlice({
    name : 'rooms',
    initialState : {
        rooms : [],
        status : 'idle',
        error : null
    },
    reducers : {e},
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
    }
})
