import { Component } from 'react';
import css from './FilterContact.module.css';

class FilterContact extends Component {
  render() {
    return (
      <div className={css.filterContact}>
        <span>Find contacts by name</span>
        <input
          type="text"
          className={css.filterInput}
          onChange={this.props.filterChange}
        />
      </div>
    );
  }
}

export default FilterContact;
