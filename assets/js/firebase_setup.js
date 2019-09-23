var firebaseConfig = {
  apiKey: "AIzaSyDqTzoLNvMzWPD1jvf-qI9sC4z6ezOv4yk",
  authDomain: "stemlocalhackday.firebaseapp.com",
  databaseURL: "https://stemlocalhackday.firebaseio.com",
  projectId: "stemlocalhackday",
  storageBucket: "",
  messagingSenderId: "368199108033",
  appId: "1:368199108033:web:57fb11044df11be7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
