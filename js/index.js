"use strict";
const render = (root)=>{
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(SearchSede(_=>render(root)));

    root.append(wrapper);
    //return root;
};

const state = [{
    coders : null,
    selectedCoder : null
}];
$( _ => {
    getJSON('coders.json',(error, json)=>{
        if (error){return alert(error.message);}
        state.coders = json;
        const root = $('.root');
        render(root);
    });
});