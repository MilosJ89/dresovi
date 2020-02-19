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

    // let colorStrafta = `<div id='colorStrafta' class='colors'></div>`;
    // document.getElementById('color').innerHTML += colorStrafta;

    //     let inputColorStrafta = `<input id='inputColorStrafta' class='inputColors' type='color' value='#00ff00'>`;
    //     document.getElementById('colorStrafta').innerHTML = inputColorStrafta;

    //     let spanColorStrafta = `<span class='arrowDown'></span>`;
    //     document.getElementById('colorStrafta').innerHTML += spanColorStrafta;
        
    //     let textStrafta = `<p class='text'>Boja strafte<p/>`;
    //     document.getElementById('colorStrafta').innerHTML += textStrafta;

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



/** Choose model */
        // document.getElementById('majica2').addEventListener('click', function() {document.getElementById('modelMajica').innerHTML = majica2});

// function chooseMajica() {
//     document.getElementById('modelMajica').innerHTML = majica2;
// }

/** Create models shirts at right page */
// function createModels () {
//     for (let model of modeli) {
//         document.getElementById('models').innerHTML += model;    
//     }
// }

// createModels();

/** Choose model TODO */
// function chooseModel1() {
//     document.getElementById('model').innerHTML = model1;
//     document.getElementById('model1').setAttribute('class', 'modelSvg');
// };

// function chooseModel2() {
//     document.getElementById('model').innerHTML = model2;
//     document.getElementById('model2').setAttribute('class', 'modelSvg');
// };

// function chooseModel3() {
//     document.getElementById('model').innerHTML = model3;
//     document.getElementById('model3').setAttribute('class', 'modelSvg');
// };

// function chooseModel4() {
//     document.getElementById('model').innerHTML = model4;
//     document.getElementById('model4').setAttribute('class', 'modelSvg');
// };

// function chooseModel5() {
//     document.getElementById('model').innerHTML = model5;
//     document.getElementById('model5').setAttribute('class', 'modelSvg');
// };


/** Choose color dres */
// document.getElementById('inputColorDres').addEventListener('input', () => {
//     for(let i = 1; i < 6; i++) {
//         if(document.getElementById('model').firstChild.id === `model${i}`) {
//             let color = document.getElementById('inputColorDres').value;
//             document.getElementById(`majicaModel${i}`).setAttribute('fill', color);
//         }
//     }
// });

document.getElementById('inputColorDres').addEventListener('input', () => {
    let color = document.getElementById('inputColorDres').value; 
    document.getElementById(`majicaX`).setAttribute('fill', color);
    
})

// /** Choose color rukav */
// document.getElementById('inputColorRukav').addEventListener('input', () => {
//     for(let i = 1; i < 6; i++) {
//         if(document.getElementById('model').firstChild.id === `model${i}`) {
//             let color = document.getElementById('inputColorRukav').value;
//             document.getElementById(`rukav1Model${i}`).setAttribute('fill', color);
//             document.getElementById(`rukav2Model${i}`).setAttribute('fill', color);
//         }
//     }
// });

// /** Choose color strafta */
// document.getElementById('inputColorStrafta').addEventListener('input', () => {
//     for(let i = 1; i < 6; i++) {
//         if(document.getElementById('model').firstChild.id === `model${i}`) {
//             let color = document.getElementById('inputColorStrafta').value;
//             document.getElementById(`straftaModel${i}`).setAttribute('fill', color);
//         }
//     }
// });

/** Page dresovi */
// function createDresovi () {
//     document.getElementById('models').innerHTML = '';
    
//     createShirt();
//     createModels();
//     createColors();

//     /** Choose color dres */
// document.getElementById('inputColorDres').addEventListener('input', () => {
//     for(let i = 1; i < 6; i++) {
//         if(document.getElementById('model').firstChild.id === `model${i}`) {
//             let color = document.getElementById('inputColorDres').value;
//             document.getElementById(`majicaModel${i}`).setAttribute('fill', color);
//         }
//     }
// });

// /** Choose color rukav */
// document.getElementById('inputColorRukav').addEventListener('input', () => {
//     for(let i = 1; i < 6; i++) {
//         if(document.getElementById('model').firstChild.id === `model${i}`) {
//             let color = document.getElementById('inputColorRukav').value;
//             document.getElementById(`rukav1Model${i}`).setAttribute('fill', color);
//             document.getElementById(`rukav2Model${i}`).setAttribute('fill', color);
//         }
//     }
// });

// /** Choose color strafta */
// document.getElementById('inputColorStrafta').addEventListener('input', () => {
//     for(let i = 1; i < 6; i++) {
//         if(document.getElementById('model').firstChild.id === `model${i}`) {
//             let color = document.getElementById('inputColorStrafta').value;
//             document.getElementById(`straftaModel${i}`).setAttribute('fill', color);
//         }
//     }
// });
// }

// /** Page trenerke */
// function createTrenerka () {
//     document.getElementById('model').innerHTML = '';
//     document.getElementById('color').innerHTML = '';
//     document.getElementById('models').innerHTML = '';

//     document.getElementById('model').innerHTML = trenerka;
//     document.getElementById('model').setAttribute('class', 'modelSvg');

//     document.getElementById('models').innerHTML = trenerka;
// /** Boja trenerke */
//     let bojaTrenerke = `<p class='bojaTrenerke'>Boja trenerke</p>`;
//     document.getElementById('color').innerHTML = bojaTrenerke;

//     let colorTrenerka = `<div id='selectTrenerka'></div>`
//     document.getElementById('color').innerHTML += colorTrenerka;

//     let kvadrat = `<span id='kvadrat'></span>`;
//     document.getElementById('selectTrenerka').innerHTML += kvadrat;

//     let colorParagraph = `<p id='colorParagraph'>Crvena</p>`;
//     document.getElementById('selectTrenerka').innerHTML += colorParagraph;

//     let strelica = `<span class='strelica'></span>`;
//     document.getElementById('selectTrenerka').innerHTML += strelica;

//         let dropDown = `<div id='dropDown'></div>`;
//         document.getElementById('selectTrenerka').innerHTML += dropDown;

//             let colorRed = `<div id='colorRed' onclick='colorRed()'>Crvena</div>`;
//             document.getElementById('dropDown').innerHTML = colorRed;

//                 let kvadratRed = `<span class='kvadratRed'></span>`;
//                 document.getElementById('colorRed').innerHTML += kvadratRed;

//             let colorYellow = `<div id='colorYellow' onclick='colorYellow()'>Zuta</div>`;
//             document.getElementById('dropDown').innerHTML += colorYellow;

//                 let kvadratYellow = `<span class='kvadratYellow'></span>`;
//                 document.getElementById('colorYellow').innerHTML += kvadratYellow;

//             let colorBlue = `<div id='colorBlue' onclick='colorBlue()'>Plava</div>`;
//             document.getElementById('dropDown').innerHTML += colorBlue;

//                 let kvadratBlue = `<span class='kvadratBlue'></span>`;
//                 document.getElementById('colorBlue').innerHTML += kvadratBlue;
// /** Color rukavi */    
// }

// /** Color trenerka */
// function colorRed () {
//     document.getElementById('trenerka').setAttribute('fill', 'red');
//     document.getElementById('colorParagraph').textContent = 'Crvena';
//     document.getElementById('kvadrat').style.background = 'red';
// }

// function colorYellow () {
//     document.getElementById('trenerka').setAttribute('fill', 'yellow');
//     document.getElementById('colorParagraph').textContent = 'Zuta';
//     document.getElementById('kvadrat').style.background = 'yellow';
// }

// function colorBlue () {
//     document.getElementById('trenerka').setAttribute('fill', 'blue');
//     document.getElementById('colorParagraph').textContent = 'Plava';
//     document.getElementById('kvadrat').style.background = 'blue';
// }

