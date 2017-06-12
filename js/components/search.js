/*Created by @miriam on 9/06/2017*/
"use strict";
//Funcion que muestra la imagen de una coder de forma aleatoria
const coderImage = (coder)=>{
  const containerImg = $('<div class="coder-img"></div>');
  const coderImg = $(`<img src="images/${coder.sede}/${coder.image}" alt="coder laboratoria">`);

  containerImg.append(coderImg);
  return containerImg;
}

//Funcion que comprueba nombre de coder
const resultPlay = (checkName)=>{
  const text = $(`<p>${checkName}</p>`);
  return text;
}
//Funcion que obtiene los puntos ganados en el juego
const resultPoints = (checkPoint)=>{
  const points = $(`<span>Puntos: ${checkPoint} puntos</span>`);
  return points;
}

//Funcion que pinta (renderiza) foto de la coder
const reRender = (coderContainer,sede)=>{
  coderContainer.empty();
  const coderBySede = filterBySede(state.coder,sede);
  coderContainer.append(coderImage(coderBySede));
}
//Funcion que pinta (renderiza) texto y puntos segun la verificacion del nombre de coder
const renderText = (textResult, name, points, update)=>{
  textResult.empty();
  points.empty();
  const check = checkName(state.selectedCoder,name,update);
  textResult.append(resultPlay(check.msj));
  points.append(resultPoints(check.point));
}

const Play = _=>{
  const playContainer = $('<section class="play-container"></section>');
  const selectContainer = $('<div class="select-container"></div>');
  const container = $('<div class="container"></div>');
  const span = $('<span>Elige tu sede:</span>');
  const select = $('<select id="sede"></select>');
  const option0 = $('<option value="0" hidden>Selecciona una sede</option>');
  const option1 = $('<option value="1">Lima</option>');
  const option2 = $('<option value="2">Mexico</option>');
  const divPoints = $('<div></div>');
  const coderContainer = $('<div class="coder-container"></div>');
  const textImg = $('<span>Seleccionar sede para mostrar coder</span>');
  const coderSearch = $('<div class="coder-search"></div>');
  const label = $('<label>Ingresa su nombre:</label>');
  const input = $('<input type="text" placeholder="Nombre">');
  const button = $('<button>COMPROBAR</button>');
  const textResult = $('<div class="result-container"></div>');

  selectContainer.append(span);
  select.append(option0);
  select.append(option1);
  select.append(option2);
  selectContainer.append(select);
  selectContainer.append(divPoints);
  playContainer.append(selectContainer);
  coderContainer.append(textImg);
  container.append(coderContainer);
  coderSearch.append(label);
  coderSearch.append(input);
  coderSearch.append(button);
  coderSearch.append(textResult);
  container.append(coderSearch);
  playContainer.append(container);

  select.on('change', (e) =>{
    e.preventDefault();
    let sede = $('select option:selected').text();
    reRender(coderContainer,sede);
    state.selectedSede = sede;
  });
  button.on('click',(e)=>{
    e.preventDefault();
    if (state.selectedSede!=undefined) {
      renderText(textResult,input,divPoints,_=>{reRender(coderContainer,state.selectedSede);});
    }else {
      textResult.text("Debe seleccionar una sede");
      setTimeout(_=>{textResult.text("");},2000);
    }
  });

  return playContainer;
};
