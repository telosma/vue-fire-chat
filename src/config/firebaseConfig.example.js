import firebase from 'firebase'

const config = {
  apiKey: 'your-apiKey',
  authDomain: 'your authDomain',
  databaseURL: 'your databaseURL',
  projectId: 'your projectId',
  storageBucket: 'your storageBucket name',
  messagingSenderId: 'your messagingSenderId'
}

firebase.initializeApp(config)

export const firebaseInstance = firebase
