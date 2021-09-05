import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux"; //The entry point file is where Webpack accesses the top level component in our application. Since we want the store to be available everywhere we need it, it needs to be in index.js.
//import reducer from './reducers/ticket-list-reducer';
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./firebase";

const store = createStore(rootReducer); //instantiate the store //Remember that this root reducer gets imported into src/index.js and is used when we first create and initialize our store. This means that the store we pass down into our application via provider components will now be able to use Firestore.
store.subscribe(() => console.log(store.getState())); //Remember the subscribe() method that Redux provides? Generally, we won't use Redux's subscribe() or getState() in our "production" code, but it's excellent for testing. This is a great way to keep an eye on the current state of the store.

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
}; //userProfile: "users" simply states that any data on users will be stored in a collection called "users".

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

//Both of these provide different context to the rest of our application. Redux's Provider component provides our Redux store's context while ReactReduxFirebaseProvider provides Firebase and Firestore context. With both, we'll need to use higher order components in order to actually provide functionality from that context to components where it's needed.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
