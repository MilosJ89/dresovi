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

                    let majice = `<button onclick='createMajice()'>Majice</button>`;
                    document.getElementById('page').innerHTML += majice;

                    let sorcevi = `<button onclick='createSorcevi()'>Sorcevi</button>`;
                    document.getElementById('page').innerHTML += sorcevi;

                    let stucne = `<button onclick='createStucne()'>Stucne</button>`;
                    document.getElementById('page').innerHTML += stucne;

            let models = `<div id='models'></div>`;
            document.getElementById('chooseModel').innerHTML += models;
}

createContent();

/** Create shirt model at left page */
function createShirt () {
    document.getElementById('modelMajica').innerHTML = majica1;
    document.getElementById('modelSorc').innerHTML = sorc1;
    document.getElementById('modelStucne').innerHTML = stucne1;
}

createShirt();

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
function createMajice() {
    document.getElementById('models').innerHTML = '';
    for(let majica of majice) {
        document.getElementById('models').innerHTML += majica;
    }
/** TODO */
    document.getElementById('majica1').addEventListener('click', ()=> {
        document.getElementById('modelMajica').innerHTML = majica1;
    });

    document.getElementById('majica2').addEventListener('click', ()=> {
        document.getElementById('modelMajica').innerHTML = majica2;
    });

    document.getElementById('majica3').addEventListener('click', ()=> {
        document.getElementById('modelMajica').innerHTML = majica3;
    });
}

/** Create sorcevi */
function createSorcevi() {
    document.getElementById('models').innerHTML = '';
    for(let sorc of sorcevi) {
        document.getElementById('models').innerHTML += sorc;
    }
/** TODO */
    document.getElementById('sorc1').addEventListener('click', ()=> {
        document.getElementById('modelSorc').innerHTML = sorc1;
    });

    document.getElementById('sorc2').addEventListener('click', ()=> {
        document.getElementById('modelSorc').innerHTML = sorc2;
    })
}

/** Create stucne */
function createStucne() {
    document.getElementById('models').innerHTML = '';
    for(let stucna of stucne) {
        document.getElementById('models').innerHTML += stucna;
    }
/** TODO */
    document.getElementById('stucne1').addEventListener('click', ()=> {
        document.getElementById('modelStucne').innerHTML = stucne1;
    });

    document.getElementById('stucne2').addEventListener('click', ()=> {
        document.getElementById('modelStucne').innerHTML = stucne2;
    });

    document.getElementById('stucne3').addEventListener('click', ()=> {
        document.getElementById('modelStucne').innerHTML = stucne3;
    });
}

/** Color majica */
document.getElementById('inputColorDres').addEventListener('input', () => {
    for(let i = 1; i < 4; i++) {
        if(document.getElementById(`majica${i}`).parentNode.id === `modelMajica`) {
            let color = document.getElementById('inputColorDres').value; 
            document.getElementById(`majica${i}Napred`).setAttribute('fill', color);
            document.getElementById(`majica${i}Ledja`).setAttribute('fill', color);
        }
    }
});


/** Color sorc */
document.getElementById('inputColorSorc').addEventListener('input', () => {
    for(let i = 1; i < 3; i++) {
        if(document.getElementById(`sorc${i}`).parentNode.id === `modelSorc`) {
            let color = document.getElementById('inputColorSorc').value; 
            document.getElementById(`sorc${i}Boja`).setAttribute('fill', color);
        }
    }
});

/** Color stucne */
document.getElementById('inputColorStucne').addEventListener('input', () => {
    for(let i = 1; i < 4; i++) {
        if(document.getElementById(`stucne${i}`).parentNode.id === `modelStucne`) {
            let color = document.getElementById('inputColorStucne').value; 
            document.getElementById(`stucna${i}Leva`).setAttribute('fill', color);
            document.getElementById(`stucna${i}Desna`).setAttribute('fill', color);
        }
    }
});
