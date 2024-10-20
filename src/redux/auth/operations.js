import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const generalApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
});

const setAuthHeaders = (token) => {
  generalApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
      const { data } = await generalApi.post('users/signup', credentials);
      setAuthHeaders(data.token);
      return data;
      
  } catch (error) {
      return thunkApi.rejectWithValue(error.message);
  }  
});


export const login = createAsyncThunk('login', async (credentials, thunkApi) => {
  try {
      const { data } = await generalApi.post('users/login', credentials);
      setAuthHeaders(data.token);
      return data;
      
  } catch (error) {
      return thunkApi.rejectWithValue(error.message);
  }  
});

export const logout = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
      await generalApi.post('users/logout');      
  } catch (error) {
      return thunkApi.rejectWithValue(error.message);
  }  
});
