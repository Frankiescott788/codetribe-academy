import { createSlice } from "@reduxjs/toolkit";

const UIreducer = createSlice({
    name : 'user experience',
    initialState : {
        roomAdded : false,
    },
    reducers : {
        showToast : (state, action) => {
            state.roomAdded = action.payload
        }
    }
});

export const { showToast } = UIreducer.actions;

export const uireducer =  UIreducer.reducer