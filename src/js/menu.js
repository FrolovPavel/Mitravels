let burger = document.querySelector('.burger'),
    close = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu'),
    link = document.querySelectorAll('.menu__link');

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible')
})

close.addEventListener('click', () => {
    menu.classList.remove('menu--visible')
})

link.forEach((link) => {
    link.addEventListener('click', ()=> {
        menu.classList.remove('menu--visible')
    })
})