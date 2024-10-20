import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/filtersSlice";

export const selectContacts = (state) => state.contacts;
export const selectContactsItems = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loadning;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectFilters], (contacts, filter) => {
	    console.log('Performing filtering');
	    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
})