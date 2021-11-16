import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import getAuth from '../firebase-config';
import '../Styles-scss/Order.scss';

function BreakFast() {
  const auth = getAuth;
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  // meter en un useEffect
  onAuthStateChanged(auth, (currentUser) => {
    // eslint-disable-next-line no-unused-expressions
    currentUser ? setUser(currentUser) : setUser('');
  });
  const logout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="breakfast">
      <h1 className="title">Aqui van los desayunos </h1>
      <button className="exit" type="button" onClick={logout}>
        Salir
      </button>
      <h4> User Logged In: </h4>
      {user?.email}
    </div>
  );
}

export default BreakFast;
