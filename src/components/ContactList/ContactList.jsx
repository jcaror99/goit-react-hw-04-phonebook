import { Component } from 'react';
import FilterContact from '../FilterContact/FilterContact.jsx';

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h2>Contacts</h2>
        <FilterContact />
        <ul>
          {filterContacts.map(element => (
            <li key={element.id}>
              {element.name}: {element.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
