import { configureStore } from "@reduxjs/toolkit";
import { uireducer } from "./UIreducer";

const store = configureStore({
    reducer : {
        UI : uireducer
    }
})

export default store