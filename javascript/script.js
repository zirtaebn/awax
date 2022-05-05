let menu = document.querySelector('.menu-img');
menu.addEventListener('click', () => {

    let nav = document.querySelector('nav');

    if(nav.classList.contains('nav-opened')){

        nav.classList.remove('nav-opened');
        nav.classList.add('nav-closed');
    }else{

        nav.classList.add('nav-opened');
        nav.classList.remove('nav-closed');
    }
})