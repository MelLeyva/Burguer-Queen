/* eslint-disable no-console */
/* eslint-disable no-alert */
import Cookies from 'universal-cookie';
import { getData } from './crud';
// import Axios from 'axios';

const cookies = new Cookies();
const LogInJSON = () => {
  const getUser = async (email, password) => {
    await getData('empleados')
      .then((res) => {
        const userEmail = res.filter((elem) => elem.email === email);
        const userPassword = userEmail.filter(
          (elem) => elem.password === password
        );
        // console.log(res);
        if (userEmail.length <= 0) {
          alert('email incorrecto');
        } else if (userPassword <= 0) {
          alert('Contrasenña incorrecta');
        }
        const userLogIn = userPassword[0];
        cookies.set('id', userLogIn.id, { path: '/' });
        cookies.set('name', userLogIn.name, { path: '/' });
        cookies.set('admin', userLogIn.role.admin, { path: '/' });
        cookies.set('kitchen', userLogIn.role.kitchen, { path: '/' });
        cookies.set('waiter', userLogIn.role.waiter, { path: '/' });
        cookies.set('email', userLogIn.email, { path: '/' });
        // console.log(userPassword);

        if (cookies.get('kitchen') === 'true') {
          window.location.href = '/kitchen';
        } else if (cookies.get('waiter') === 'true') {
          window.location.href = '/orders';
        } else if (res.role.admin) {
          window.location.href = '/admin';
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getCookies = () => {
    if (!cookies.get('email')) {
      window.location.href = './';
    }
  };

  const removeCookies = () => {
    cookies.remove('id', { path: '/' });
    cookies.remove('name', { path: '/' });
    cookies.remove('role', { path: '/' });
    cookies.remove('email', { path: '/' });
    cookies.remove('password', { path: '/' });
    if (!cookies.get('id')) {
      window.location.href = './';
    }
  };
  return {
    getUser,
    getCookies,
    removeCookies
  };
};

export default LogInJSON;
