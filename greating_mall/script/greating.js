$(document).ready(function(){
    // 해당 위치에 오면 페이드인
    window.addEventListener('scroll', function() {
        // Part1 요소의 위치
        const part1Position = document.querySelector('.part2').getBoundingClientRect().top;
        // 화면의 높이
        const windowHeight = window.innerHeight;
    
        // Part1 요소가 화면에 보일 때
        if (part1Position < windowHeight) {
            // recommand 요소에 fadein 클래스 추가
            document.querySelector('.recommand').classList.add('fadein');
        }
    });
    //헤더 스크롤 고정
    if($('.mainHeadMenuArea').length){
        const gnbOfs = $('.mainHeadMenuArea').offset().top;

        $(window).scroll(function(){
            let currntScr =  $(window).scrollTop();
            if(currntScr >= gnbOfs){
                $('.mainHeadMenuArea').addClass('active');
            }else{
                $('.mainHeadMenuArea').removeClass('active');
            };
        });
    };
    // 카테고리 이벤트
    $('.catagory > button').click(function() {
        $('.catagory').toggleClass('active');
    });
    // 메인 베너 슬라이드
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

    // part3 탭
    $('.early_choice li').click(function() {
        const click_btn_Id = $(this).attr('id');
        const content_Class = '.' + click_btn_Id;
        const content_Wrap = $('.part3 .article_wrap > div');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        content_Wrap.css('display', 'none').filter(content_Class).css('display', 'flex');
    });
    // part5 슬라이드
    const mbr1 = document.querySelector(".part5_arrow.right");
    const mbl1 = document.querySelector(".part5_arrow.left");
    const part5_slide_wrap = new Swiper(".part5_slide_wrap", {
        slidesPerView : 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".part5_arrow.right",
            prevEl: ".part5_arrow.left",
        },
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                mbl1.style.display = 'none';
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndex1 = this.realIndex;
                if (window.innerWidth > 1024) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 왼쪽 버튼 숨기기
                        mbl1.style.display = 'none';
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        mbl1.style.display = 'block';
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        mbr1.style.display = 'none';
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        mbr1.style.display = 'block';
                    }
                } else {
                    if (this.isBeginning) {
                        mbl1.style.display = 'none';
                        mbr1.style.display = 'none';
                    } else {
                        mbl1.style.display = 'none';
                        mbr1.style.display = 'none';
                    }
                    if (this.isEnd) {
                        mbr1.style.display = 'none';
                        mbl1.style.display = 'none';
                    } else {
                        mbr1.style.display = 'none';
                        mbl1.style.display = 'none';
                    }
                }
            },
        },
    });
    // part6 리뷰슬라이드
    const review_slide_wrap = new Swiper(".review_slide_wrap", {
        slidesPerView : 4.2,
        spaceBetween: 12,
    });
    // part7 매거진 슬라이드 tab1
    const part7_slide_wrap_tab1 = new Swiper(".magagin_tab1", {
        loop: true,
        slidesPerView : 3,
        spaceBetween: 23,
        // centeredSlides: true,
        navigation: {
            nextEl: ".part7_arrow_tab1.right",
            prevEl: ".part7_arrow_tab1.left",
        },
    });
    // part7 매거진 슬라이드 tab2
    const part7_slide_wrap_tab2 = new Swiper(".magagin_tab2", {
        loop: true,
        slidesPerView : 3,
        spaceBetween: 23,
        // centeredSlides: true,
        navigation: {
            nextEl: ".part7_arrow_tab2.right",
            prevEl: ".part7_arrow_tab2.left",
        },
    });
    // part7 매거진 슬라이드 tab3
    const part7_slide_wrap_tab3 = new Swiper(".magagin_tab3", {
        loop: true,
        slidesPerView : 3,
        spaceBetween: 23,
        // centeredSlides: true,
        navigation: {
            nextEl: ".part7_arrow_tab3.right",
            prevEl: ".part7_arrow_tab3.left",
        },
    });
    // part7 매거진 슬라이드 tab4
    const part7_slide_wrap_tab4 = new Swiper(".magagin_tab4", {
        loop: true,
        slidesPerView : 3,
        spaceBetween: 23,
        // centeredSlides: true,
        navigation: {
            nextEl: ".part7_arrow_tab4.right",
            prevEl: ".part7_arrow_tab4.left",
        },
    });
    // part7 매거진 슬라이드 tab5
    const part7_slide_wrap_tab5 = new Swiper(".magagin_tab5", {
        loop: true,
        slidesPerView : 3,
        spaceBetween: 23,
        // centeredSlides: true,
        navigation: {
            nextEl: ".part7_arrow_tab5.right",
            prevEl: ".part7_arrow_tab5.left",
        },
    });
    $('.tab_list_wrap > li').click(function (){
        const click_list_Id = $(this).attr('id');
        const slide_Class = '.' + click_list_Id;
        const slide_Wrap = $('.slide_wrap > div');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        slide_Wrap.css('display', 'none').filter(slide_Class).css('display', 'block');
    });
    // 공지사항 슬라이드
    const notice_wrap = new Swiper(".notice_wrap", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView : 1,
        spaceBetween: 10,
        direction: "vertical",
    });
});