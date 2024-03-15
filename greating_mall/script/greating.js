$(document).ready(function(){
    const main_banner_wrap = new Swiper(".main_banner_wrap", {
        loop: true,
        navigation: {
            nextEl: ".arrow.right",
            prevEl: ".arrow.left",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    $('.main_banner_wrap').on('mouseenter', function(){
        main_banner_wrap.autoplay.stop();
    });
    $('.main_banner_wrap').on('mouseleave', function(){
        main_banner_wrap.autoplay.start();
    });
});