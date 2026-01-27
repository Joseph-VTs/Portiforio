let menu = document.getElementById('Menu-Icon');
let navbar = document.querySelector('.NavBar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.Multi-Textos', {
    strings: ['Programador', 'Front-End Developer', ' Back-End Developer', 'Analista de Dados'],
    typeSpeed: 80,
    backSpeed: 80,
    bakDelay: 1200,
    loop: true,
});