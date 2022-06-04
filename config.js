import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAGT5D1zHgnzNBtggthX_NCCNWCdwWsqq8",
  authDomain: "e-ride-53b62.firebaseapp.com",
  projectId: "e-ride-53b62",
  storageBucket: "e-ride-53b62.appspot.com",
  messagingSenderId: "865697112214",
  appId: "1:865697112214:web:34c6ef7f5149f0ea2922b7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
