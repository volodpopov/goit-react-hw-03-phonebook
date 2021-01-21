import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Phonebook.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChenge = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    if (name.trim() && number.trim()) {
      onSubmit(name, number);
      this.setState({ name: '', number: '' });
      return;
    }
    alert(`Enter name and number!`);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="enter contact name"
            value={this.state.name}
            onChange={this.handleChenge}
          ></input>
        </label>
        <label className={s.label}>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="example: 123-45-67"
            value={this.state.number}
            onChange={this.handleChenge}
          ></input>
        </label>
        <button className={s.button_add} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
