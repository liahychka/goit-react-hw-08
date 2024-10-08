import { createSlice } from "@reduxjs/toolkit";
import {initialState} from './taskSlice'

const slice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		deleteContact: (state, action) => {
			state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
		}, addContact: (state, action) => {
		state.contacts.items.push(action.payload);
		},
	},
}); 


export const selectContacts = state => state.tasks.contacts.items;
export const taskReducer = slice.reducer;
export const { deleteContact, addContact } = slice.actions;