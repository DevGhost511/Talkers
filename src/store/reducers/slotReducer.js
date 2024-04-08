const initState = {
  slotError:null
}
const slotReducer = (state=initState, action)=>{
  switch(action.type){
    case 'CREATE_SLOT':
      console.log("slot tamam",action.slot);
      return state;
    case 'CREATE_SLOT_ERROR':
      console.log("oluşturmada hata oluştu",action.err);
      return state;
    case 'UPDATE_SLOT':
      console.log("güncelleme yapıldı",action.slot);
      return state;
    case 'UPDATE_SLOT_ERROR':
      console.log("güncellemede hata oluştu",action.err);
    case 'DELETE_SLOT':
      console.log("Silme işlemi yapıldı",action.slot);
      return state;
    case 'DELETE_SLOT_ERROR':
      console.log("Silme isleminde hata oluştu",action.err);
      return state;
    default:
      return state;
  }

}

export default slotReducer