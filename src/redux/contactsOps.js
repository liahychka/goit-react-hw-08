import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generalApi } from "./auth/operations";

// axios.defaults.baseURL = 'https://670a41c2af1a3998baa381bf.mockapi.io';

export const fetchContacts = createAsyncThunk('fetchData', async (_, thunkApi) => {
    try {
        const { data } = await generalApi.get('/contacts');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.messsage);
    }
});

export const deleteContact = createAsyncThunk('deleteContactThunk', async (id, thunkApi) => {
    try {
        const { data } = await generalApi.delete(`/contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.messsage);
    }
});

export const addContact = createAsyncThunk('addContactThunk', async (body, thunkApi) => {
    try {
        const { data } = await generalApi.post(`/contacts/`, body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.messsage);
    }
});