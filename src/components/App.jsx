import { Component } from 'react';
import './App.module.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import FilterContact from './FilterContact/FilterContact.jsx';
import ContactList from './ContactList/ContactList.jsx';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = contact => {
    if (contact.name.trim()) {
      if (
        this.state.contacts.some(
          element => element.name.toLowerCase() === contact.name.toLowerCase()
        )
      ) {
        return alert(`${contact.name} is already in contacts`);
      } else {
        this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
      }
    }
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContacts = contactName => {
    this.setState({
      contacts: this.state.contacts.filter(
        element => element.name.toLowerCase() !== contactName.toLowerCase()
      ),
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <FilterContact filterChange={this.filterChange} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}

export { App };
