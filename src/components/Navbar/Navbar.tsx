import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../..';
import styles from './navbar.module.scss';

const Navbar = () => {
  let location = useLocation();
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarActions}>
        {!user ? (
          <Link to={'/login'} className={location.pathname.includes('login') ? styles.active : ''}>
            Login
          </Link>
        ) : (
          <a href="/" onClick={logout}>
            Logout
          </a>
        )}
        <Link to={'/chat'} className={location.pathname.includes('chat') ? styles.active : ''}>
          Chat
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
