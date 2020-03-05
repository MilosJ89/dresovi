let blankModels = [modelJerseyBlank, modelShortBlank, modelSockBlank];
let jerseys = [jersey1, jersey2, jersey3, jersey4];
let modelsOfJerseys = [jerseyModel1, jerseyModel2, jerseyModel3, jerseyModel4];
let backOfJerseys = [backOfJersey0, backOfJersey1, backOfJersey2, backOfJersey3];
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
        <header id='header'></header>`;

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
    document.getElementById('rightPage').innerHTML = modelPaint;
}

/**
 * Function for create tabs
 */
function createTabs() {
    let tabs = `
                <div class='tabs'>
                    <button id='jersey' class='tabsBtn activeBtn' onclick='createModels(this, jerseys, "modelJersey", modelsOfJerseys)'>Jersey</button>
                    <button id='shorts' class='tabsBtn' onclick='createModels(this, shorts, "modelShort", modelsOfShorts)'>Shorts</button>
                    <button id='socks' class='tabsBtn' onclick='createModels(this, socks, "modelSock", modelsOfSocks)'>Socks</button>
                    <button id='font' class='tabsBtn' onclick='createModels(this, letters)'>Font</button>
                    <button id='logo' class='tabsBtn' onclick='createModels(this, logos)'>Logo</button>
                </div>`;
    document.getElementById('leftPage').innerHTML = tabs;
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
 * Function for create models div 
 */
function createModelsDiv() {
    let modelsPage = `
                    <div class='models'>
                    </div>`;
    document.getElementById('leftPage').innerHTML += modelsPage;
}

/**
 * 
 * @param {HTMLElement} btn 
 * @param {*} models 
 * @param {*} id 
 * @param {*} paintModels 
 */
function createModels(btn, models, id, paintModels) {
    let current = document.getElementsByClassName("activeBtn");
    current[0].className = current[0].className.replace("activeBtn", "");
    btn.className += " activeBtn";

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
        if (model === 'length') {
            break;
        } 
        else if(childrenOfModels[model].id.slice(0,6) === 'letter') {
                    childrenOfModels[model].addEventListener('click', rotateJersey.bind(null, model));
        } 
        else {
            childrenOfModels[model].addEventListener('click', ()=> {
                document.getElementById(id).innerHTML = '';
                document.getElementById(id).innerHTML = paintModels[model];
                document.getElementById(id).innerHTML += deleteBtnModel(id);
                eval(`${id}Color()`);
            });
        }
    };
}

/**
 * Function for create button for delete model
 */
function deleteBtnModel(id) {
    return `<button id="${id}Delete" class='deleteModel' onclick='deleteModel("${id}")'></button>`;
}

/**
 * Function for delete model
 */
function deleteModel(id) {

    switch(id) {
        case "modelJersey":
            document.getElementById(id).innerHTML = modelJerseyBlank;
            document.getElementById("colorJerseys").innerHTML = '';
            break;
        case "modelShort":
            document.getElementById(id).innerHTML = modelShortBlank;
            document.getElementById("colorShorts").innerHTML = '';
            break;
        case "modelSock":
            document.getElementById(id).innerHTML = modelSockBlank;
            document.getElementById("colorSocks").innerHTML = '';
            break;
        case "modelBackOfJersey":
            document.getElementById(id).innerHTML = '';
            break;
        default:
            break;
    }
}

function createBlankModel() {
    document.getElementById('modelJersey').innerHTML = modelJerseyBlank;
    document.getElementById('modelShort').innerHTML = modelShortBlank;
    document.getElementById('modelSock').innerHTML = modelSockBlank;
}

/**
 * Functions for create spans in dropdown
 * 
 * @param {*} dropdown 
 * @param {*} model 
 * @param {*} color 
 */
function getDropdownSpans(dropdown, model, color) {
    return `<span class="${color}" onclick='color(this, "${dropdown}", "${model}")'></span>`;
}

function getDropdown(id, dropdown, model) {
    const colors = ["red", "green", "blue", "yellow", "pink", "gray", "black", "orange", "purple", "white", "gold"];

    document.body.addEventListener('click', closeDropdown.bind(null, dropdown, id));

    return `
        <div>
            <div id="${id}" onclick='openDropdown("${dropdown}")'></div>
            <div class='dropdown' id="${dropdown}">
                ${colors.map(getDropdownSpans.bind(null, dropdown, model)).join('')}
                <input class='colorPicker' type='color' onchange='colorInput(this, "${dropdown}", "${model}")' value='#3E5C94'>
            </div>
        </div>`;
}

/**
 * Function for create colors for jerseys and pins
 */
function modelJerseyColor() {
    document.getElementById('colorJerseys').innerHTML = getDropdown('color1', 'dropdownJerseys', 'modelJersey');
    document.getElementById('colorJerseys').innerHTML += getDropdown('color4', 'dropdownPins', 'modelJersey');
}

/**
 * Function for create colors for back of jerseys
 */
function modelBackOfJerseyColor() {
    document.getElementById('colorBackOfJerseys').innerHTML = getDropdown('color5', 'dropdownBackOfJerseys', 'modelBackOfJersey');
}

/**
 * Function for create colors for shorts
 */
function modelShortColor() {
    document.getElementById('colorShorts').innerHTML = getDropdown('color2', 'dropdownShorts', 'modelShort');
}

/**
 * Function for create colors for shorts
 */
function modelSockColor() {
    document.getElementById('colorSocks').innerHTML = getDropdown('color3', 'dropdownSocks', 'modelSock');
}

/** 
 * Function for colors from spans
 */
function color(span, dropdown, model) {
    let spanClass = span.getAttribute('class');
    let bgColorSpan = window.getComputedStyle(document.querySelector(`.${spanClass}`, null)).getPropertyValue('background-color');
    let id = document.getElementById(model).firstChild.id;

    switch(model, dropdown) {
        case 'modelJersey', 'dropdownJerseys':
            document.getElementById(`${id}Forward`).setAttribute('fill', bgColorSpan);
            document.getElementById('color1').style.backgroundColor = bgColorSpan;
            localStorage.setItem('color', bgColorSpan);
            break;

        case 'modelJersey', 'dropdownPins':
            document.querySelectorAll(`.${id}Pin`).forEach(setAttributeClasses.bind(null, bgColorSpan));
            document.getElementById('color4').style.backgroundColor = bgColorSpan;
            break;
        
        case 'modelShort', 'dropdownShorts':
            document.getElementById(`${id}Color`).setAttribute('fill', bgColorSpan);
            document.getElementById('color2').style.backgroundColor = bgColorSpan;
            break;

        case 'modelSock', 'dropdownSocks':
            document.querySelectorAll(`.${id}Color`).forEach(setAttributeClasses.bind(null, bgColorSpan));
            document.getElementById('color3').style.backgroundColor = bgColorSpan;
            break;

        case 'modelBackOfJersey', 'dropdownBackOfJerseys':
            document.querySelectorAll(`.${id}Color`).forEach(setAttributeClasses.bind(null, bgColorSpan));
            document.getElementById('color5').style.backgroundColor = bgColorSpan;
            break;

        default:
            break;
    }

    document.getElementById(dropdown).classList.remove('openDropdown');
}

/**
 * 
 * Function for colors from color picker
 */
function colorInput(input, dropdown, model) {
    let color = input.value;
    let id = document.getElementById(model).firstChild.id;

    switch(model, dropdown) {
        case 'modelJersey', 'dropdownJerseys':
            document.getElementById(`${id}Forward`).setAttribute('fill', color);
            document.getElementById('color1').style.backgroundColor = color;
            break;

        case 'modelJersey', 'dropdownPins':
            document.querySelectorAll(`.${id}Pin`).forEach(setAttributeClasses.bind(null, color));
            document.getElementById('color4').style.backgroundColor = color;
            break;
        
        case 'modelShort', 'dropdownShorts':
            document.getElementById(`${id}Color`).setAttribute('fill', color);
            document.getElementById('color2').style.backgroundColor = color;
            break;

        case 'modelSock', 'dropdownSocks':
            document.querySelectorAll(`.${id}Color`).forEach(setAttributeClasses.bind(null, color));
            document.getElementById('color3').style.backgroundColor = color;
            break;

        case 'modelBackOfJersey', 'dropdownBackOfJerseys':
            document.querySelectorAll(`.${id}Color`).forEach(setAttributeClasses.bind(null, color));
            document.getElementById('color5').style.backgroundColor = color;
            break;

        default:
            break;
    }
    document.getElementById(dropdown).classList.remove('openDropdown');
}

/**
 * 
 * @param {*} model 
 * @param {*} param 
 * 
 * Function for set attribute all classes
 */
function setAttributeClasses(param, model) {
    model.setAttribute('fill', param);
}

/**
 * Function for open dropdown
 */
function openDropdown(dropdown) {
    let dropdowns = ['dropdownJerseys', 'dropdownPins', 'dropdownShorts', 'dropdownSocks', 'dropdownBackOfJerseys'];

    for(let param of dropdowns) {
        if(param === dropdown) {
            document.getElementById(`${param}`).classList.add('openDropdown');
        } else if (param !== dropdown && document.getElementById(param)) {
            document.getElementById(`${param}`).classList.remove('openDropdown');
        }
    }
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
 * Function for open home page
 */
function homePage() {
    createHeader();
    createContent();
    createTabs();
    createModelsDiv();
    modelForPaint();
    activeTab();
    createButtonContinue();
    createBlankModel();
    createModels(document.getElementsByClassName('tabsBtn')[0], jerseys, "modelJersey", modelsOfJerseys);
};

homePage();

/**
 * SECOND PAGE
 */

/**
 * Function for continue
 */
function nextPage() {
    const hello = {
        jersey: document.getElementById('modelJersey').innerHTML,
        shorts: document.getElementById('modelShort').innerHTML,
        sock: document.getElementById('modelSock').innerHTML
    };

    localStorage.setItem('dres', JSON.stringify(hello));

    // document.getElementById('leftPage').innerHTML = '';
    // document.getElementById('rightPage').innerHTML = '';

    // console.log(document.getElementById('modelJersey'));
    // console.log(JSON.parse(localStorage.getItem('jersey')));
    // contactPage();
    // listModels();
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
                         <div id='rowTable1' class='rowTable'></div>
                </div> 
            </div>`;
    
    document.getElementById('rightPage').innerHTML = paragraph;
    document.getElementById('rightPage').innerHTML += table;

    document.getElementById('rowTable1').innerHTML = rowTable(1);

    let add = `<button class='add' onclick='addRow()'></button>`;
    document.getElementById('rightPage').innerHTML += add;

    let send = `<button class='btn btnSend' id='send' onclick='send()'>Send</button>`;
    document.getElementById('rightPage').innerHTML += send; 
}

/**
 * Function for create row in table
 */
function rowTable(i) {
    return `
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
   
    rowDiv.innerHTML += rowTable(i);

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

/**
 * Function for modal when click at send
 */
function send() {
    let sendModal = `
                <div id='sendModal'>
                </div>`;

    document.body.innerHTML += sendModal;
}

/**
 * 
 * @param {*} dropdown 
 * @param {*} id 
 * @param {*} event 
 * 
 * Function for close dropdown when click on body
 */
function closeDropdown(dropdown, id, event) {

    if (event.target.id !== id && event.target.className !== 'colorPicker' && document.getElementById(dropdown)) {
        document.getElementById(dropdown).classList.remove('openDropdown');
    }
}

/**
 * Function for rotate elements 
 */

function rotateJersey(i) {

    let colorBackOfJerseys = `<div class='colors' id='colorBackOfJerseys'></div></div>`;
    
    let modelBackOfJersey = `<div class='modelPaint' id='modelBackOfJersey'></div>`;

    document.getElementById('colorJerseys').innerHTML = colorBackOfJerseys;
    document.getElementById('modelJersey').innerHTML = modelBackOfJersey;

    document.getElementById('modelBackOfJersey').innerHTML = backOfJerseys[i];
    
    modelBackOfJerseyColor();

    document.getElementById(`backOfJersey${i}Color`).setAttribute('fill', localStorage.getItem('color'));    

    document.getElementById('modelJersey').innerHTML += deleteBtnModel('modelJersey');
}


/**
 * Object with informations for selected model
 */

// console.log(localStorage.getItem('color'));