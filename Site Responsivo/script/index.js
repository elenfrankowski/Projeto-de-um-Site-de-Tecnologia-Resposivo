// Garante que o DOM esteja carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do menu
    const menuBtn = document.getElementById('menu');      // ícone menu
    const closeBtn = document.getElementById('menuX');    // ícone X
    const menu = document.getElementById('menu-principal'); // lista do menu

    // Inicializa estado: ícone X escondido
    closeBtn.style.display = 'none';

    // Evento para abrir o menu
    menuBtn.addEventListener('click', () => {
        menu.classList.add('active');    // abre o menu (transform: translateX(0))
        menuBtn.style.display = 'none';  // esconde icone menu
        closeBtn.style.display = 'block';// mostra X
    });

    // Evento para fechar o menu
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active'); // fecha o menu (transform: translateX(100%))
        menuBtn.style.display = 'block'; // mostra icone menu
        closeBtn.style.display = 'none'; // esconde X
    });
});
