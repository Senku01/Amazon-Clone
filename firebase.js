import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";

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

  const app = initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const analytics = getAnalytics(app);
