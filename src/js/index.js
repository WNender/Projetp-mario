/*  
Obejetivo nume 1: Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com ovídeo do trailer
Obejetivo 2: QUando o usuário clicar no 'x' devemos fechar o modal

Obejetivo nume 1: Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com ovídeo do trailer

passo 1- dar um jeito de pegar o elemento que representa o botão na tela usando o js
passo 2- dar um jeito de indentificar quando o usuario clicar no botão
passo 3- dar um jeito de pegar o elemento da modal no js
passo 4- abrir a modal na tela

Obejetivo 2: QUando o usuário clicar no 'x' devemos fechar o modal
passo 1- dar um jeito de pegar o elemento de fechar o modal usando o js
passo 2- dar um jeito de identificar quando o usuário clicar no x
passo 3- fechar o modal
*/

console.log('mostrar o document',document);
console.log(document.querySelector(".botao"));

const botaoTrailer = document.querySelector(".botao");
const video = document.getElementById("video");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
console.log(video.src);
const linkDoVideo = video.src

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "");
});





