const filterBySede = (coder,sede)=>{
  var codersBySede=coder.filter((e)=>{
     return e.sede == sede;
  });
  const coderSede=codersBySede[Math.floor(Math.random() * codersBySede.length) + 1];
  state.selectedCoder = coderSede;
  return coderSede;
}

var  point=0,intentos=0;
const checkName = (coder,nameCoder,update) =>{
  let message = {};
  if(coder.name.toLowerCase() == nameCoder.val().toLowerCase()){
    setTimeout(update,2000);
    message={msj:"Excelente Acertaste",point:point+5};
    nameCoder.val("");
    //setTimeout(_=>{message.msj="";},2000);

  }else {
    message={msj:"Sigue Intentando",point:point};
    nameCoder.val("");
    intentos++;
    if(intentos==5){
      message={msj:"",point:point-1};
      setTimeout(update,2000);
      intentos=0;
    }
  }
  point=message.point;
  return message;
}
