import s from './ContactList.module.css';
import { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import operation from '../../redux/phonebook/phonebook-operaton';
import selectors from '../../redux/phonebook/phonebook-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <ul className={s.list}>
        {this.props.loading && <h2>Loading...</h2>}
        {!this.props.loading && this.props.filterContacts.length > 0
          ? this.props.filterContacts.map(item => (
              <li className={s.item} key={item.id}>
                {item.name}:<span className={s.phoneNumber}>{item.number}</span>
                <button
                  className={s.button}
                  onClick={() => this.props.deleteContact(item.id)}
                >
                  Delete
                </button>
              </li>
            ))
          : !this.props.loading && (
              <p className={s.contactEmpty}>You contact list empty</p>
            )}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  filterContacts: selectors.getFilterContacts(state),
  loading: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operation.deleteContact(id)),
  getContacts: () => dispatch(operation.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
