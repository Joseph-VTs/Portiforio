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

document.querySelectorAll('.Multi-Textos').forEach(function(elemento) {
  new Typed(elemento, {
    strings: ['Programador', 'Front-End Developer', 'Back-End Developer', 'Analista de Dados'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  });
});
