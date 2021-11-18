/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React /* { useState } */ from 'react';
import logout from '../Lib/firebase';
import '../Styles-scss/Order.scss';

function BreakFast({ user }) {
  console.log(user);
  /*   const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    // eslint-disable-next-line no-unused-expressions
    currentUser ? setUser(currentUser) : setUser(null);
    console.log(user);
  }); 
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate('/');
  }; */

  return (
    <div className="breakfast">
      <h1 className="title">Aqui van los desayunos </h1>
      <button className="exit" type="button" onClick={logout}>
        Salir
      </button>
    </div>
  );
}

export default BreakFast;
