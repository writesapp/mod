import firebase from 'firebase';

const configOptions = {
  apiKey: "AIzaSyBe23vGrWbbtK6cWQflEewoDvTBtKWQEBM",
  authDomain: "test-project-116cf.firebaseapp.com",
  databaseURL: "https://test-project-116cf.firebaseio.com",
  projectId: "test-project-116cf",
  storageBucket: "test-project-116cf.appspot.com",
  messagingSenderId: "507446435196",
  appId: "1:507446435196:web:8a13dc8c60ddcf65e058f9",
  measurementId: "G-H01LY21GK7",
};

firebase.initializeApp(configOptions);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
