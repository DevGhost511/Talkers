export const createSlot=(slot)=>{

  return(dispatch, getState, {getFirebase, getFirestore})=>{
    //async call
    const firestore=getFirestore();
    const teacherId=getState().firebase.auth.uid;

    firestore.collection('slots').add({
        status:slot.status,
        sdate:slot.sdate,
        stime:slot.stime,
        teacherId:teacherId,
        stype:slot.stype,
        creationDate: new Date()
    }).then(()=>{
      dispatch({type:'CREATE_SLOT',slot})
    }).catch((err)=>{
      dispatch({type:'CREATE_SLOT_ERROR',err})
    })
    dispatch({type:'CREATE_SLOT',slot:slot}) 
  }
}


export const updateSlot=(slot)=>{
  return(dispatch, getState, {getFirebase, getFirestore})=>{
    const firestore=getFirestore();
    const id=getState().firebase.auth.uid;

   firestore.collection('slots')
   .where("sdate", "==", slot.sdate)
   .where("stime", "==", slot.stime)
   .where("teacherId", "==",id).get()
   .then(querySnapshot => {
    querySnapshot.forEach(function (doc) {
      firestore.collection('slots').doc(doc.id).delete().then(()=>{
            dispatch({type:'DELETE_SLOT',slot})
          }).catch((err)=>{
            dispatch({type:'DELETE_SLOT_ERROR',err})
          })
      console.log(doc.id)
    });
  });
}
}