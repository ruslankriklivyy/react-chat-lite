import React, { useContext } from 'react';
import { Context } from '../../index';
import firebase from 'firebase';

import googleSvg from '../../assets/img/google.svg';
import styles from './login.module.scss';

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <div className="box">
      <div className={styles.login}>
        <h2>Log in to enter the chat room</h2>
        <button onClick={login}>
          <img src={googleSvg} alt="google svg" /> Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
