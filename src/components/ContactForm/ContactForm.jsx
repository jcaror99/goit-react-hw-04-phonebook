import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  handleClick = e => {
    e.preventDefault();
    const inputName = document.querySelector('input[name="name"]');
    const inputTel = document.querySelector('input[name="number"]');
    this.props.addContacts({
      name: inputName.value,
      id: nanoid(),
      number: inputTel.value,
    });
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
          <label htmlFor={nanoid()}>
            Number
            <input
              className={css.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
