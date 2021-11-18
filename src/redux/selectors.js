const getLoading = state => state.contacts.loading;

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    `${name}`.toLowerCase().includes(normalizedFilter),
  );
};

export { getLoading, getFilter, getVisibleContacts };
