import { Component } from 'react';
import css from './DeleteContact.module.css';

class DeleteContact extends Component {
  handleClickDeleteButton = e => {
    this.props.deleteContacts(e.target.name);
  };

  render() {
    const { contactName } = this.props;

    return (
      <button
        className={css.deleteButton}
        name={contactName}
        onClick={this.handleClickDeleteButton}
      >
        Delete
      </button>
    );
  }
}

export default DeleteContact;
