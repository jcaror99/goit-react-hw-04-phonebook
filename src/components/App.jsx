import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContacts = contact => {
    if (contact.name.trim()) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm addContacts={this.addContacts} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export { App };
