import { getFirestore } from "redux-firestore";

export const signIn=(kimlik)=>{
  return (dispatch, getState, {getFirebase})=>{
    const firebase=getFirebase();

    firebase.auth().signInWithEmailAndPassword(
    kimlik.email,
    kimlik.password
    ).then(()=>{
      dispatch({type:'LOGIN_SUCCESS'});
    }).catch((err)=>{
      dispatch({type:'LOGIN_ERROR',err});
    })
  }
}

export const signOut=()=>{
  return (dispatch, getState, {getFirebase})=>{
      const firebase = getFirebase();

      firebase.auth().signOut().then(()=>{
        dispatch({type:'SIGNOUT_SUCCESS'});
    })
  }
}

export const signUp=(yeni)=>{
  return (dispatch, getState, {getFirebase,getfirestore})=>{
      const firebase = getFirebase();
      const firestore = getFirestore();

      firebase.auth().createUserWithEmailAndPassword(
        yeni.email,
        yeni.password

      ).then((cevap)=>{
        return firestore.collection('users').doc(cevap.user.uid).set({
          isim:yeni.isim,
          soyisim:yeni.soyisim,
          initials:yeni.isim[0]+yeni.soyisim[0],
          male:yeni.male,
          female:yeni.female,
          birthday:yeni.birthday,
          username:yeni.username,
          mobile:yeni.mobile,
          skype:yeni.skype,
          introduction:yeni.introduction,
          teacher:yeni.teacher
        })
      }).then(()=>{
        dispatch({type:'SIGNUP_SUCCESS'})
    
      }).catch((err)=>{
        dispatch({type:'SIGNUP_ERROR',err})
      })
  }
}

export const signUpStudent=(yeni)=>{
  return (dispatch, getState, {getFirebase,getfirestore})=>{
      const firebase = getFirebase();
      const firestore = getFirestore();

      firebase.auth().createUserWithEmailAndPassword(
        yeni.email,
        yeni.password

      ).then((cevap)=>{
        return firestore.collection('users').doc(cevap.user.uid).set({
          isim:yeni.isim,
          soyisim:yeni.soyisim,
          initials:yeni.isim[0]+yeni.soyisim[0],
          male:yeni.male,
          female:yeni.female,
          birthday:yeni.birthday,
          username:yeni.username,
          mobile:yeni.mobile,
          skype:yeni.skype,
          introduction:yeni.introduction,
          teacher:yeni.teacher
        })
      }).then(()=>{
        dispatch({type:'SIGNUP_SUCCESS'})
    
      }).catch((err)=>{
        dispatch({type:'SIGNUP_ERROR',err})
      })
  }
}