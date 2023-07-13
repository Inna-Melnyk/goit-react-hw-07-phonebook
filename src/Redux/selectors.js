import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

// export const selectVisiblesCotacts = state => {
//   const dd = selectContacts(state);
//   const filter = selectFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
//   return filteredContacts;
// };

export const selectVisibleCotacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
