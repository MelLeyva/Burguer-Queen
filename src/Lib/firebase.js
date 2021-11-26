/* eslint-disable no-console */
import { signOut } from 'firebase/auth';
import { auth, signInWithEmailAndPassword } from '../firebase-config';

// eslint-disable-next-line import/no-mutable-exports
// let errorMessage = '';
const logInAuth = async (loginEmail, loginPassword) => {
  try {
    return await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    // console.log(user);
  } catch {
    return null;
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

export { logOut, logInAuth /* , errorMessage */ };
