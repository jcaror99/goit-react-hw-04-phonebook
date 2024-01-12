import { Component } from 'react';
import './App.module.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import FilterContact from './FilterContact/FilterContact.jsx';
import ContactList from './ContactList/ContactList.jsx';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = contact => {
    if (contact.name.trim()) {
      const storedContacts = localStorage.getItem('contactList');
      let contactsArray = [];

      if (storedContacts) {
        contactsArray = JSON.parse(storedContacts).contacts;
      }

      if (
        contactsArray.some(
          element => element.name.toLowerCase() === contact.name.toLowerCase()
        )
      ) {
        return alert(`${contact.name} is already in contacts`);
      } else {
        const updatedContacts = [...contactsArray, contact];
        localStorage.setItem(
          'contactList',
          JSON.stringify({ contacts: updatedContacts })
        );
        console.log(2, 'adicion a localstorage');
        this.setState({ contacts: updatedContacts });
      }
    }
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContacts = contactName => {
    const storedContacts = localStorage.getItem('contactList');
    let contactsArray = [];

    if (storedContacts) {
      contactsArray = JSON.parse(storedContacts).contacts;
    }

    let deleteContactsArray = contactsArray.filter(
      element => element.name.toLowerCase() !== contactName.toLowerCase()
    );

    localStorage.setItem(
      'contactList',
      JSON.stringify({ contacts: deleteContactsArray })
    );
    console.log(3, 'eliminacion de localstorage');

    this.setState({ contacts: deleteContactsArray });
  };

  handleLocalStorage() {
    const storedContacts = localStorage.getItem('contactList');
    if (storedContacts) {
      console.log(1, 'montaje del Dom obtenido de localstorage');
      return JSON.parse(storedContacts).contacts;
    }

    console.log(0, 'montaje del Dom obtenido de estado original');
    return this.state.contacts;
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <FilterContact filterChange={this.filterChange} />
        <ContactList
          contacts={this.handleLocalStorage()}
          filter={this.state.filter}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}

export { App };
