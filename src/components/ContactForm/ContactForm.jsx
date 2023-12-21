import { Component } from 'react';
import { nanoid } from 'nanoid';
import './ContactForm.module.css';

class ContactForm extends Component {
  handleClick = e => {
    e.preventDefault();
    const inputName = document.querySelector('input');
    console.log(inputName.value);
    this.props.addContacts({ nombre: inputName.value, id: nanoid() });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form action="">
          <label htmlFor={nanoid()}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit" onClick={this.handleClick}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
