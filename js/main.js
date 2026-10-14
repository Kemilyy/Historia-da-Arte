if (localStorage.getItem('logou') !== '1') {
    location.href = "./html/login.html";
}

const iconMenuEl = document.querySelector('.icon-menu');
const menuEl = document.querySelector('.menu');

function alternarMenu(abrir) {
    const aberto = menuEl.classList.toggle('ativo', abrir);
    iconMenuEl.setAttribute('aria-expanded', String(aberto));
    iconMenuEl.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

iconMenuEl.addEventListener('click', () => alternarMenu());

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') alternarMenu(false);
});
document.addEventListener('click', (e) => {
    if (!menuEl.contains(e.target) && !iconMenuEl.contains(e.target)) alternarMenu(false);
});
