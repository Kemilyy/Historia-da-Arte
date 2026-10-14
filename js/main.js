// O site agora é aberto a todos: não há mais redirecionamento para o login.
// O login (e o acesso de demonstração) ficam no canto superior direito, em conta.js.

const iconMenuEl = document.querySelector('.icon-menu');
const menuEl = document.querySelector('.menu');

function alternarMenu(abrir) {
    const aberto = menuEl.classList.toggle('ativo', abrir);
    iconMenuEl.setAttribute('aria-expanded', String(aberto));
    iconMenuEl.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

iconMenuEl.addEventListener('click', () => alternarMenu());

// fecha o menu com Esc ou clicando fora dele
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') alternarMenu(false);
});
document.addEventListener('click', (e) => {
    if (!menuEl.contains(e.target) && !iconMenuEl.contains(e.target)) alternarMenu(false);
});