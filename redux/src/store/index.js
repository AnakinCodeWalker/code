import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
const  store = configureStore({

//  dispatch uses reducer to change value in the  store

    reducer : {
          auth: authReducer
    } 
})

export default store