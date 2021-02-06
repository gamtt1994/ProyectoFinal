import firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.db = firebase.firestore();
  }
}

const App = new Firebase();
export default App;
