import { selectFilter } from "../filters/selectors.js";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
