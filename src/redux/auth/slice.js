import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

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
    initialState, 
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = true;
        })
          .addCase(logout.fulfilled, () => initialState)
    }       
})

export const authSlice = slice.reducer; 
