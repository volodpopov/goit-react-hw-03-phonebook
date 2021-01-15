import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Form from './Phonebook/Form';
import Contacts from './Phonebook/Contacts';
import Filter from './Phonebook/Filter';
import s from './Phonebook/Phonebook.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    if (contact.name.trim() !== '' && contact.number.trim() !== '') {
      this.setState(prevState => {
        if (prevState.contacts.map(data => data.name).includes(contact.name)) {
          alert(`${contact.name} is already in contacts.`);
          return null;
        }
        return { contacts: [contact, ...prevState.contacts] };
      });
    }
  };

  chengeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const findContacts = contacts.filter(contact =>
      contact.name.includes(filter),
    );
    return (
      <div className={s.container}>
        <h2 className={s.title}>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter} />
        <Contacts contactNames={findContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
