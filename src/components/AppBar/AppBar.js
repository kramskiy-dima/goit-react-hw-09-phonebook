import { connect } from 'react-redux';
import Navigaton from '../Navigation';
import authSelectors from '../../redux/auth/auth-selectors';
import AutNav from '../AutNav';
import UserMenu from '../UserMenu';
import s from './AppBar.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const AppBars = ({ onAuth }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar className={s.appContainer} variant="dense">
          <Navigaton />
          {onAuth ? <UserMenu /> : <AutNav />}
        </Toolbar>
      </AppBar>
    </>
  );
};
const mapStateToProps = state => ({
  onAuth: authSelectors.getIsAuth(state),
});
export default connect(mapStateToProps)(AppBars);
