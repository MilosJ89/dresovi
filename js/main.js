let majice = [majica1, majica2, majica3];
let sorcevi = [sorc1, sorc2];
let stucne = [stucna1, stucna2, stucna3];

/**
 * Function for create header
 */
function createHeader() {
    let header = `
        <header></header>`;

        document.getElementById('body').innerHTML = header;
}

createHeader();

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
                        <div id='color1' onclick='openDropdown("dropdown1")'>
                            <div class='dropdown1'>
                                <span class='red' onclick='color(this, "modelMajica")'></span>
                                <span class='green' onclick='color(this, "modelMajica")'></span>
                                <span class='blue' onclick='color(this, "modelMajica")'></span>
                                <span class='yellow' onclick='color(this, "modelMajica")'></span>
                                <span class='pink' onclick='color(this, "modelMajica")'></span>
                                <span class='gray' onclick='color(this, "modelMajica")'></span>
                                <span class='black' onclick='color(this, "modelMajica")'></span>
                                <span class='orange' onclick='color(this, "modelMajica")'></span>
                                <span class='purple' onclick='color(this, "modelMajica")'></span>
                                <span class='white' onclick='color(this, "modelMajica")'></span>
                                <span class='gold' onclick='color(this, "modelMajica")'></span>
                                <input id='colorPikcer1' class='colorPicker' type='color' onchange='colorInput(this, "modelMajica")'>  
                            </div>
                        </div>
                    </div>
                    <div id='modelMajica'></div>
                </div>
                <div id='sorc'>
                    <div id='colorSorc'>
                        <div id='color2' onclick='openDropdown("dropdown2")'>
                            <div class='dropdown2'>
                                <span class='red' onclick='color(this, "modelSorc")'></span>
                                <span class='green' onclick='color(this, "modelSorc")'></span>
                                <span class='blue' onclick='color(this, "modelSorc")'></span>
                                <span class='yellow' onclick='color(this, "modelSorc")'></span>
                                <span class='pink' onclick='color(this, "modelSorc")'></span>
                                <span class='gray' onclick='color(this, "modelSorc")'></span>
                                <span class='black' onclick='color(this, "modelSorc")'></span>
                                <span class='orange' onclick='color(this, "modelSorc")'></span>
                                <span class='purple' onclick='color(this, "modelSorc")'></span>
                                <span class='white' onclick='color(this, "modelSorc")'></span>
                                <span class='gold' onclick='color(this, "modelSorc")'></span>
                                <input id='colorPikcer2' class='colorPicker' type='color' onclick='colorInput(this, "modelSorc")'>
                            </div>
                        </div>
                    </div>
                    <div id='modelSorc'></div>
                </div>
                <div id='stucne'>
                    <div id='colorStucne'>
                        <div id='color3' onclick='openDropdown("dropdown3")'>
                            <div class='dropdown3'>
                                <span class='red' onclick='color(this, "modelStucne")'></span>
                                <span class='green' onclick='color(this, "modelStucne")'></span>
                                <span class='blue' onclick='color(this, "modelStucne")'></span>
                                <span class='yellow' onclick='color(this, "modelStucne")'></span>
                                <span class='pink' onclick='color(this, "modelStucne")'></span>
                                <span class='gray' onclick='color(this, "modelStucne")'></span>
                                <span class='black' onclick='color(this, "modelStucne")'></span>
                                <span class='orange' onclick='color(this, "modelStucne")'></span>
                                <span class='purple' onclick='color(this, "modelStucne")'></span>
                                <span class='white' onclick='color(this, "modelStucne")'></span>
                                <span class='gold' onclick='color(this, "modelStucne")'></span>
                                <input id='colorPikcer3' class='colorPicker' type='color' onchange='colorInput(this, "modelStucne")'>
                            </div>
                        </div>
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
            <button class='btnFooter' id='continueBtn' onclick='nextStep()'>Continue</button>
        </div>`;

    document.getElementById('body').innerHTML += content;
}

createContent();
/**
 * Color 
 */
function color(span, model) {

    let spanClass = span.getAttribute('class');
    let bgColorSpan = window.getComputedStyle(document.querySelector(`.${spanClass}`, null)).getPropertyValue('background-color');

    let id = document.getElementById(model).firstChild.id;

    switch(model) {
        case 'modelMajica':
            document.getElementById(`${id}Napred`).setAttribute('fill', bgColorSpan);
            document.getElementById(`${id}Ledja`).setAttribute('fill', bgColorSpan);
            document.getElementById('color1').style.backgroundColor = bgColorSpan;
        break;
        
        case 'modelSorc':
            document.getElementById(`${id}Boja`).setAttribute('fill', bgColorSpan);
            document.getElementById('color2').style.backgroundColor = bgColorSpan;
        break;

        case 'modelStucne':
            document.getElementById(`${id}Leva`).setAttribute('fill', bgColorSpan);
            document.getElementById(`${id}Desna`).setAttribute('fill', bgColorSpan);
            document.getElementById('color3').style.backgroundColor = bgColorSpan;
        break;

        default:
            break;
    }
}

function colorInput(input, model) {
    let color = input.value;
    let id = document.getElementById(model).firstChild.id;

    switch(model) {
        case 'modelMajica':
            document.getElementById(`${id}Napred`).setAttribute('fill', color);
            document.getElementById(`${id}Ledja`).setAttribute('fill', color);
            document.getElementById('color1').style.backgroundColor = color;
        break;
        
        case 'modelSorc':
            document.getElementById(`${id}Boja`).setAttribute('fill', color);
            document.getElementById('color2').style.backgroundColor = color;
        break;

        case 'modelStucne':
            document.getElementById(`${id}Leva`).setAttribute('fill', color);
            document.getElementById(`${id}Desna`).setAttribute('fill', color);
            document.getElementById('color3').style.backgroundColor = color;
        break;

        default:
            break;
    }
}

/**
 * Function open dropdown
 */
function openDropdown(dropdown) {
    document.querySelector(`.${dropdown}`).classList.toggle('openDropdown');
}

/**
 * Active tab
 */
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
    document.getElementById('modelStucne').innerHTML = stucna1;
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

            let back = `<button class='btnFooter contentBtn btnBack' onclick='back()'>Back</button>`;
            document.getElementById('content').innerHTML += back;

            let send = `<button class='btnFooter contentBtn' id='send'>Send</button>`;
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

    for(let i=0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
        });
    };
}