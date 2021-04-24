import Swiper, { Navigation, Pagination } from 'swiper/core';
Swiper.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.css';



const swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left'
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

swiper.on('transitionEnd', function () {
    let videos = document.querySelectorAll('.first__slider video')
    videos.forEach((video) => {
        video.pause()
        video.currentTime = 0
    })
    let playFirst = document.querySelectorAll('.main-slider__play');
    playFirst.forEach((el) => {
        el.style.display = 'block'
    })
})

const swiper2 = new Swiper('.slider-container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105,
});