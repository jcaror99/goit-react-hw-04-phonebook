import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';

class App extends Component {
  state = {
    contacts: [
      { nombre: 'jcr', id: 1 },
      { nombre: 'mono', id: 1 },
      { nombre: 'luis', id: 1 },
    ],
    name: '',
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
        <ContactForm />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export { App };
