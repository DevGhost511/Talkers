import authReducer from './authReducer';
import projectReducer from './projectReducer';
import slotReducer from './slotReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    slot:slotReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer