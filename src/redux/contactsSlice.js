import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact } from "./contactsOps.js";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const isPending = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pending");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

const pendingReducer = (state) => {
  state.contacts.loading = true;
  state.contacts.error = null;
  state.contacts.items = [];
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null; 
        state.contacts.items = action.payload;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null; 
        state.contacts.items = action.payload;
      })

      .addMatcher(isPending, pendingReducer)
      .addMatcher(isRejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload; 
      });
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.contacts.filters.name],
  (contacts, nameFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

export const { addContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
export default contactsSlice;
