v2.*.*

Pass Firebase Instance in place of
firebaseReducer is now available to use in place of firebaseStateReducer (which is still available)
reducer.js

import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
// import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore

// Add firebase to reducers
export default combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
})
createReduxStore.js

import { createStore } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
// import { reduxFirestore } from 'redux-firestore' // <- needed if using firestore
import reducer from './reducer'

const initialState = {}

const fbConfig = {} // object containing Firebase config
const rrfConfig = { userProfile: 'users' } // react-redux-firebase config

// Initialize firebase instance
firebase.initializeApp(fbConfig)

export default () => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      reactReduxFirebase(firebase, rrfConfig), // pass in firebase instance instead of config
      // reduxFirestore(firebase) // <- needed if using firestore
      //  applyMiddleware(...middleware) // to add other middleware
    )
  )
}
App.js

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import createReduxStore from './createReduxStore'

// Create store with reducers and initial state
const initialState = {}
const store = createReduxStore(rootReducer, initialState)

// Setup react-redux so that connect HOC can be used
const App = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);