import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import s from './HomeView.module.css';

const HomeView = () => {
  return (
    <div className={s.home}>
      <ContactPhoneIcon fontSize="large" />
      <h1>PhoneBook</h1>
    </div>
  );
};

export default HomeView;
