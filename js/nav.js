var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow', 'p-md-2');
        nav.classList.remove('p-md-3');
    } else {
        nav.classList.remove('bg-dark', 'shadow', 'p-md-2');
        nav.classList.add('p-md-3');
    }
});