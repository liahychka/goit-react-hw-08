// import { filterReducer } from "../redux/filters/filtersSlice";
// import { contactsReducer } from "../redux/contacts/contactsSlice";
import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./auth/slice";

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filters: filterReducer
    auth: authSlice
  },
});