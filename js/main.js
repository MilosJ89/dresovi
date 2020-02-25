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

        let continueBtn = `<button class='contentBtn' id='continueBtn' onclick='nextStep()'>Continue</button>`;
        document.getElementById('content').innerHTML += continueBtn;
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

function nextStep() {
    document.getElementById('content').innerHTML = '';

    let leftPage = `
                    <div id='leftPage'>
                        <p>Contact Details & Notes</p>
                        <div>
                            <input placeholder='email'></input>
                            <input placeholder='phone number'></input>
                            <textarea placeholder='notes'></textarea>
                        </div>
                    </div>`;
    let rightPage = `
                    <div id='rightPage'>
                        <p>Jersey List</p>
                        <div id='table'>
                            <div id='headerTable'>
                                <p class='size'>size</p>
                                <p class='name'>name</p>
                                <p class='number'>number</p>
                            </div>
                            <div id='bodyTable'>
                                <div id='rowTable1' class='rowTable'>
                                    <select id='select'>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                    <input class='cellName' type='text' min='0'/>
                                    <input class='cellNumber' type='number'/>
                                    <button class='delete' id='1' onclick='deleteRow(this.id)'></button>
                                </div>
                            </div> 
                        </div>
                    </div>`;

            document.getElementById('content').innerHTML = leftPage;
            document.getElementById('content').innerHTML += rightPage;

            let add = `<button class='add' onclick='addRow()'></button>`;
            document.getElementById('rightPage').innerHTML += add;

            let back = `<button class='contentBtn btnBack' onclick='back()'>Back</button>`;
            document.getElementById('content').innerHTML += back;

            let send = `<button class='contentBtn' id='send'>Send</button>`;
            document.getElementById('content').innerHTML += send; 
}

function addRow() {
        let i = document.getElementById('bodyTable');
        i = +i.children[i.children.length - 1].id.match(/\d+/g)[0];
        i++;
        if(i <= 5) {
            let rowTable = `
            <div id='rowTable${i}' class='rowTable'>
                <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>

                <input class='cellName' type='text' />
                <input class='cellNumber' type='number' min='0'/>
                <button class='delete' id='${i}' onclick='deleteRow(this.id)'></button>
            </div>
            `;

            document.getElementById('bodyTable').innerHTML += rowTable;
        }
}

function deleteRow(i) {
    document.getElementById(`rowTable${i}`).outerHTML = '';
}

function back() {
    createContent();
    createModel();
    createModels(majice, "modelMajica");
    createColors();

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
}