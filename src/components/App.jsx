import { useState, useEffect } from 'react';
import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.scss';

export const App = () => {
  const getContacts = () => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  };
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(contacts => [contact, ...contacts]);
    }
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      <h2 className={s.title}>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} value={filter} />
      <ContactList
        onDeleteContact={onDeleteContact}
        contacts={filteredContacts}
      />
    </div>
  );
};
