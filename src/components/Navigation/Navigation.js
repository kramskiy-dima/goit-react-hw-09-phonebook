import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

export default function Navigaton() {
  const onAuth = useSelector(authSelectors.getIsAuth);
  return (
    <nav className={s.navigation}>
      <Typography color="inherit">
        <NavLink
          exact
          to={routes.home}
          activeClassName={s.activelink}
          className={s.link}
        >
          <HomeIcon fontSize="large" />
        </NavLink>
      </Typography>

      {onAuth && (
        <Typography color="inherit">
          <NavLink
            exact
            to={routes.contacts}
            activeClassName={s.activelink}
            className={s.link}
          >
            Contacts
          </NavLink>
        </Typography>
      )}
    </nav>
  );
}
