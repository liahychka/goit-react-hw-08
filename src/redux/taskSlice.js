import { createSlice } from '@reduxjs/toolkit';
import contactsJson from '../../src/components/contacts.json';

export const initialState = 
    {
contacts: {
		items: contactsJson
	},
filters: {
		name: ""
	}
}

