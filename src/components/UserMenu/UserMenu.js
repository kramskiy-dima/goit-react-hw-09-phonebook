import { connect } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import operation from '../../redux/auth/auth-operation';
import s from './UserMenu.module.css';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const UserMenu = ({ name, onLogout }) => (
  <div className={s.userNav}>
    <Chip
      className={s.profile}
      size="small"
      avatar={<Avatar alt={name} src="/static/images/avatar/1.jpg" />}
      label={`Welcome, ${name}`}
    />
    <ExitToAppIcon className={s.btn} onClick={onLogout} />
  </div>
);
const mapStateToProps = state => ({
  name: selectors.getName(state),
});

const mapDispatchToProps = {
  onLogout: operation.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
