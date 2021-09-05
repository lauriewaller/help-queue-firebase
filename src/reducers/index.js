import formVisibleReducer from "./form-visible-reducer";
import ticketListReducer from "./ticket-list-reducer";
import { combineReducers } from "redux"; //The final import statement is the combineReducers() function from Redux. This is not part of React Redux - this is core Redux functionality. Whenever we create a reducer that combines other reducers, we need to import this function.
import { firestoreReducer } from "redux-firestore"; //This will take care of our communication with Firestore:

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer,
  firestore: firestoreReducer,
});

// Remember that this root reducer gets imported into src/index.js and is used when we first create and initialize our store. This means that the store we pass down into our application via provider components will now be able to use Firestore.

//combineReducers() takes an object as an argument. That object contains key-value pairs. The key represents the state slice while the value represents the reducer that handles actions related to that state slice.

//And that's a root reducer. It just combines other reducers into a single file.

export default rootReducer;
