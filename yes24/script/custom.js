$(document).ready(function () {
    $('.gnb > li').mouseenter(function () {
        $(this).parent().addClass('active');
        $('.sub_bg').css({
            'opacity':'0.9',
            'visibility':'visible'
        });
    });
    $('header').mouseleave(function () {
        $(this).find('.gnb').removeClass('active');
        $('.gnb, .sub, .sns, .sub_bg').removeClass('on');
        $('.sub_bg').css({
            'opacity':'0',
            'visibility':'hidden'
        });
    });
    $('.mb_icon').click(function () {
        $('.mobile_popup').addClass('on');
        document.body.style.overflow = 'hidden';
    });
    $('.close').click(function(){
        $('.mobile_popup').removeClass('on');
        document.body.style.overflow = 'auto';
    });
    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        let mainHeight = $('.main').height();
        if (scroll > mainHeight) {
            $('header').css('background', 'rgba(0, 0, 0, 0.7)');
        } else {
            $('header').css('background', 'none');
        }
    });
    // btn
    $('.btn_2').click(function () {
        $('tbc').removeClass('active');
        $('.tab_conts1').addClass('active');
    });
    $('.sns_conts:nth-child(2)').click(function () {
        $('.modal_wrap').css('display', 'block');
    });
    $('.btn_close').click(function () {
        $('.modal_wrap').css('display', 'none');
    });
    // gotop
    $('.gotop').click(function () {
        $('html,body').animate({ 'scrollTop': 0 });
    });
    //movie tab
    const mTxtLi = $('.m_txt > li');
    mTxtLi.click(function (e) {
        e.preventDefault();
        let clickTab = $(this).find('a').attr('href');
        $('.m_list, .arrow_wrap').css('display', 'none');
        $(clickTab).css('display', 'flex');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    const movieSlidetab1 = new Swiper(".slides_wrap1", {
        navigation: {
            nextEl: ".mbr1",
            prevEl: ".mbl1",
        },
        slidesPerView : 5,
        spaceBetween : 32,
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                $('.mbl1').hide();
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndex1 = this.realIndex;
                if (window.innerWidth > 1024) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 왼쪽 버튼 숨기기
                        $('.mbl1').hide();
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        $('.mbl1').show();
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        $('.mbr1').hide();
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        $('.mbr1').show();
                    }
                } else {
                    if (this.isBeginning) {
                        $('.mbl1, .mbr1').hide();
                    } else {
                        $('.mbl1, .mbr1').hide();
                    }
                    if (this.isEnd) {
                        $('.mbr1, .mbl1').hide();
                    } else {
                        $('.mbr1, .mbl1').hide();
                    }
                }
            },
        },
        breakpoints: {
            1024: {
                freeMode: true,
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        }
    });
    const movieSlidetab2 = new Swiper(".slides_wrap2", {
        navigation: {
            nextEl: ".mbr2",
            prevEl: ".mbl2",
        },
        slidesPerView : 5,
        spaceBetween : 32,
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                $('.mbl2').hide();
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndex2 = this.realIndex;
                if (window.innerWidth > 1024) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 왼쪽 버튼 숨기기
                        $('.mbl2').hide();
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        $('.mbl2').show();
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        $('.mbr2').hide();
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        $('.mbr2').show();
                    }
                } else {
                    if (this.isBeginning) {
                        $('.mbl2, .mbr2').hide();
                    } else {
                        $('.mbl2, .mbr2').hide();
                    }
                    if (this.isEnd) {
                        $('.mbr2, .mbl2').hide();
                    } else {
                        $('.mbr2, .mbl2').hide();
                    }
                }
            },
        },
        breakpoints: {
            1024: {
                freeMode: true,
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        }
    });
    const movieSlidetab3 = new Swiper(".slides_wrap3", {
        navigation: {
            nextEl: ".mbr3",
            prevEl: ".mbl3",
        },
        slidesPerView : 5,
        spaceBetween : 32,
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                $('.mbl3').hide();
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndex3 = this.realIndex;
                if (window.innerWidth > 1024) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 왼쪽 버튼 숨기기
                        $('.mbl3').hide();
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        $('.mbl3').show();
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        $('.mbr3').hide();
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        $('.mbr3').show();
                    }
                } else {
                    if (this.isBeginning) {
                        $('.mbl3, .mbr3').hide();
                    } else {
                        $('.mbl3, .mbr3').hide();
                    }
                    if (this.isEnd) {
                        $('.mbr3, .mbl3').hide();
                    } else {
                        $('.mbr3, .mbl3').hide();
                    }
                }
            },
        },
        breakpoints: {
            1024: {
                freeMode: true,
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        }
    });
    const movieSlidetab4 = new Swiper(".slides_wrap4", {
        navigation: {
            nextEl: ".mbr4",
            prevEl: ".mbl4",
        },
        slidesPerView : 5,
        spaceBetween : 32,
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                $('.mbl4').hide();
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndex4 = this.realIndex;
                if (window.innerWidth > 1024) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 왼쪽 버튼 숨기기
                        $('.mbl4').hide();
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        $('.mbl4').show();
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        $('.mbr4').hide();
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        $('.mbr4').show();
                    }
                } else {
                    if (this.isBeginning) {
                        $('.mbl4, .mbr4').hide();
                    } else {
                        $('.mbl4, .mbr4').hide();
                    }
                    if (this.isEnd) {
                        $('.mbr4, .mbl4').hide();
                    } else {
                        $('.mbr4, .mbl4').hide();
                    }
                }
            },
        },
        breakpoints: {
            1024: {
                freeMode: true,
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        }
    });
    //play
    const icons = [$('.ic1'), $('.ic2'), $('.ic3')];
    const views = [$('.vw1'), $('.vw2'), $('.vw3')];
    const videos = $('.vod');
    icons.forEach((icon, index) => {
        const view = views[index];
        const video = videos.get(index);
        icon.click(() => {
            view.css('display', 'block');
        });
        icon.on('click', () => {
            video.currentTime = 0;
            video.play();
        });
    });
    $('.vc1, .vc2, .vc3').click(function() {
        const index = $(this).index('.vc1, .vc2, .vc3');
        const view = views[index];
        const video = videos.get(index);
        view.css('display', 'none');
        video.currentTime = 0;
        video.pause();
    });
    // play tab
    const Ptab = $('.p_tab > li > a');
    Ptab.click(function() {
        Ptab.removeClass('on');
        $(this).addClass('on');
        const index = $(this).parent().index();
        $('.p_img_wrap > div').hide().eq(index).show();
    });
    // magazine 슬라이드1
    const personswiper1 = new Swiper(".maga1_sliderWrap", {
        navigation: {
            nextEl: ".si_right",
            prevEl: ".si_left",
        },
        slidesPerView : 3,
        spaceBetween : 20,
        breakpoints: {
            480: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            }
        },
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                $('.si_left').hide();
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndexmini1 = this.realIndex;
                if (window.innerWidth > 480) {
                    if (this.isBeginning) {
                    // 첫 번째 슬라이드에 도달했을 때 왼쪽 버튼 숨기기
                        $('.si_left').hide();
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        $('.si_left').show();
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        $('.si_right').hide();
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        $('.si_right').show();
                    }
                } else {
                    if (this.isBeginning) {
                        $('.si_left, .si_right').hide();
                    } else {
                        $('.si_left, .si_right').hide();
                    }
                    if (this.isEnd) {
                        $('.si_right, .si_left').hide();
                    } else {
                        $('.si_right, .si_left').hide();
                    }
                }
            },
        },
    });
    const personswiper2 = new Swiper(".maga2_sliderWrap", {
        navigation: {
            nextEl: ".si_right2",
            prevEl: ".si_left2",
        },
        slidesPerView : 3,
        spaceBetween : 20,
        breakpoints: {
            480: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            }
        },
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                $('.si_left2').hide();
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndexmini2 = this.realIndex;
                if (window.innerWidth > 480) {
                    if (this.isBeginning) {
                    // 첫 번째 슬라이드에 도달했을 때 왼쪽 버튼 숨기기
                        $('.si_left2').hide();
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        $('.si_left2').show();
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        $('.si_right2').hide();
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        $('.si_right2').show();
                    }
                } else {
                    if (this.isBeginning) {
                        $('.si_left2, .si_right2').hide();
                    } else {
                        $('.si_left2, .si_right2').hide();
                    }
                    if (this.isEnd) {
                        $('.si_right2, .si_left2').hide();
                    } else {
                        $('.si_right2, .si_left2').hide();
                    }
                }
            },
        }
    });
    // 모바일 네비 슬라이드
    const mobile_banner = new Swiper(".m_swiper", {
        pagination: {
            el: ".banner_navi",
            type: "fraction",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });
    const event = new Swiper(".rolling_wrap", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 20,
        breakpoints: {
            768: {
                autoplay: false,
                loop: false
            }
        }
    });
    // 이벤트 스탑
    $('.rolling_list').on('mouseenter', function(){
        event.autoplay.stop();
    });
    $('.rolling_list').on('mouseleave', function(){
        event.autoplay.start();
    });
});
// 푸터 계열사 사이트 이동
function goFamilySite() {
    let famulySiteURL = $('#familysite').val();
    if (famulySiteURL != "") {
        let win = window.open(famulySiteURL, 'winFamilySite')
        win.focus();
    }
}
// 모바일 푸터 캐러셀
function fnFooter() { 
    var target = $('.btn_footerInfo').parent('dt');
    if(!target.hasClass('active')){
        target.siblings().slideDown(function(){
            target.addClass('active');
        });
    }else{
        target.siblings().slideUp(function(){
            target.removeClass('active');
        });
    }
}