const burger = document.querySelector('.burger');
const exit = document.querySelector('.exit');
const blockBurger = document.querySelector('.block-burger');
const alert = document.querySelector('.alert');
const ShowAlert = document.querySelector('.show-alert');
const BodyModal = document.querySelector('body');


BodyModal.addEventListener('click', menu);

function menu(e) {
    if (e.target.closest('.burger')) {
        blockBurger.classList.add('active');
    }
    if (e.target.closest('.exit')) {
        blockBurger.classList.remove('active');
    }
    if (e.target.closest('.alert')) {
        ShowAlert.classList.toggle('active');
    }
    if (e.target.closest('.exit')) {
        ShowAlert.classList.remove('active');
    }
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    rewind: true,
    spaceBetween: 30,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        850: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        1120: {
            slidesPerView: 2,
            spaceBetweenSlides: 20
        },
    }

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});