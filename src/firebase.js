import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig); //This creates and initializes an instance of our Firebase application. We pass in our firebaseConfig as an argument. That way, Firebase knows exactly which Firebase project should be accessed.
firebase.firestore();

export default firebase;

//React Redux Firebase offers a higher-order component (HOC) so our React application has access to Firebase. It works somewhat similarly to React Redux, which also offers a HOC with the connect function. We'll go over the similarities more as we add React Redux Firebase bindings to our application. If we were just using Firebase as our database, we wouldn't need to add any other bindings.

// Because we are using Firestore as our database, though, we are also adding Redux Firestore to provide extra functionality. This library provides a firestoreReducer (while the Firebase library provides a firebaseReducer). All of our communication with Firestore will go through our firestoreReducer - this means we don't need to create additional reducers, use async actions, or use middleware like Redux-Thunk. (We haven't learned about async actions and middleware yet, but we will in future lessons.)
