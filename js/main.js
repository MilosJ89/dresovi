let jerseys = [jersey1, jersey2, jersey3, jersey4];
let modelsOfJerseys = [jerseyModel1, jerseyModel2, jerseyModel3, jerseyModel4];
let shorts = [shorts1, shorts2];
let modelsOfShorts = [shortsModel1, shortsModel2];
let socks = [sock1, sock2, sock3];
let modelsOfSocks = [sockModel1, sockModel2, sockModel3];
let letters = [letter1, letter2, letter3, letter4];

/**
 * Function for create header
 */
function createHeader() {
    let header = `
        <header></header>`;

        document.getElementById('body').innerHTML = header;
};

/**
 * Function for create content
 */
function createContent() {
    let content = `
                <div id='content'>
                    <div id='leftPage'></div>
                    <div id='rightPage'></div>
                </div>`;
    document.body.innerHTML += content;
}

/**
 * Function for create models for paint at left page
 */
function modelForPaint() {
    let modelPaint = `<div id='modelPaintJerseys'>
                        <div class='colors' id='colorJerseys'></div>
                        <div class='modelPaint' id='modelJersey'></div>
                    </div>
                    <div id='modelPaintShorts'>
                        <div class='colors' id='colorShorts'></div>
                        <div class='modelPaint' id='modelShort'></div>
                    </div>
                    <div id='modelPaintSocks'>
                        <div class='colors' id='colorSocks'></div>
                        <div class='modelPaint' id='modelSock'></div>
                    </div>`;
    document.getElementById('leftPage').innerHTML = modelPaint;
}

/**
 * Function for create tabs
 */
function createTabs() {
    let tabs = `
                <div class='tabs'>
                    <button id='jersey' class='tabsBtn activeBtn' onclick='createModels(jerseys, "modelJersey", modelsOfJerseys)'>Jersey</button>
                    <button id='shorts' class='tabsBtn' onclick='createModels(shorts, "modelShort", modelsOfShorts)'>Shorts</button>
                    <button id='socks' class='tabsBtn' onclick='createModels(socks, "modelSock", modelsOfSocks)'>Socks</button>
                    <button id='font' class='tabsBtn' onclick='createModels(letters)'>Font</button>
                    <button id='logo' class='tabsBtn' onclick='createModels(logos)'>Logo</button>
                </div>`;
    document.getElementById('rightPage').innerHTML = tabs;
}

/**
 * Active tab
 */
function activeTab() {
    let btns = document.getElementsByClassName('tabsBtn');
    for(let i=0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("activeBtn");
        current[0].className = current[0].className.replace("activeBtn", "");
        this.className += " activeBtn";
        });
    };
}
/**
 * 
 * @param {*} models
 * 
 * Function for create models div 
 */
function createModelsDiv() {
    let modelsPage = `
                    <div class='models'>
                    </div>`;
    document.getElementById('rightPage').innerHTML += modelsPage;
}

/**
 * Function for create models when click on tab
 */
function createModels(models, id, paintModels) {
    document.querySelector('.models').innerHTML = '';

    let promiseModel = new Promise((resolve, reject) => {
        for(let model of models) {
            document.querySelector('.models').innerHTML += model;
        };
        return resolve();
    });
     
    promiseModel
        .then(chooseModel(id, paintModels));
}

/**
 * Function for choose model - when click on model at right page, change model at left page
 * @param {*} id 
 */
function chooseModel(id, paintModels) {

    let childrenOfModels = document.querySelector('.models').children;

    for(let model in childrenOfModels) {
        childrenOfModels[model].addEventListener('click', () => {
            document.getElementById(id).innerHTML = paintModels[model];
        });
    };
}

/**
 * Function for create colors for jerseys
 */
function colorJersey() {
    let jersey = `
            <div id='color'></div>
            <div id='dropdownJersey'>
                <span class='red' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='green' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='blue' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='yellow' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='pink' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='gray' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='black' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='orange' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='purple' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='white' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <span class='gold' onclick='color(this, "modelMajica", "dropdown1")'></span>
                <input class='colorPicker' type='color' onchange='colorInput(this, "modelMajica", "dropdown1")' value='#3E5C94'>
            </div>`;
    document.getElementById('colorJerseys').innerHTML = jersey;
}

/**
 * Function for create button for continue
 */
function createButtonContinue() {
    let continueBtn = `
                    <button class='btn continueBtn' onclick='nextPage()'>Continue</button>`;

    document.getElementById('rightPage').innerHTML += continueBtn;
}

/**
 * Function for home page
 */
function homePage() {
    createHeader();
    createContent();
    createTabs();
    createModelsDiv();
    modelForPaint();
    activeTab();
    createButtonContinue();
    createModels(jerseys, "modelJersey", modelsOfJerseys);
    
};

homePage();

/**
 * SECOND PAGE
 */

/**
 * Function for continue
 */
function nextPage() {
    document.getElementById('leftPage').innerHTML = '';
    document.getElementById('rightPage').innerHTML = '';

    contactPage();
    listModels();
}

/**
 * Function for create contact page
 */
function contactPage() {
    let paragraph = `
                <p class='title'>Contact Details & Notes</p>`;
    
    let contact = `
                <div class='contact'>
                <input placeholder='email'></input>
                <input placeholder='phone number'></input>
                <textarea placeholder='notes'></textarea>
                </div>`;
    
    let backBtn = `
                <button class='btn backBtn' onclick='back()'>Back</button>`;

    document.getElementById('leftPage').innerHTML = paragraph;
    document.getElementById('leftPage').innerHTML += contact;
    document.getElementById('leftPage').innerHTML += backBtn;
}

/**
 * Function for create list of models
 */
function listModels() {
    let paragraph = `
                <p class='title'>Jersey List</p>`;

    let table = `
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
                                <option>8</option>
                                <option>10</option>
                                <option>12</option>
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
            </div>`;
    
    document.getElementById('rightPage').innerHTML = paragraph;
    document.getElementById('rightPage').innerHTML += table;

    let add = `<button class='add' onclick='addRow()'></button>`;
    document.getElementById('rightPage').innerHTML += add;

    let send = `<button class='btn btnSend' id='send' onclick='send()'>Send</button>`;
    document.getElementById('rightPage').innerHTML += send; 
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
            <option>8</option>
            <option>10</option>
            <option>12</option>
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
 * Function for back page when click on button back
 */
function back() {
    document.getElementById('leftPage').innerHTML = '';
    document.getElementById('rightPage').innerHTML = '';

    homePage();
}


// /**
//  * Function for create content
//  */
// function Content() {
//     let contentDiv = document.createElement('div');
//     contentDiv.setAttribute('id', 'content');

//     let content = `
//         <div id='content'>
//             <div id='paintModel'>
//                 <div id='majica'>
//                     <div id='colorMajica'>
//                         <div id='color1' onclick='openDropdown("dropdown1")'></div>
//                         <div class='dropdown1'>
//                             <span class='red' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='green' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='blue' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='yellow' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='pink' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='gray' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='black' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='orange' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='purple' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='white' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <span class='gold' onclick='color(this, "modelMajica", "dropdown1")'></span>
//                             <input class='colorPicker' type='color' onchange='colorInput(this, "modelMajica", "dropdown1")' value='#3E5C94'>
//                         </div>
//                         <div id='color4' onclick='openDropdown("dropdown4")'></div>
//                         <div class='dropdown4'>
//                             <span class='red' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='green' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='blue' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='yellow' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='pink' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='gray' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='black' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='orange' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='purple' onclick='colorStafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='white' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <span class='gold' onclick='colorStrafte(this, "modelMajica", "dropdown4")'></span>
//                             <input class='colorPicker' type='color' onchange='colorInputStrafte(this, "dropdown4")' value='#3E5C94'>
//                         </div>
//                     </div>
//                     <div id='modelMajica'></div>
//                 </div>
//                 <div id='sorc'>
//                     <div id='colorSorc'>
//                         <div id='color2' onclick='openDropdown("dropdown2")'></div>
//                             <div class='dropdown2'>
//                                 <span class='red' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='green' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='blue' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='yellow' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='pink' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='gray' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='black' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='orange' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='purple' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='white' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <span class='gold' onclick='color(this, "modelSorc", "dropdown2")'></span>
//                                 <input class='colorPicker' type='color' onchange='colorInput(this, "modelSorc", "dropdown2")' value='#3E5C94'>
//                             </div>
//                         </div>
//                     <div id='modelSorc'></div>
//                 </div>
//                 <div id='stucne'>
//                     <div id='colorStucne'>
//                         <div id='color3' onclick='openDropdown("dropdown3")'></div>
//                         <div class='dropdown3'>
//                             <span class='red' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='green' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='blue' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='yellow' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='pink' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='gray' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='black' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='orange' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='purple' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='white' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <span class='gold' onclick='color(this, "modelStucne", "dropdown3")'></span>
//                             <input class='colorPicker' type='color' onchange='colorInput(this, "modelStucne", "dropdown3")' value='#3E5C94'>
//                         </div>
//                     </div>
//                     <div id='modelStucne'></div>
//                 </div>
//             </div>
//             <div id='chooseModel'>
//                 <div id='title'>
//                     <p>Modeli</p>
//                     <div id='page'>
//                         <button class='btnModel active' onclick='createModels(majice, "modelMajica")'>Majice</button>
//                         <button class='btnModel' onclick='createModels(sorcevi, "modelSorc")'>Sorcevi</button>
//                         <button class='btnModel' onclick='createModels(stucne, "modelStucne")'>Stucne</button>
//                     </div>
//                 </div>
//                 <div id='models'></div>
//                 <div id='description'></div>
//             </div>
//             <button class='btnFooter' id='continueBtn' onclick='nextStep()'>Continue</button>
//             </div>
//         </div>`;

//     document.getElementById('body').innerHTML += content;
// }

// // createContent();

// /**
//  * 
//  * @param {*} span 
//  * @param {*} model 
//  * @param {*} dropdown 
//  * 
//  * Paint model from fix colors in span
//  */

// function color(span, model, dropdown) {
//     let spanClass = span.getAttribute('class');
//     let bgColorSpan = window.getComputedStyle(document.querySelector(`.${spanClass}`, null)).getPropertyValue('background-color');
//     let id = document.getElementById(model).firstChild.id;

//     switch(model) {
//         case 'modelMajica':
//             document.getElementById(`${id}Napred`).setAttribute('fill', bgColorSpan);
//             // document.getElementById(`${id}Ledja`).setAttribute('fill', bgColorSpan);
//             document.getElementById('color1').style.backgroundColor = bgColorSpan;
//         break;
        
//         case 'modelSorc':
//             document.getElementById(`${id}Boja`).setAttribute('fill', bgColorSpan);
//             document.getElementById('color2').style.backgroundColor = bgColorSpan;
//         break;

//         case 'modelStucne':
//             document.getElementById(`${id}Leva`).setAttribute('fill', bgColorSpan);
//             document.getElementById(`${id}Desna`).setAttribute('fill', bgColorSpan);
//             document.getElementById('color3').style.backgroundColor = bgColorSpan;
//         break;

//         default:
//             break;
//     }

//     document.querySelector(`.${dropdown}`).classList.remove('openDropdown');
// }

// function colorStrafte(span, model, dropdown) {
    
//     let spanClass  = span.getAttribute('class');
//     let bgColorSpan = window.getComputedStyle(document.querySelector(`.${spanClass}`, null)).getPropertyValue('background-color');
//     let id = document.getElementById(model).firstChild.id;

//     document.querySelectorAll(`.${id}Strafta`).forEach(x=> x.setAttribute('fill', bgColorSpan));

//     document.querySelector(`.${dropdown}`).classList.remove('openDropdown');
// }

// /**
//  * 
//  * @param {*} input 
//  * @param {*} model 
//  * @param {*} dropdown
//  * 
//  * Paint model from color in color picker 
//  */
// function colorInput(input, model, dropdown) {
//     let color = input.value;
//     let id = document.getElementById(model).firstChild.id;

//     switch(model) {
//         case 'modelMajica':
//             document.getElementById(`${id}Napred`).setAttribute('fill', color);
//             // document.getElementById(`${id}Ledja`).setAttribute('fill', color);
//             document.getElementById('color1').style.backgroundColor = color;
//         break;
        
//         case 'modelSorc':
//             document.getElementById(`${id}Boja`).setAttribute('fill', color);
//             document.getElementById('color2').style.backgroundColor = color;
//         break;

//         case 'modelStucne':
//             document.getElementById(`${id}Leva`).setAttribute('fill', color);
//             document.getElementById(`${id}Desna`).setAttribute('fill', color);
//             document.getElementById('color3').style.backgroundColor = color;
//         break;

//         default:
//             break;
//     }
//     document.querySelector(`.${dropdown}`).classList.remove('openDropdown');
// }

// function colorInputStrafte(input, dropdown) {
//     let color = input.value;
//     let id = document.getElementById("modelMajica").firstChild.id;

//     if(document.getElementById(id).parentNode.id === 'modelMajica') {
//         document.querySelectorAll(`.${id}Strafta`).forEach(x=> x.setAttribute('fill', color));
//     }
    
//     document.querySelector(`.${dropdown}`).classList.remove('openDropdown');
// }

// /**
//  * Function open dropdown
//  */
// function openDropdown(dropdown) {
//     if(dropdown === "dropdown1") {
//         document.querySelector(`.${dropdown}`).classList.add('openDropdown');
//         document.querySelector(`.dropdown2`).classList.remove('openDropdown');
//         document.querySelector(`.dropdown3`).classList.remove('openDropdown');
//         document.querySelector(`.dropdown4`).classList.remove('openDropdown');
//     }
//      else if(dropdown === "dropdown2") {
//         document.querySelector(`.${dropdown}`).classList.add('openDropdown');
//         document.querySelector(`.dropdown1`).classList.remove('openDropdown');
//         document.querySelector(`.dropdown3`).classList.remove('openDropdown');
//         document.querySelector(`.dropdown4`).classList.remove('openDropdown');
//     } 
//       else if(dropdown === "dropdown3") {
//         document.querySelector(`.${dropdown}`).classList.add('openDropdown');
//         document.querySelector(`.dropdown1`).classList.remove('openDropdown');
//         document.querySelector(`.dropdown2`).classList.remove('openDropdown');
//         document.querySelector(`.dropdown4`).classList.remove('openDropdown');
//     }
//     else if(dropdown === "dropdown4") {
//         document.querySelector(`.${dropdown}`).classList.add('openDropdown');
//         document.querySelector(`.dropdown1`).classList.remove('openDropdown');
//         document.querySelector(`.dropdown2`).classList.remove('openDropdown');
//         document.querySelector(`.dropdown3`).classList.remove('openDropdown');
//     }
// }

/**
 * Active tab
 */
// function activeTab() {
//     const btns = document.getElementsByClassName('btnModel');
//     for(let i=0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function() {
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("active", "");
//         this.className += " active";
//         });
//     };
// }

// activeTab();

/** Create shirt model at left page */
function createModel () {
    document.getElementById('modelMajica').innerHTML = majica1;
    document.getElementById('modelSorc').innerHTML = sorc1;
    document.getElementById('modelStucne').innerHTML = stucna1;
}

// createModel();

/**
 * Create models at right page 
 */
// function createModels(modeli, id) {
//     document.getElementById('models').innerHTML = '';
    
//     let promiseModel = new Promise((resolve, reject) => {
//         for(let model of modeli) {
//             document.getElementById('models').innerHTML += model;
//         };
//         return resolve();
//     });
    
//     promiseModel
//         .then(chooseModel(id));
// }

/**
 * Function for choose model - when click on model at right page, change model at left page
 * @param {*} id 
 */
// function chooseModel(id) {
//     for(let model of document.getElementById('models').children) {
//         model.addEventListener('click', () => {
//             document.getElementById(id).innerHTML = model.outerHTML;
//         })
//     }
// }

/**
 * Function for modal when click at send
 */
function send() {
    let sendModal = `
                <div id='sendModal'>
                </div>`;

    document.body.innerHTML += sendModal;
}