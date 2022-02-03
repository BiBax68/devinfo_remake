const btnMenu = document.getElementById('menu');
const overlayMenu = document.getElementById('overlay_menu');


btnMenu.addEventListener('click', show);

function show () {
    btnMenu.classList.toggle("openmenu");
    overlayMenu.classList.toggle('active');
}
