import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact } from "./contactsOps";

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

export const contactSlice = createSlice({
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

export const { addContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
