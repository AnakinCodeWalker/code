import { createSlice } from "@reduxjs/toolkit";

// 1 initial state 
const initialState = {
    user : null ,
    isLoggedIn: false,
    loading: false,
}


const authSlice = createSlice({

    //  2 name 
    name: "auth",

    initialState: initialState,
    // 3 creating reducers
    reducers: {

        setUser  : (state , value) =>{
state.user = value.payload 
        },
        setIsLoggedIn: (state, value) => {
            state.isLoggedIn = value.payload
        },
        setLoading: (state, value) => {
            state.loading = value.payload
        }
    },
})

// export indiviual slices and the reducer
export const  {setUser , setIsLoggedIn ,setLoading} =  authSlice.actions
export default authSlice.reducer


// useDispatch -- send the data 
//  dispatch uses reducer to change value in the  store

// useSelector -- select the data from the specific slice
