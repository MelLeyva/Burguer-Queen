import React from 'react';
import Cookies from 'universal-cookie';
import icon from '../../../img/logOut.png';
import LogInJSON from '../../../Lib/LogInJSON';

const cookies = new Cookies();
function KetchenHeader() {
  const { removeCookies } = LogInJSON();
  const userName = cookies.get('name').firstName;

  return (
    <>
      <header>
        <div className="kitchen">
          <p className="avatar">{userName}</p>
        </div>
        <button
          className="exit"
          type="button"
          onClick={() => {
            removeCookies();
            // console.log('ya salí');
          }}
        >
          <img src={icon} alt="get-out" />
        </button>
      </header>
    </>
  );
}

export default KetchenHeader;
