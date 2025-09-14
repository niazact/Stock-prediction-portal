import { createSlice, nanoid } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: "" ,
        loged: false
    },
    reducers: {
        setLogout: (state, action) => {
            state.loged=false 
            state.user=''
        },
        setLogin: (state, action) => {
            state.user = action.payload
            state.loged=true 
        }
    }
})
export default authSlice.reducer
export const { setLogout, setLogin } = authSlice.actions 
