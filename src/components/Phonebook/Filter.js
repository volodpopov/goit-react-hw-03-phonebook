import React from 'react';
import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.contact_list}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
