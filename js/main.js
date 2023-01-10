const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.toggle');
const btnRecherche = document.querySelector('.recherche');
const switchMode = document.querySelector('.toggle-switch');
const modeTxt = document.querySelector('.mode-txt');

/* fermer la sidebar*/
toggle.addEventListener('click', () => {
    sidebar.classList.toggle('fermer');
});
/*ouvrir la sidebar en cas de recherche*/
btnRecherche.addEventListener('click', () => {
    sidebar.classList.remove('fermer');
});
/*changer de mode jour/nuit*/
switchMode.addEventListener('click', () => {
    body.classList.toggle('dark');
    if(body.classList.contains('dark')) {
        modeTxt.innerText = 'Mode jour';
    } else {
        modeTxt.innerText = 'Mode nuit';
    }
});