import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from '.';
import { AppRouter, Loader, Navbar } from './components';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="box-terminal"></div>
      <div className="container">
        <Navbar />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
