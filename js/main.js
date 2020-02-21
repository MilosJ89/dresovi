let majice = [majica1, majica2, majica3];
let sorcevi = [sorc1, sorc2];
let stucne = [stucne1, stucne2, stucne3];

function createContent () {
    let content = `<div id='content'></div>`;
    document.getElementById('body').innerHTML += content; 

        let paintModel = `<div id='paintModel'></div>`;
        document.getElementById('content').innerHTML = paintModel;

            let model = `<div id='model'></div>`;
            document.getElementById('paintModel').innerHTML = model;

                let modelMajica = `<div id='modelMajica'></div>`;
                document.getElementById('model').innerHTML = modelMajica;

                let modelSorc = `<div id='modelSorc'></div>`;
                document.getElementById('model').innerHTML += modelSorc;

                let modelStucne = `<div id='modelStucne'></div>`;
                document.getElementById('model').innerHTML += modelStucne;

            let color = `<div id='color'></div>`;
            document.getElementById('paintModel').innerHTML += color;

        let chooseModel = `<div id='chooseModel'></div>`;
        document.getElementById('content').innerHTML += chooseModel;

            let title = `<div id='title'></div>`;
            document.getElementById('chooseModel').innerHTML = title;

                let paragraph = `<p>Modeli</p>`;
                document.getElementById('title').innerHTML = paragraph;

                let page = `<div id='page'></div>`;
                document.getElementById('title').innerHTML += page; 
                    
                    let majice = `<button onclick='createModels(majice, "modelMajica")'>Majice</button>`;
                    document.getElementById('page').innerHTML += majice;

                    let sorcevi = `<button onclick='createModels(sorcevi, "modelSorc")'>Sorcevi</button>`;
                    document.getElementById('page').innerHTML += sorcevi;

                    let stucne = `<button onclick='createModels(stucne, "modelStucne")'>Stucne</button>`;
                    document.getElementById('page').innerHTML += stucne;

            let models = `<div id='models'></div>`;
            document.getElementById('chooseModel').innerHTML += models;

            let description =`<div id='description'></div>`;
            document.getElementById('chooseModel').innerHTML += description;
}

createContent();

/** Create shirt model at left page */
function createModel () {
    document.getElementById('modelMajica').innerHTML = majica1;
    document.getElementById('modelSorc').innerHTML = sorc1;
    document.getElementById('modelStucne').innerHTML = stucne1;
}

createModel();

/**Create colors */
function createColors () {
    let colorDres = `<div id='colorDres' class='colors'></div>`;
    document.getElementById('color').innerHTML = colorDres;

        let inputColorDres = `<input id='inputColorDres' class='inputColors' type='color' value='#ff0000'>`;
        document.getElementById('colorDres').innerHTML = inputColorDres;

        let spanColorDres = `<span class='arrowDown'></span>`;
        document.getElementById('colorDres').innerHTML += spanColorDres;
        
        let textDres = `<p class='text'>Boja dresa<p/>`;
        document.getElementById('colorDres').innerHTML += textDres;

    let colorRukav = `<div id='colorRukav' class='colors'></div>`;
    document.getElementById('color').innerHTML += colorRukav;

        let inputColorRukav = `<input id='inputColorRukav' class='inputColors' type='color' value='#0000ff'>`;
        document.getElementById('colorRukav').innerHTML = inputColorRukav;

        let spanColorRukav = `<span class='arrowDown'></span>`;
        document.getElementById('colorRukav').innerHTML += spanColorRukav;
        
        let textRukav = `<p class='text'>Boja rukava<p/>`;
        document.getElementById('colorRukav').innerHTML += textRukav;

    let colorSorc = `<div id='colorSorc' class='colors'></div>`;
    document.getElementById('color').innerHTML += colorSorc;

        let inputColorSorc = `<input id='inputColorSorc' class='inputColors' type='color' value='#ffff00'>`;
        document.getElementById('colorSorc').innerHTML = inputColorSorc;

        let spanColorSorc = `<span class='arrowDown'></span>`;
        document.getElementById('colorSorc').innerHTML += spanColorSorc;
        
        let textSorc = `<p class='text'>Boja sorca<p/>`;
        document.getElementById('colorSorc').innerHTML += textSorc;

    let colorStucne = `<div id='colorStucne' class='colors'></div>`;
    document.getElementById('color').innerHTML += colorStucne;

        let inputColorStucne = `<input id='inputColorStucne' class='inputColors' type='color' value='#33cc33'>`;
        document.getElementById('colorStucne').innerHTML = inputColorStucne;

        let spanColorStucne = `<span class='arrowDown'></span>`;
        document.getElementById('colorStucne').innerHTML += spanColorStucne;
        
        let textStucne = `<p class='text'>Boja stucne<p/>`;
        document.getElementById('colorStucne').innerHTML += textStucne;
}

createColors();

/** Create majice */
function createModels(modeli, id) {
    document.getElementById('models').innerHTML = '';
    let promiseModel = new Promise((resolve, reject) => {
        for(let model of modeli) {
            document.getElementById('models').innerHTML += model;
        };
        return resolve();
    });

    promiseModel.then(chooseModel(id));
}

function chooseModel(id) {
    for(let model of document.getElementById('models').children) {
        model.addEventListener('click', () => {
            document.getElementById(id).innerHTML = model.outerHTML;
        })
    }
}

/** Color majica */
document.getElementById('inputColorDres').addEventListener('input', () => {
    let index = 0;
    while(index++ <= majice.length) {
        if(document.getElementById(`majica${index}`).parentNode.id === `modelMajica`) {
            let color = document.getElementById('inputColorDres').value; 
            document.getElementById(`majica${index}Napred`).setAttribute('fill', color);
            document.getElementById(`majica${index}Ledja`).setAttribute('fill', color);
        }
    }
});


/** Color sorc */
document.getElementById('inputColorSorc').addEventListener('input', () => {
    let index = 0;
    while(index++ <= sorcevi.length) {
        if(document.getElementById(`sorc${index}`).parentNode.id === `modelSorc`) {
            let color = document.getElementById('inputColorSorc').value; 
            document.getElementById(`sorc${index}Boja`).setAttribute('fill', color);
        }
    }
});

/** Color stucne */
document.getElementById('inputColorStucne').addEventListener('input', () => {
    let index = 0;
    while(index++ <= stucne.length) {
        if(document.getElementById(`stucne${index}`).parentNode.id === `modelStucne`) {
            let color = document.getElementById('inputColorStucne').value; 
            document.getElementById(`stucna${index}Leva`).setAttribute('fill', color);
            document.getElementById(`stucna${index}Desna`).setAttribute('fill', color);
        }
    }
});

/** Create models majice when open page */
createModels(majice, 'modelMajica');

/** Object for majice */
const namesMajice = {
    majica1: 'atletiko_x5F_2',
    majica2: 'atletiko_x5F_3',
    majica3: 'ranglan'
}

function name() {
    for(let name in namesMajice) {
        let nameParagrpah = `<p>${namesMajice[name]}</p>`;
        document.getElementById('description').innerHTML += nameParagrpah;
    }
}

name();