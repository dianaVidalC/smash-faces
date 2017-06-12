"use strict";
const render = (root)=>{
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Play());

    root.append(wrapper);
};

const state = [{
    coder : null,
    selectedCoder : null,
    selectedSede : null
}];
$( _ => {
    getJSON('coders.json',(error, json)=>{
        if (error){return alert(error.message);}
        state.coder = json;
        const root = $('.root');
        render(root);
    });
});
