import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { settings } from 'cluster';


const config = {
  apiKey: "AIzaSyBKcdueO-10WoNHq8xxxby ptCt_x75r2Cs",
  authDomain: "yazilimprojemq.firebaseapp.com",
  databaseURL: "https://yazilimprojemq.firebaseio.com",
  projectId: "yazilimprojemq",
  storageBucket: "",
  messagingSenderId: "16019695578",
  appId: "1:16019695578:web:1a406edff91e29c161c2e3"
};

firebase.initializeApp(config);

firebase.firestore().settings({timestampsInSnapshots:true})
//firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;