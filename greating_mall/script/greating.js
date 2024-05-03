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

    const right_slide = new Swiper(".item_list", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        direction: "vertical",
        // centeredSlides: true,
        slidesPerView : 3,
        slidesPerGroup : 3,
        // slidesOffsetBefore : -20,
        spaceBetween: 0,
        pagination: {
            el: ".item_list_nav1",
            clickable: true,
        },
    });
    $('.item_list').on('mouseenter', function(){
        right_slide.autoplay.stop();
    });
    $('.item_list').on('mouseleave', function(){
        right_slide.autoplay.start();
    });

    const mid_banner_slide_wrap = new Swiper(".mid_banner_slide_wrap", {
        pagination: {
            el: ".mid_banner_nav",
            clickable: true,
        },
        touchRatio: 0,//드래그 금지
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    $('.mid_banner_slide_wrap').on('mouseenter', function(){
        mid_banner_slide_wrap.autoplay.stop();
    });
    $('.mid_banner_slide_wrap').on('mouseleave', function(){
        mid_banner_slide_wrap.autoplay.start();
    });
});