console.log('Ny fil i js/menu.js');

const button = document.querySelector('.navbar__button');

button.addEventListener('click', function(event) {
    console.log(event);
    const menu = document.querySelector('.navbar__collapse');
    console.log(menu);
    menu.classList.toggle('navbar__collapse--show');
});