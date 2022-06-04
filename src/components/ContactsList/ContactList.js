import React from 'react';
import { ContactsList, ListItem, DeleteButton } from './ContactListStyle';
import PropTypes from 'prop-types';

function ContactList({ contacts, deleteContact }) {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            {name}:{number}
            <DeleteButton type="button" onClick={() => deleteContact(id)}>
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </ContactsList>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func,
};
