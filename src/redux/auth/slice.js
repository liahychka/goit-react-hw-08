import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}; 

const slice = createSlice({
    name: 'auth',
    initialState: initialState, 
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
            state.isRefreshing = true
        })
    }
            
})

export const authSlice = slice.reducer; 