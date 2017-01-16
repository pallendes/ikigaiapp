import * as firebase from 'firebase'

const fireBaseConfig = {
  apiKey: "AIzaSyAvQ_rWnrZOmKL-hM7rx56ONFxuVaOhdC4",
  authDomain: "ikigai-c17b0.firebaseapp.com",
  databaseURL: "https://ikigai-c17b0.firebaseio.com",
  storageBucket: "ikigai-c17b0.appspot.com",
  messagingSenderId: "713106560116"
};

export const firebaseApp = firebase.initializeApp(fireBaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
