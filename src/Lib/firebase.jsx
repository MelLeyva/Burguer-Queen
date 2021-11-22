/* eslint-disable no-console */
import { signOut } from 'firebase/auth';
import { auth, signInWithEmailAndPassword } from '../firebase-config';

const logInAuth = async (loginEmail, loginPassword) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

const logOut = async () => {
  try {
    const outUser = await signOut(auth);
    console.log(outUser);
    console.log('ya salí');
  } catch (error) {
    console.log(error.message);
  }
};

export { logOut, logInAuth };
