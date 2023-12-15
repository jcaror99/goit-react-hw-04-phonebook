import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(element => (
            <li key={nanoid()}>{element.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
