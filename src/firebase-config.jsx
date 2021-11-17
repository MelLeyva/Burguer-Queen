import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBGVvICjcQrWBBgSB5pk0jyAVbx3S0ssGs',
  authDomain: 'burger-queen-9b1ab.firebaseapp.com',
  projectId: 'burger-queen-9b1ab',
  storageBucket: 'burger-queen-9b1ab.appspot.com',
  messagingSenderId: '154326309659',
  appId: '1:154326309659:web:a510c050fbf0ac0f4651be',
  measurementId: 'G-NV3CJTCM14'
};

const app = initializeApp(firebaseConfig);

export default getAuth(app);
