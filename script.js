// Botão do Link do GitHub
const github = document.getElementById("link-github");

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
