
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


// Bloco de chamadas de funções, com uma possível ordem de precedência:
//  - mouseover
//  - mouseout 
//  - click

// Bloco de efeitos visuais no redirect do Github, e no
// final um redirect em outra aba no Github  
github.addEventListener('mouseover', mouseoverLinks);
github.addEventListener('mouseout', mouseoutLinks);
github.addEventListener('click', redirectGithub);

// Bloco de efeitos visuais no redirect do Linkedin
linkedin.addEventListener('mouseover', mouseoverLinks);
linkedin.addEventListener('mouseout', mouseoutLinks);

// Bloco de efeitos visuais no redirect do Gmail
gmail.addEventListener('mouseover', mouseoverLinks);
gmail.addEventListener('mouseout', mouseoutLinks);

// Bloco de efeitos visuais no redirect do Instagram
instagram.addEventListener('mouseover', mouseoverLinks);
instagram.addEventListener('mouseout', mouseoutLinks);



// Bloco dos projetos

// Efeitos de mouseover e mouseout no 1° projeto 
project01.addEventListener('mouseover', mouseoverProject01);
project01.addEventListener('mouseout', mouseoutProject01);

// Efeitos de mouseover e mouseout no 2° projeto
project02.addEventListener('mouseover', mouseoverProject02);
project02.addEventListener('mouseout', mouseoutProject02);

// Efeitos de mouseover e mouseout no 3° projeto
project03.addEventListener('mouseover', mouseoverProject03);
project03.addEventListener('mouseout', mouseoutProject03);

// Efeitos de mouseover e mouseout no 4° projeto
project04.addEventListener('mouseover', mouseoverProject04);
project04.addEventListener('mouseout', mouseoutProject04);

// Quando houver um click no projeto, irá adicionar a descrição do projeto junto
// ao botão que se clicado, irá abrir o arquivo do projeto em uma nova aba
project01.addEventListener('click', project01BoxClicked);
project02.addEventListener('click', project02BoxClicked);
project03.addEventListener('click', project03BoxClicked);
project04.addEventListener('click', project04BoxClicked);