import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.slider-container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105
});