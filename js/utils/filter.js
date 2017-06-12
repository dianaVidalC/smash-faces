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
  }else {
    intentos++;
    message={msj:`Sigue Intentando, te quedan ${5-intentos} intentos`,point:point};
    nameCoder.val("");
    console.log(intentos);

    if(intentos==5){
      message={msj:"Consumiste tus 5 intentos :(",point:point-1};
      setTimeout(update,2000);
      intentos=0;
    }
  }
  point=message.point;
  return message;
}
