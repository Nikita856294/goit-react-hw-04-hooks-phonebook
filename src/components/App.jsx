import { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Section from './Section';
import Container from './Container';
import Form from './ContactForm';
import ContactList from './ContactsList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

function App() {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedTodos = JSON.parse(contacts);
  //   if (parsedTodos) {
  //     this.setState({
  //       contacts: parsedTodos,
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextState = this.state.contacts;
  //   if (prevState.contacts !== nextState) {
  //     console.log(this.state.contacts);
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

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
