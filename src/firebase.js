import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBakNy0z23DJ6LGyhrQBdVrkxzsPe332nM",
    authDomain: "leoshop2019.firebaseapp.com",
    databaseURL: "https://leoshop2019.firebaseio.com",
    projectId: "leoshop2019",
    storageBucket: "leoshop2019.appspot.com",
    messagingSenderId: "201100713191"
};
firebase.initializeApp(config);
export default firebase;