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
  let message = {}, refresh;
  if(coder.name == nameCoder.val()){
    message={msj:"Excelente Acertaste",point:point+5};
    setTimeout(update,2000);
    nameCoder.val("");
    message.msj="";
  }else {
    message={msj:"Sigue Intentando",point:point};
    nameCoder.val("");
    intentos++;
    if(intentos==5){
      message={msj:"",point:point-1};
      setTimeout(update,2000);
      intentos=0;
    }
    console.log(intentos);
  }
  point=message.point;
  return message;
}
