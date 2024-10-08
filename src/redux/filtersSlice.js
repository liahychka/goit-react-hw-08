import { createSlice } from "@reduxjs/toolkit";
import {initialState} from './taskSlice'

const slice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			state.filters = action.payload;
		},
	},
}); 


// export const selectFilters = state => state.tasks.filters.name;
export const selectFilters = state => state.tasks.filters;

export const taskReducer = slice.reducer;
export const {changeFilter } = slice.actions;