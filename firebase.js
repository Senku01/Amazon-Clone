

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBv600cS1QGuKdko1dmmyrdIoaQ0OgNeFk",

    authDomain: "clone-4433d.firebaseapp.com",

    projectId: "clone-4433d",

    storageBucket: "clone-4433d.appspot.com",

    messagingSenderId: "249211457250",

    appId: "1:249211457250:web:36052e9db9bc0b90e558bb",

    measurementId: "G-G20TDLSNLT"

};


  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.getAnalytics();
let db = firebase.firestore();
