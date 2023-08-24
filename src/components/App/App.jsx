import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactFormTitle, ContactListTitle } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';

const localStorageKey = 'my-contacts';

export class App extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    if (this.state.contacts.some(contacts => contacts.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const myContacts = localStorage.getItem(localStorageKey);
    if (myContacts !== null) {
      this.setState({ contacts: JSON.parse(myContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: nextContacts } = this.state;
    const { contacts: prevContacts } = prevState;
    if (nextContacts !== prevContacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextContacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Layout>
        <ContactFormTitle>Phonebook</ContactFormTitle>
        <ContactForm onAdd={this.addContact} />

        <ContactListTitle>Contacts</ContactListTitle>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
