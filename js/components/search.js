/*Created by @miriam on 9/06/2017.
 */
"use strict";
const coderImage = (coder,update)=>{
  const containerImg = $('<div class="coder-img"></div>');
  const coderImg = $(`<img src="images/${coder.sede}/${coder.image}" alt="coder laboratoria">`);

  containerImg.append(coderImg);
  return containerImg;
}

const reRender = (coderContainer,sede, update)=>{
  coderContainer.empty();
  const coderBySede = filterBySede(state.coder,sede);
  coderContainer.append(coderImage(coderBySede,update));
}

const Play = (update)=>{
  const playContainer = $('<section class="play-container"></section>');
  const selectContainer = $('<div class="select-container"></div>');
  const container = $('<div class="container"></div>');
  const span = $('<span>Elige tu sede:</span>');
  const select = $('<select id="sede"></select>');
  const option0 = $('<option value="0" hidden>Selecciona una opción</option>');
  const option1 = $('<option value="1">Lima</option>');
  const option2 = $('<option value="2">Mexico</option>');
  const divPoints = $('<div></div>');
  //const points = $(`<span>Puntos: ${points} </span>`);
  const coderContainer = $('<div class="coder-container"></div>');
  const coderSearch = $('<div class="coder-search"></div>');
  const label = $('<label>Ingresa su nombre:</label>');
  const input = $('<input type="text" placeholder="Nombre">');
  const button = $('<button>COMPROBAR</button>');

  selectContainer.append(span);
  select.append(option0);
  select.append(option1);
  select.append(option2);
  selectContainer.append(select);
  selectContainer.append(divPoints);
  playContainer.append(selectContainer);
  container.append(coderContainer);
  coderSearch.append(label);
  coderSearch.append(input);
  coderSearch.append(button);
  container.append(coderSearch);
  playContainer.append(container);


  select.on('change', (e) =>{
    e.preventDefault();
    let sede = $('select option:selected').text();
    reRender(coderContainer,sede,update);
  });
  //reRender(coderContainer,"",update);

  return playContainer;
};
