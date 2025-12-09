import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.navigationLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navigationLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
