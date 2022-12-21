import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration paste here
const firebaseConfig = {
    apiKey: "AIzaSyAtOeCVX8c65V3ffNixQGRWPgMPZy9yJDM",
    authDomain: "dashboardapp-eeacf.firebaseapp.com",
    projectId: "dashboardapp-eeacf",
    storageBucket: "dashboardapp-eeacf.appspot.com",
    messagingSenderId: "597057190841",
    appId: "1:597057190841:web:a410f48ad089fdede3d468"
  };

import './assets/tailwind.css'

initializeApp(firebaseConfig);
const db = getFirestore();
const app = createApp(App);

app.use(router);

app.mount('#app');

export {
  db
}