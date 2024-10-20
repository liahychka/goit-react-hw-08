import { filterReducer } from "../redux/filters/filtersSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/slice";
import { selectContacts } from "./contacts/selectors";

export const store = configureStore({
  reducer: {
    contacts: selectContacts,
    filters: filterReducer,
    auth: authSlice
  },
});