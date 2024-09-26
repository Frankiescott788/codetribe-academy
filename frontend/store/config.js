import { configureStore } from "@reduxjs/toolkit";
import { uireducer } from "./UIreducer";
import { roomreducer } from "./crudReducer";

const store = configureStore({
    reducer : {
        UI : uireducer,
        rooms : roomreducer
    }
})

export default store