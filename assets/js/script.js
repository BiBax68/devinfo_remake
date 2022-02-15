const btnMenu = document.getElementById('menu');
const overlayMenu = document.getElementById('overlay_menu');
var header = document.querySelector("header");


btnMenu.addEventListener('click', show);

function show () {
    btnMenu.classList.toggle("openmenu");
    overlayMenu.classList.toggle('active');
}

window.addEventListener("scroll", function(){
    header.classList.toggle('scroll', window.scrollY > 0)
})