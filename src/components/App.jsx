import { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Section from './Section';
import Container from './Container';
import Form from './ContactForm';
import ContactList from './ContactsList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsLocal = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLocal);

    if (parsedContacts && parsedContacts.length !== 0) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    console.log(contacts);

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      return alert(` ${name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => {
      return [...prevState, contact];
    });
  };
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const nozmalizedContacts = filter.toLowerCase();
  console.log(contacts);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nozmalizedContacts)
  );

  return (
    <div className="root">
      <GlobalStyle />
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
        <Section title={'Contacts'}>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </Section>
      </Container>
    </div>
  );
}

export { App };
