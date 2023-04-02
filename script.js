const github = document.getElementById("link-github");
const linkedin = document.getElementById("link-linkedin");
const gmail = document.getElementById("link-gmail");
const instagram = document.getElementById("link-instagram");

const typeProject01 = document.getElementById("type-project01")
const project01 = document.getElementById("project01");
const summary01 = document.getElementById("summary01");
const description01 = document.getElementById("description01");
const nameProject01 = document.getElementById("name-project01")

const typeProject02 = document.getElementById("type-project02");
const project02 = document.getElementById("project02");
const summary02 = document.getElementById("summary02");
const description02 = document.getElementById("description02");
const nameProject02 = document.getElementById("name-project02");

const typeProject03 = document.getElementById("type-project03");
const project03 = document.getElementById("project03");
const summary03 = document.getElementById("summary03");
const description03 = document.getElementById("description03");
const nameProject03 = document.getElementById("name-project03");

const typeProject04 = document.getElementById("type-project04");
const project04 = document.getElementById("project04");
const summary04 = document.getElementById("summary04");
const description04 = document.getElementById("description04");
const nameProject04 = document.getElementById("name-project04");

const project_box01 = document.getElementById("project-box-01");
const project_box02 = document.getElementById("project-box-02");
const project_box03 = document.getElementById("project-box-03");
const project_box04 = document.getElementById("project-box-04");

let isClicked01 = false;
let isClicked02 = false;
let isClicked03 = false;
let isClicked04 = false;


function mouseoverLinks() {
    this.classList.add('mouseover');
}

function mouseoutLinks() {
    this.classList.remove('mouseover');
}


function mouseoverProject01() {
    summary01.classList.add('summary');
}

function mouseoutProject01() {
    summary01.classList.remove('summary');
}


function mouseoverProject02() {
    summary02.classList.add('summary');
}

function mouseoutProject02() {
    summary02.classList.remove('summary');
}


function mouseoverProject03() {
    summary03.classList.add('summary');
}

function mouseoutProject03() {
    summary03.classList.remove('summary');
}


function mouseoverProject04() {
    summary04.classList.add('summary');
}

function mouseoutProject04() {
    summary04.classList.remove('summary');
}


function project01BoxClicked() {
    if (isClicked01 === false) {
        isClicked01 = true;
    }
    else {
        isClicked01 = false;
    }
    projectBox01Render();
}

function projectBox01Render() {
    if (isClicked01 === true) {
        typeProject01.classList.add('dataProject-activate');
        description01.classList.add('description');
        project_box01.classList.add('project-box-activate');
        nameProject01.classList.add('dataProject-activate');
        summary01.setAttribute('style', 'display: none');
    }
    else {
        typeProject01.classList.remove('dataProject-activate');
        description01.classList.remove('description');
        project_box01.classList.remove('project-box-activate');
        nameProject01.classList.remove('dataProject-activate');
        summary01.removeAttribute('style', 'display: none');
    }
}

function project02BoxClicked() {
    if (isClicked02 === false) {
        isClicked02 = true;
    }
    else {
        isClicked02 = false;
    }
    projectBox02Render();
}

function projectBox02Render() {
    if (isClicked02 === true) {
        typeProject02.classList.add('dataProject-activate');
        description02.classList.add('description');
        project_box02.classList.add('project-box-activate');
        nameProject02.classList.add('dataProject-activate');
        summary02.setAttribute('style', 'display: none');
    }
    else {
        typeProject02.classList.remove('dataProject-activate');
        description02.classList.remove('description');
        project_box02.classList.remove('project-box-activate');
        nameProject02.classList.remove('dataProject-activate');
        summary02.removeAttribute('style', 'display: none');
    }
}

function project03BoxClicked() {
    if (isClicked03 === false ){
        isClicked03 = true;
    }
    else {
        isClicked03 = false;
    }
    project03BoxRender()
}

function project03BoxRender() {
    if (isClicked03 === true){
        typeProject03.classList.add('dataProject-activate');
        description03.classList.add('description');
        project_box03.classList.add('project-box-activate');
        nameProject03.classList.add('dataProject-activate');
        summary03.setAttribute('style', 'display: none');
    }
    else {
        typeProject03.classList.remove('dataProject-activate');
        description03.classList.remove('description');
        project_box03.classList.remove('project-box-activate');
        nameProject03.classList.remove('dataProject-activate');
        summary03.removeAttribute('style', 'display: none');
    }
}

function project04BoxClicked() {
    if (isClicked04 === false){
        isClicked04 = true;
    }
    else {
        isClicked04 = false;
    }
    project04BoxRender()
}

function project04BoxRender() {
    if (isClicked04 === true) {
        typeProject04.classList.add('dataProject-activate');
        description04.classList.add('description');
        project_box04.classList.add('project-box-activate');
        nameProject04.classList.add('dataProject-activate');
        summary04.setAttribute('style', 'display: none');
    }
    else {
        typeProject04.classList.remove('dataProject-activate');
        description04.classList.remove('description');
        project_box04.classList.remove('project-box-activate');
        nameProject04.classList.remove('dataProject-activate');
        summary04.removeAttribute('style', 'display: none');
    }
}

function redirectGithub() {
    const urlGit = "https://github.com/NikolasSantis";
    const newTab = window.open(urlGit, '_blank');
    newTab.focus();
}

function redirectLinkedin() {
    const urlLinkedin = "https://www.linkedin.com/in/nicolas-t-g-santos-51b869262/";
    const newTab = window.open(urlLinkedin, '_blank');
    newTab.focus();
}

function redirectGmail() {
    const urlGmail = "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDsVnfnDjcFdXpMXpFbsncDSpChkLMTNTVcxlcRRQBVSzcGXdjwFpCDzQPVnbzwZDdVBqHQ";
    const newTab = window.open(urlGmail, '_blank');
    newTab.focus();
}
function redirectInstagram() {
    const urlInstagram = "https://www.instagram.com/nicolassantos195/";
    const newTab = window.open(urlInstagram, '_blank');
    newTab.focus();
}



github.addEventListener('mouseover', mouseoverLinks);
github.addEventListener('mouseout', mouseoutLinks);
github.addEventListener('click', redirectGithub);

linkedin.addEventListener('mouseover', mouseoverLinks);
linkedin.addEventListener('mouseout', mouseoutLinks);
linkedin.addEventListener('click', redirectLinkedin);

gmail.addEventListener('mouseover', mouseoverLinks);
gmail.addEventListener('mouseout', mouseoutLinks);
gmail.addEventListener('click', redirectGmail);

instagram.addEventListener('mouseover', mouseoverLinks);
instagram.addEventListener('mouseout', mouseoutLinks);
instagram.addEventListener('click', redirectInstagram);

project01.addEventListener('mouseover', mouseoverProject01);
project01.addEventListener('mouseout', mouseoutProject01);

project02.addEventListener('mouseover', mouseoverProject02);
project02.addEventListener('mouseout', mouseoutProject02);

project03.addEventListener('mouseover', mouseoverProject03);
project03.addEventListener('mouseout', mouseoutProject03);

project04.addEventListener('mouseover', mouseoverProject04);
project04.addEventListener('mouseout', mouseoutProject04);

project01.addEventListener('click', project01BoxClicked);
project02.addEventListener('click', project02BoxClicked);
project03.addEventListener('click', project03BoxClicked);
project04.addEventListener('click', project04BoxClicked);