

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ СЛАЙДЕР SWIPER (https://swiperjs.com/get-started) 
const sliders = () => {
    const swiper = new Swiper('.js-slider', {
        loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
    const swiperMobile = new Swiper('.js-sliderMobile', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 40
    })

}

sliders()