import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import getAuth from '../firebase-config';
import '../Styles-scss/Order.scss';

function BreakFast() {
  const auth = getAuth;
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="breakfast">
      <h1 className="title">Aqui van los desayunos </h1>
      <Link to="/">
        <button className="exit" type="button" onClick={logout}>
          Salir
        </button>
      </Link>
      <h4> User Logged In: </h4>
      {user?.email}
    </div>
  );
}

export default BreakFast;
