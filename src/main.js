import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration paste here


import './assets/tailwind.css'

initializeApp(firebaseConfig);
const app = createApp(App);

app.use(router);

app.mount('#app');
