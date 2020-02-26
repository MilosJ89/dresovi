let majice = [majica1, majica2, majica3];
let sorcevi = [sorc1, sorc2];
let stucne = [stucne1, stucne2, stucne3];

/**
 * Function for create header
 */
function createHeader() {
    let header = `
        <header></header>`;

        document.getElementById('body').innerHTML = header;
}

createHeader();

// <input id='inputColorDres' class='inputColors' type='color' value='#ff0000'></input>

/**
 * Function for create content
 */
function createContent() {
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');

    let content = `
        <div id='content'>
            <div id='paintModel'>
                <div id='majica'>
                    <div id='colorMajica'>
                        <div id='color'>
                            <div id='dropdown'>
                                <div class='item'>
                                    <span></span>
                                    <p>Red</p>
                                </div>
                                <div class='item'>
                                    <span></span>
                                    <p>Green</p>
                                </div>
                                <div class='item'>
                                    <span></span>
                                    <p>Blue</p>
                                </div>
                                <div class='item'>
                                    <input type='color'></input>
                                    <p>Color Picker</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div id='modelMajica'></div>
                </div>
                <div id='sorc'>
                    <div id='colorSorc'>
                        <input id='inputColorSorc' class='inputColors' type='color' value='#ffff00'></input>
                    </div>
                    <div id='modelSorc'></div>
                </div>
                <div id='stucne'>
                    <div id='colorStucne'>
                        <input id='inputColorStucne' class='inputColors' type='color' value='#33cc33'></input>
                    </div>
                    <div id='modelStucne'></div>
                </div>
            </div>
            <div id='chooseModel'>
                <div id='title'>
                    <p>Modeli</p>
                    <div id='page'>
                        <button class='btnModel active' onclick='createModels(majice, "modelMajica")'>Majice</button>
                        <button class='btnModel' onclick='createModels(sorcevi, "modelSorc")'>Sorcevi</button>
                        <button class='btnModel' onclick='createModels(stucne, "modelStucne")'>Stucne</button>
                    </div>
                </div>
                <div id='models'></div>
                <div id='description'></div>
            </div>
            <button class='contentBtn' id='continueBtn' onclick='nextStep()'>Continue</button>
        </div>`;


    document.getElementById('body').innerHTML += content;
}

createContent();

const btns = document.getElementsByClassName('btnModel');
for(let i=0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    });
};

/** Create shirt model at left page */
function createModel () {
    document.getElementById('modelMajica').innerHTML = majica1;
    document.getElementById('modelSorc').innerHTML = sorc1;
    document.getElementById('modelStucne').innerHTML = stucne1;
}

createModel();

/**
 * Create models at right page 
 */
function createModels(modeli, id) {
    document.getElementById('models').innerHTML = '';
    
    let promiseModel = new Promise((resolve, reject) => {
        for(let model of modeli) {
            document.getElementById('models').innerHTML += model;
        };
        return resolve();
    });
    
    promiseModel
        .then(chooseModel(id));
}

/**
 * Function for choose model - when click on model at right page, change model at left page
 * @param {*} id 
 */
function chooseModel(id) {
    for(let model of document.getElementById('models').children) {
        model.addEventListener('click', () => {
            document.getElementById(id).innerHTML = model.outerHTML;
        })
    }
}

/** 
 * Create models majice when open page 
 */
createModels(majice, 'modelMajica');

// /** Color majica */
// document.getElementById('inputColorDres').addEventListener('input', () => {
//     let index = 0;
//     while(index++ <= majice.length) {
//         if(document.getElementById(`majica${index}`).parentNode.id === `modelMajica`) {
//             let color = document.getElementById('inputColorDres').value; 
//             document.getElementById(`majica${index}Napred`).setAttribute('fill', color);
//             document.getElementById(`majica${index}Ledja`).setAttribute('fill', color);
//         }
//     }
// });

// /** Color sorc */
// document.getElementById('inputColorSorc').addEventListener('input', () => {
//     let index = 0;
//     while(index++ <= sorcevi.length) {
//         if(document.getElementById(`sorc${index}`).parentNode.id === `modelSorc`) {
//             let color = document.getElementById('inputColorSorc').value; 
//             document.getElementById(`sorc${index}Boja`).setAttribute('fill', color);
//         }
//     }
// });

// /** Color stucne */
// document.getElementById('inputColorStucne').addEventListener('input', () => {
//     let index = 0;
//     while(index++ <= stucne.length) {
//         if(document.getElementById(`stucne${index}`).parentNode.id === `modelStucne`) {
//             let color = document.getElementById('inputColorStucne').value; 
//             document.getElementById(`stucna${index}Leva`).setAttribute('fill', color);
//             document.getElementById(`stucna${index}Desna`).setAttribute('fill', color);
//         }
//     }
// });

/**
 * Function for next page when click continue button
 */
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
                                <span class='empty'></span>
                            </div>
                            <div id='bodyTable'>
                                <div id='rowTable1' class='rowTable'>
                                    <select class='select size'>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                    <input class='cellName' id='name1' type='text' />
                                    <input class='cellNumber' id='number1' type='number' min='0'/>
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

/**
 * Function for add new row when fill in the fields
 */
function addRow() {

    let i = document.getElementById('bodyTable');
    i = +i.children[i.children.length - 1].id.match(/\d+/g)[0];
    ++i;

    let rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'rowTable');
        rowDiv.setAttribute('id', `rowTable${i}`);

    let rowTable = ` 
        <select class='select size'>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
        </select>
        <input class='cellName' id='name${i}' type='text' />
        <input class='cellNumber' id='number${i}' type='number' min='0' />
        <button class='delete' id='${i}' onclick='deleteRow(this.id)'></button>`;
   
    rowDiv.innerHTML = rowTable;

    let name = document.getElementById(`name${i-1}`).value;
    let number = document.getElementById(`number${i-1}`).value;

    if(name === "" || number === "") {
        alert('Please fill in fields');
    } else {
        document.getElementById('bodyTable').appendChild(rowDiv);    
    }

    document.getElementById(`name${i}`).focus();
    
}

/**
 * Function for delete row when click delete button (red line)
 * 
 * @param {*} i 
 */
function deleteRow(i) {
    if(i > 1) {
        document.getElementById(`rowTable${i}`).outerHTML = '';
    }
}

/**
 * Function for prevoous page when click button back
 */
function back() {
    document.getElementById('content').outerHTML = '';
    createContent();
    createModel();
    createModels(majice, "modelMajica");

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

    for(let i=0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
        });
    };
}