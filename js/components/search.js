/*Created by @miriam on 9/06/2017.
 */
"use strict";
const coder

const SearchSede = (update)=>{
  const searchContainer = $('<section class="search"></section>');
  const span = $('<span>Elige tu sede:</span>');
  const select = $('<select id="sede"></select>');
  const option0 = $('<option value="0">Selecciona una opción</option>');
  const option1 = $('<option value="1">Lima</option>');
  const option2 = $('<option value="2">Mexico</option>');
  const divPoints = $('<div></div>');
  const  points = $(`<span>Puntos: ${points} </span>`);

  searchContainer.append(span);
  searchContainer.append(select);
  searchContainer.append(points);

  $('#sede').selected()



  return searchContainer;
};