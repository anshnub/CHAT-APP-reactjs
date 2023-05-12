import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAerHt_YCpoD_P7viV8AcflE59yXg7xTSU",
    authDomain: "chat-web-app-2fda5.firebaseapp.com",
    databaseURL: "https://chat-web-app-2fda5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-web-app-2fda5",
    storageBucket: "chat-web-app-2fda5.appspot.com",
    messagingSenderId: "1048213433106",
    appId: "1:1048213433106:web:10a699027144277c3721cb"
  }

 const app = firebase.initializeApp(config)
 export const auth =app.auth();
 export const database=app.database();