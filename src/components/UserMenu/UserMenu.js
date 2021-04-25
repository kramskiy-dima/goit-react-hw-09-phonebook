import { useSelector, useDispatch } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import operation from '../../redux/auth/auth-operation';
import s from './UserMenu.module.css';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function UserMenu() {
  const name = useSelector(selectors.getName);
  const dispatch = useDispatch();

  return (
    <div className={s.userNav}>
      <Chip
        className={s.profile}
        size="small"
        avatar={<Avatar alt={name} src="/static/images/avatar/1.jpg" />}
        label={`Welcome, ${name}`}
      />
      <ExitToAppIcon
        className={s.btn}
        onClick={() => dispatch(operation.logout())}
      />
    </div>
  );
}
