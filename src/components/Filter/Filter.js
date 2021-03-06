import s from './Filter.module.css';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as phoneBookActions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';

const Filter = () => {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const onChange = useCallback(
    e => {
      dispatch(phoneBookActions.changeFilter(e.target.value));
    },
    [dispatch],
  );

  return (
    <p>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        ></input>
      </label>
    </p>
  );
};

export default Filter;
