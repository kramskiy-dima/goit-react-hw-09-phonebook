import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as phoneBookActions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';

const Filter = ({ filter, changeFilter }) => {
  const onChange = e => {
    changeFilter(e.target.value);
  };

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

const mapStateToProps = (state, props) => ({
  filter: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(phoneBookActions.changeFilter(value)),
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
