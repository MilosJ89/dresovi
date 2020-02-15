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
    document.getElementById('model').innerHTML = model1;
    document.getElementById('model1').setAttribute('class', 'modelSvg');
}

createShirt();

//**Create colors */
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

    let colorStrafta = `<div id='colorStrafta' class='colors'></div>`;
    document.getElementById('color').innerHTML += colorStrafta;

        let inputColorStrafta = `<input id='inputColorStrafta' class='inputColors' type='color' value='#00ff00'>`;
        document.getElementById('colorStrafta').innerHTML = inputColorStrafta;

        let spanColorStrafta = `<span class='arrowDown'></span>`;
        document.getElementById('colorStrafta').innerHTML += spanColorStrafta;
        
        let textStrafta = `<p class='text'>Boja strafte<p/>`;
        document.getElementById('colorStrafta').innerHTML += textStrafta;

    let colorSorc = `<div id='colorSorc' class='colors'></div>`;
    document.getElementById('color').innerHTML += colorSorc;

        let inputColorSorc = `<input id='inputColorSorc' class='inputColors' type='color' value='#ffff00'>`;
        document.getElementById('colorSorc').innerHTML = inputColorSorc;

        let spanColorSorc = `<span class='arrowDown'></span>`;
        document.getElementById('colorSorc').innerHTML += spanColorSorc;
        
        let textSorc = `<p class='text'>Boja sorca<p/>`;
        document.getElementById('colorSorc').innerHTML += textSorc;
}

createColors();

/** Create models shirts at right page */
function createModels () {
    for (let model of modeli) {
        document.getElementById('models').innerHTML += model;    
    }
}

createModels();

/** Choose model TODO */
function chooseModel1() {
    document.getElementById('model').innerHTML = model1;
    document.getElementById('model1').setAttribute('class', 'modelSvg');
};

function chooseModel2() {
    document.getElementById('model').innerHTML = model2;
    document.getElementById('model2').setAttribute('class', 'modelSvg');
};

function chooseModel3() {
    document.getElementById('model').innerHTML = model3;
    document.getElementById('model3').setAttribute('class', 'modelSvg');
};

function chooseModel4() {
    document.getElementById('model').innerHTML = model4;
    document.getElementById('model4').setAttribute('class', 'modelSvg');
};

function chooseModel5() {
    document.getElementById('model').innerHTML = model5;
    document.getElementById('model5').setAttribute('class', 'modelSvg');
};


/** Choose color dres */
document.getElementById('inputColorDres').addEventListener('input', () => {
    for(let i = 1; i < 6; i++) {
        if(document.getElementById('model').firstChild.id === `model${i}`) {
            let color = document.getElementById('inputColorDres').value;
            document.getElementById(`majicaModel${i}`).setAttribute('fill', color);
        }
    }
});

/** Choose color rukav */
document.getElementById('inputColorRukav').addEventListener('input', () => {
    for(let i = 1; i < 6; i++) {
        if(document.getElementById('model').firstChild.id === `model${i}`) {
            let color = document.getElementById('inputColorRukav').value;
            document.getElementById(`rukav1Model${i}`).setAttribute('fill', color);
            document.getElementById(`rukav2Model${i}`).setAttribute('fill', color);
        }
    }
});

/** Choose color strafta */
document.getElementById('inputColorStrafta').addEventListener('input', () => {
    for(let i = 1; i < 6; i++) {
        if(document.getElementById('model').firstChild.id === `model${i}`) {
            let color = document.getElementById('inputColorStrafta').value;
            document.getElementById(`straftaModel${i}`).setAttribute('fill', color);
        }
    }
});
