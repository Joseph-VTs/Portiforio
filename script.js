// Menu Responsivo - Mobile
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


// Animação troca de textos
document.querySelectorAll('.Multi-Textos').forEach(function(elemento) {
  new Typed(elemento, {
    strings: ['Programador', 'Front-End Developer', 'Back-End Developer', 'Analista de Dados', 'Desenvolvedor'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  });
});



// Mensagem de sucesso Form-Spree
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("Contact-Form");
  const status = document.getElementById("Form-Status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.querySelector('[name="Nome"]').value.trim();
    const email = form.querySelector('[name="Email"]').value.trim();
    const telefone = form.querySelector('[name="Telefone"]').value.trim();
    const assunto = form.querySelector('[name="Assunto"]').value.trim();
    const mensagem = form.querySelector('[name="Mensagem"]').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validações
    if (!nome || !emailRegex.test(email) || !mensagem) {
      status.textContent = "Por favor, preencha todos os campos corretamente.";
      status.className = "error";
      status.style.display = "block";
      return;
    }

    // Envio para Formspree
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        status.textContent = "✅ Obrigado pelo contato, " + nome + "! Vou responder em breve.";
        status.className = "success";
        status.style.display = "block";
        form.reset();
      } else {
        status.textContent = "Ops, houve um erro no envio. Tente novamente.";
        status.className = "error";
        status.style.display = "block";
      }
    }).catch(() => {
      status.textContent = "Erro de conexão. Verifique sua internet.";
      status.className = "error";
      status.style.display = "block";
    });
  });
});
