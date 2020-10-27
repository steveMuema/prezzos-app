/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
// import * as loginReducer from './loginReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import * as hosReducer from './hosReducer';
export default Object.assign(
  // loginReducer,
  hosReducer,
  loadingReducer,
  {
    firebase: firebaseReducer,
  },
  {
    firestore: firestoreReducer,
  },
);
