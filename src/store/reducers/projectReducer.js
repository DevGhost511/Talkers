const initState = {
  projects:[
    {id:'1',baslik:'React yazlım dünyasına hoşgeldiniz!'},
    {id:'2',baslik:'Redux yazlım dünyasına hoşgeldiniz!'},
    {id:'3',baslik:'Firebase yazlım dünyasına hoşgeldiniz!'},
    {id:'4',baslik:'Hook yazlım dünyasına hoşgeldiniz!'}
  ]

}

const projectReducer = (state=initState, action)=>{
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log("proje tamam",action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log("hata oluştu",action.err);
      return state;
    default:
      return state;
  }

}

export default projectReducer