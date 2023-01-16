import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAwTNNbJ__V8e6rVuv9IkctI2Opryd95Co",
  authDomain: "fir-for-c75.firebaseapp.com",
  projectId: "fir-for-c75",
  storageBucket: "fir-for-c75.appspot.com",
  messagingSenderId: "59289055479",
  appId: "1:59289055479:web:83555356a7138a553aa3f2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
