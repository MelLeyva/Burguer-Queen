/* eslint-disable no-console */
/* eslint-disable no-alert */
import Cookies from 'universal-cookie';
import Axios from 'axios';

const cookies = new Cookies();
const LogInJSON = () => {
  const getUser = async (email, password) => {
    await Axios.get(`http://localhost:5000/empleados`, {
      // eslint-disable-next-line prettier/prettier
      params: { 'email': email, 'password': password }
    })
      .then((response) => response.data)
      .then((resul) => {
        if (resul.length > 0) {
          const res = resul[0];
          cookies.set('id', res.id, { path: '/' });
          cookies.set('name', res.name, { path: '/' });
          cookies.set('admin', res.role.admin, { path: '/' });
          cookies.set('kitchen', res.role.kitchen, { path: '/' });
          cookies.set('waiter', res.role.waiter, { path: '/' });
          cookies.set('email', res.email, { path: '/' });
          console.log(resul);
          // alert('usuario ingresado');
          // cookies.set('password', res.password, { path: '/' });
          if (cookies.get('kitchen') === 'true') {
            window.location.href = '/kitchen';
          } else if (cookies.get('waiter') === 'true') {
            window.location.href = '/orders';
          } /* else if (res.role.admin) {
            window.location.href = '/admin';
          } */
        } else {
          alert('Verificar credenciales');
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
