// Show/Hide Mobile Navigation
const menuBtn = document.getElementById('menuBtn');
const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu');
const nav = document.getElementById('nav-items')

function handleMenuClick() {
    nav.classList.toggle('hide');
    openMenu.classList.toggle('hide');
    closeMenu.classList.toggle('hide');
}