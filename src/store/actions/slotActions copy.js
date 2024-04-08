export const createSlot=(slot)=>{

  return(dispatch, getState, {getFirebase, getFirestore})=>{
    //async call
    const firestore=getFirestore();

    //const slots=getState().firebase.slots;
    const teacherId=getState().firebase.auth.uid;



    // if (slot.isToggleOn){
    
    // firestore.collection('slots').doc("DC").delete()
    // .then(function() {
    //     console.log("Document successfully deleted!");
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });
    
    // } else {
    firestore.collection('slots').add({
        //...slot,
        //isToggleOn:slot.isToggleOn,
        //uid:slot.uid,
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
  // }
    dispatch({type:'CREATE_SLOT',slot:slot}) // dispatch({type:'CREATE_SLOT',slot})
  }
}


export const updateSlot=(slot)=>{
  return(dispatch, getState, {getFirebase, getFirestore})=>{
    const firestore=getFirestore();
    //const slotUid=getState().firebase.slot.uid;
    const id=getState().firebase.auth.uid;
    // firestore.collection('slots').where(("sdate", "==", slot.sdate).get().then(querySnapshot => {
    //   const data = querySnapshot.docs.map(doc => doc.data());}
    // data.where("stime", "==", slot.stime)();

   firestore.collection('slots')
   .where("sdate", "==", slot.sdate)
   .where("stime", "==", slot.stime)
   .where("teacherId", "==",id).get()
   .then(querySnapshot => {
    querySnapshot.forEach(function (doc) {
      console.log(doc.id, ' => ', doc.data());
  });
    //  const data = querySnapshot.docs.map(doc => doc.data());
    //  console.log("kapandı",data);
//.where("teacherId", "==",id)
  //   .update({
  //     status:slot.status
  //   }).then(()=>{
  //     dispatch({type:'UPDATE_SLOT',slot})
  //   }).catch((err)=>{
  //     dispatch({type:'UPDATE_SLOT_ERROR',err})
  //   })
  // // }
  //   dispatch({type:'UPDATE_SLOT',slot:slot})

  });
}
}