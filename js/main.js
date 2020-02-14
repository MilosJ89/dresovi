let dresovi = [majica1, majica2, majica3, majica4, majica5];
let modeli = [model1, model2, model3, model4, model5];

function createContent () {
    let content = `<div id='content'></div>`;
    document.getElementById('body').innerHTML += content; 

        let paintModel = `<div id='paintModel'></div>`;
        document.getElementById('content').innerHTML = paintModel;

            let model = `<div id='model'></div>`;
            document.getElementById('paintModel').innerHTML = model;

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

                    let majice = `<button>Majice</button>`;
                    document.getElementById('page').innerHTML += majice;

                    let trenerke = `<button>Trenerke</button>`;
                    document.getElementById('page').innerHTML += trenerke;

            let models = `<div id='models'></div>`;
            document.getElementById('chooseModel').innerHTML += models;
}

createContent();


/** Create shirt model at left page */
function createShirt () {
    document.getElementById('model').innerHTML = majica5;
    document.getElementById('majica5').setAttribute('class', 'modelSvg');
}

createShirt();

//**Create colors */
function createColors () {
    let colorDres = `<div id='colorDres' class='colors'></div>`;
    document.getElementById('color').innerHTML = colorDres;

        let inputColorDres = `<input class='inputColors' type='color'>`;
        document.getElementById('colorDres').innerHTML = inputColorDres;

        let spanColorDres = `<span class='arrowDown'></span>`;
        document.getElementById('colorDres').innerHTML += spanColorDres;
        
        let textDres = `<p class='text'>Boja dresa<p/>`;
        document.getElementById('colorDres').innerHTML += textDres;

    let colorRukav = `<div id='colorRukav' class='colors'></div>`;
    document.getElementById('color').innerHTML += colorRukav;

        let inputColorRukav = `<input class='inputColors' type='color'>`;
        document.getElementById('colorRukav').innerHTML = inputColorRukav;

        let spanColorRukav = `<span class='arrowDown'></span>`;
        document.getElementById('colorRukav').innerHTML += spanColorRukav;
        
        let textRukav = `<p class='text'>Boja rukava<p/>`;
        document.getElementById('colorRukav').innerHTML += textRukav;

    let colorStrafta = `<div id='colorStrafta' class='colors'></div>`;
    document.getElementById('color').innerHTML += colorStrafta;

        let inputColorStrafta = `<input class='inputColors' type='color'>`;
        document.getElementById('colorStrafta').innerHTML = inputColorStrafta;

        let spanColorStrafta = `<span class='arrowDown'></span>`;
        document.getElementById('colorStrafta').innerHTML += spanColorStrafta;
        
        let textStrafta = `<p class='text'>Boja strafte<p/>`;
        document.getElementById('colorStrafta').innerHTML += textStrafta;

    let colorSorc = `<div id='colorSorc' class='colors'></div>`;
    document.getElementById('color').innerHTML += colorSorc;

        let inputColorSorc = `<input class='inputColors' type='color'>`;
        document.getElementById('colorSorc').innerHTML = inputColorSorc;

        let spanColorSorc = `<span class='arrowDown'></span>`;
        document.getElementById('colorSorc').innerHTML += spanColorSorc;
        
        let textSorc = `<p class='text'>Boja sorca<p/>`;
        document.getElementById('colorSorc').innerHTML += textSorc;
}

createColors();

/** Create models shirts at right page */
function createModels () {
    for (let dres of dresovi) {
        document.getElementById('models').innerHTML += dres;    
    }
}

createModels();

/** Choose model */
function chooseModel() {
    for(let dres in dresovi) {
        dresovi[dres].addEventListener('click', function() {
            for (let model in modeli) {
                document.getElementById('model').innerHTML = modeli[model];
            } 
        })
    }
}