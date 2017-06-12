const filterBySede = (coder,sede)=>{
  var codersBySede=coder.filter((e)=>{
     return e.sede == sede;
  });
  const coderSede=codersBySede[Math.floor(Math.random() * codersBySede.length) + 1];
  state.selectedCoder = coderSede;
  return coderSede;
}

const checkName = (coder,nameCoder) =>{
  console.log(coder.name);
  let message = "";
  return message=(coder.name == nameCoder)?"Excelente Acertaste":"Sigue Intentando";
}
