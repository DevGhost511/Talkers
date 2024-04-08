v3.*.* reducer.js

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
import reducer from './reducer'

const initialState = {}

export default () => {
  return createStore(
    reducer,
    initialState,
    // applyMiddleware(...middleware) // to add other middleware
  )
}
App.js

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import createReduxStore from './createReduxStore'

const fbConfig = {} // object containing Firebase config
const rrfConfig = { userProfile: 'users' } // react-redux-firebase config

// Initialize firebase instance
firebase.initializeApp(fbConfig)

const store = createReduxStore()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
}

// Setup react-redux so that connect HOC can be used
const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Todos />
    </ReactReduxFirebaseProvider>
  </Provider>
);