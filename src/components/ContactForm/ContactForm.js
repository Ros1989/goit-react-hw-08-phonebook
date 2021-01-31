import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getIsAdded } from '../../redux/contacts/contacts-selectors';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isAdded = useSelector(getIsAdded);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <div className="inputWrapper">
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="name"
            onChange={e => setName(e.target.value)}
          />
          <label
            className={name ? 'labelRight' : 'label'}
            htmlFor="name"
          ></label>
        </div>
        <div className="inputWrapper">
          <label
            className={number ? 'labelRight' : 'label'}
            htmlFor="phone"
          ></label>
          <input
            className="input"
            type="tel"
            name="number"
            id="number"
            value={number}
            placeholder="phone number"
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <button className="button" type="submit" disabled={!(name && number)}>
          Add
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};
