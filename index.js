// Show/Hide Mobile Navigation
const menuBtn = document.getElementById('menuBtn');
const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu');
const nav = document.getElementById('nav-items');

function handleMenuClick() {
    nav.classList.toggle('hide');
    openMenu.classList.toggle('hide');
    closeMenu.classList.toggle('hide');
}

// Change active filter in Products
const filters = document.getElementById('filters').children;
function changeFilter(e) {
    Array.from(filters).forEach(filter => {
        filter.classList.remove('active');
    });
    e.target.classList.add('active');
}