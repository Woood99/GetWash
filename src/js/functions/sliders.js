// =========================================================================================



import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);



// =========================================================================================




function initSliders() {




    if (document.querySelector('.reviews-slider__inner')) {
        new Swiper('.reviews-slider__inner', {

            // effect: 'fade',
            // autoplay: {
            // 	delay: 3000,
            // 	disableOnInteraction: false,
            // },

            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 75,
            autoHeight: true,
            speed: 800,
            // touchRatio: 0,
            // simulateTouch: false,
            // loop: true,
            // preloadImages: false,
            // lazy: true,


            // pagination: {
            // 	el: '.slider-quality__pagging',
            // 	clickable: true,
            // },
            
            navigation: {
                nextEl: '.reviews-slider__btn_next',
                prevEl: '.reviews-slider__btn_prev',
            },

            /*
            breakpoints: {
            	320: {
            		slidesPerView: 1,
            		spaceBetween: 0,
            		autoHeight: true,
            	},
            	768: {
            		slidesPerView: 2,
            		spaceBetween: 20,
            	},
            	992: {
            		slidesPerView: 3,
            		spaceBetween: 20,
            	},
            	1268: {
            		slidesPerView: 4,
            		spaceBetween: 30,
            	},
            },
            */

            on: {

            }
        });
    }




}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================

