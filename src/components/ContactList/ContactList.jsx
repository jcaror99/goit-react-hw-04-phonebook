import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(element => (
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
