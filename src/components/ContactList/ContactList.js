import s from './ContactList.module.css';
import { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import operation from '../../redux/phonebook/phonebook-operaton';
import selectors from '../../redux/phonebook/phonebook-selectors';

export default function ContactList() {
  const filterContacts = useSelector(selectors.getFilterContacts);
  const loading = useSelector(selectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.fetchContact());
  }, [dispatch]);

  const deleteContact = useCallback(
    id => dispatch(operation.deleteContact(id)),
    [dispatch],
  );

  return (
    <ul className={s.list}>
      {loading && <h2>Loading...</h2>}
      {!loading && filterContacts.length > 0
        ? filterContacts.map(item => (
            <li className={s.item} key={item.id}>
              {item.name}:<span className={s.phoneNumber}>{item.number}</span>
              <button
                className={s.button}
                onClick={() => deleteContact(item.id)}
              >
                Delete
              </button>
            </li>
          ))
        : !loading && <p className={s.contactEmpty}>You contact list empty</p>}
    </ul>
  );
}
