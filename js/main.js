

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ СЛАЙДЕР SWIPER (https://swiperjs.com/get-started) 
const sliders = () => {
    document.querySelectorAll('.js-slider').forEach((item, i) => {
        const swiper = new Swiper(item, {
            loop: false,
            autoplay: {
                delay: 1000 + ((i+1)*1000)
            }
        });

    })
    const swiperMobile = new Swiper('.js-sliderMobile', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        // loopAdditionalSlides: 2,/* loopAdditionalSlides добавил для устранения дерганья при переходе с последнего на первый слайд в зацикленном слайдере */
        // loopPreventsSlide: true,/* loopPreventsSlide добавил для устранения дерганья при переходе с последнего на первый слайд в зацикленном слайдере */
        autoplay: {
            delay: 3000,
            // disableOnInteraction: false /* disableOnInteraction добавил для устранения дерганья при переходе с последнего на первый слайд в зацикленном слайдере */
        },
        speed: 1000
    })

}

sliders()