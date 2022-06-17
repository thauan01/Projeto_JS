const botao = document.getElementsByTagName('button');
const myBody = document.getElementsByTagName('body')[0];
const myFooter = document.getElementById('footer');
const myImage = document.getElementById('imagem');
const myButton = document.getElementsByTagName('button')[0];
const h2 = document.getElementsByTagName('h2')[0];



function changeMode(id) {
    changeClasses();
    changeText();
    changeImage();
}

function changeClasses() {
    myBody.classList.toggle('dark-mode');
    myFooter.classList.toggle('dark-mode');
    myButton.classList.toggle('dark-mode');
}

function changeText() {
    if(myButton.classList.contains('dark-mode')) {
        myButton.innerHTML = "Light Mode"
    } else {myButton.innerHTML = "Dark Mode"}
    if(myBody.classList.contains('dark-mode')) {
        h2.innerHTML = "Dark Mode ON"
    } else {h2.innerHTML = "Light Mode ON"}
}

function changeImage() {
    if(myButton.classList.contains('dark-mode')) {
        myImage.setAttribute('src', './imagens/noite.jpg')
    } else {myImage.setAttribute('src', './imagens/dia.jpg')}
    
}