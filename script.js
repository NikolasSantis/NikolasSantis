
// Vale ressaltar que neste código, por enquanto não há alguma ordem de 
// precedencia nos conjuntos de funções, logo, funções que, por alguma
// razão poderiam estar mais acima ou abaixo do código, podem ocorrer 
// // de não estar em lugares inadequados


// As variáveis abaixo estão sepadas em conjunto, pois a maioria
// utilizamos em 'blocos' no código


// Conjunto de variáveis do Container de Links 
const github = document.getElementById("link-github");
const linkedin = document.getElementById("link-linkedin");
const gmail = document.getElementById("link-gmail");
const instagram = document.getElementById("link-instagram");

// Conjunto do 1° projeto da página
const typeProject01 = document.getElementById("type-project01")
const project01 = document.getElementById("project01");
const summary01 = document.getElementById("summary01");
const description01 = document.getElementById("description01");
const nameProject01 = document.getElementById("name-project01")

// Conjunto do 2° projeto da página 
const typeProject02 = document.getElementById("type-project02");
const project02 = document.getElementById("project02");
const summary02 = document.getElementById("summary02");
const description02 = document.getElementById("description02");
const nameProject02 = document.getElementById("name-project02");

// Conjunto do 3° projeto da página 
const typeProject03 = document.getElementById("type-project03");
const project03 = document.getElementById("project03");
const summary03 = document.getElementById("summary03");
const description03 = document.getElementById("description03");
const nameProject03 = document.getElementById("name-project03");

// Conjunto do 4° projeto da página 
const typeProject04 = document.getElementById("type-project04");
const project04 = document.getElementById("project04");
const summary04 = document.getElementById("summary04");
const description04 = document.getElementById("description04");
const nameProject04 = document.getElementById("name-project04");

// Conjunto das 'box' de cada projeto da página 
const project_box01 = document.getElementById("project-box-01");
const project_box02 = document.getElementById("project-box-02");
const project_box03 = document.getElementById("project-box-03");
const project_box04 = document.getElementById("project-box-04");

// Conjunto de controle, caso a 'box' do projeto tenha sido clicada
let isClicked01 = false;
let isClicked02 = false;
let isClicked03 = false;
let isClicked04 = false;



// Conjunto de funções para funcionalidades da página


// Conjunto de 'mouseover' e 'mouseout' nos botões do Container de Links 
function mouseoverLinks() {
    this.classList.add('mouseover');
}

function mouseoutLinks() {
    this.classList.remove('mouseover');
}

// Este é um grande conjunto, onde tem mouseover e mouseout
// para todos os projetos da página

// Conjunto 1° projeto 
function mouseoverProject01() {
    summary01.classList.add('summary');
}

function mouseoutProject01() {
    summary01.classList.remove('summary');
}

// Conjunto 2° projeto 
function mouseoverProject02() {
    summary02.classList.add('summary');
}

function mouseoutProject02() {
    summary02.classList.remove('summary');
}

// Conjunto 3° projeto 
function mouseoverProject03() {
    summary03.classList.add('summary');
}

function mouseoutProject03() {
    summary03.classList.remove('summary');
}

// Conjunto 4° projeto 
function mouseoverProject04() {
    summary04.classList.add('summary');
}

function mouseoutProject04() {
    summary04.classList.remove('summary');
}


// Blocos de alterações nos elementos HTML 

// Verifica se o 1° projeto já foi clicado, chama outra função
function project01BoxClicked() {
    if (isClicked01 === false) {
        isClicked01 = true;
    }
    else {
        isClicked01 = false;
    }
    projectBox01Render();
}

// Conjunto de todos os projetos da página
const projects = [
    { 
        type: document.getElementById("type-project01"),
        img: document.getElementById("project01"),
        summary: document.getElementById("summary01"),
        description: document.getElementById("description01"),
        name: document.getElementById("name-project01"),
        box: document.getElementById("project-box-01")
    },
    {
        type: document.getElementById("type-project02"),
        img: document.getElementById("project02"),
        summary: document.getElementById("summary02"),
        description: document.getElementById("description02"),
        name: document.getElementById("name-project02"),
        box: document.getElementById("project-box-02")
    },
    {
        type: document.getElementById("type-project03"),
        img: document.getElementById("project03"),
        summary: document.getElementById("summary03"),
        description: document.getElementById("description03"),
        name: document.getElementById("name-project03"),
        box: document.getElementById("project-box-03")
    },
    {
        type: document.getElementById("type-project04"),
        img: document.getElementById("project04"),
        summary: document.getElementById("summary04"),
        description: document.getElementById("description04"),
        name: document.getElementById("name-project04"),
        box: document.getElementById("project-box-04")
    }
]

// Abrindo uma nova aba pelo JavaScript para saber como se faz redirect por js puro 
function redirectGithub() {
    const urlGit = "https://github.com/NikolasSantis";
    const newTab = window.open(urlGit, '_blank');
    newTab.focus();
}

github.addEventListener('click', redirectGithub);

// Funções de animação da página
function projectDescriptionBoxRender(project) {
    project.type.classList.toggle('dataProject-activate');
    project.description.classList.toggle('description');
    project.box.classList.toggle('project-box-activate');
    project.name.classList.toggle('dataProject-activate');
    project.summary.classList.toggle('display');
}

function mouseEventProject(project) {
    project.summary.classList.toggle('summary');
}

for (let project of projects) {
    project.img.addEventListener('mouseover', () => mouseEventProject(project));
    project.img.addEventListener('mouseout', () => mouseEventProject(project));
    project.img.addEventListener('click', () => projectDescriptionBoxRender(project))
}
