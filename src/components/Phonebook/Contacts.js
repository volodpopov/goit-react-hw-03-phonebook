import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

const Contacts = ({ contactNames, onDelete }) => {
  if (contactNames.length === 0) {
    return null;
  } else {
    return (
      <ul className={s.contact_list}>
        {contactNames.map(({ id, name, number }) => (
          <li className={s.contact_item} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className={s.button_del}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
};

Contacts.propTypes = {
  contactNames: PropTypes.array,
};

export default Contacts;
