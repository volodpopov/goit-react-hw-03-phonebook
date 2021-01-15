import React from 'react';
import s from './Phonebook.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.contact_list}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;
