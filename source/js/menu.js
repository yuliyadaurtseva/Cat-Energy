var nav = document.querySelector('.main-nav');
var toggle = nav.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--nojs');

toggle.addEventListener('click', function() {
    if (nav.classList.contains('main-nav--closed')) {
        nav.classList.remove('main-nav--closed');
        nav.classList.add('main-nav--opened');
    } else {
        nav.classList.add('main-nav--closed');
        nav.classList.remove('main-nav--opened');
    }
});