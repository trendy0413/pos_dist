importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyCJAzRal28wMRPrFeBtbhU4pUjNxjhm6RI",
  authDomain: "testwebpush-56f6f.firebaseapp.com",
  databaseURL: "https://testwebpush-56f6f.firebaseio.com",
  projectId: "testwebpush-56f6f",
  storageBucket: "testwebpush-56f6f.appspot.com",
  messagingSenderId: "761532239539",
  appId: "1:761532239539:web:1ff5198ef15413807ceac6"
});
try {
const	messaging = firebase.messaging();
} catch(e) {
console.log("handled error",e)
}
