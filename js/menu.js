

//Para que el boton de menu saque los apartados del menu
const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("nav");

btnMenu.addEventListener('click',() =>{
    nav.classList.toggle('mostrar');
});