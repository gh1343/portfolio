document.addEventListener('DOMContentLoaded', function() {
    /**
     * gnb 이벤트 시작
     */
    const gnbLiElements = document.querySelectorAll('.gnb > li');
    const topHeadElement = document.querySelector('.top_head');
    const subBgElement = document.querySelector('.sub_bg');
    gnbLiElements.forEach(function(gnbLiElement) {
        gnbLiElement.addEventListener('mouseenter', function() {
            this.parentNode.classList.add('active');
            subBgElement.classList.add('on');
        });
    });
    topHeadElement.addEventListener('mouseleave', function() {
        this.querySelector('.gnb').classList.remove('active');
        subBgElement.classList.remove('on');
    });
    /**
     * 모바일 햄버거 버튼 시작
     */
    const mbIconElement = document.querySelector('.mb_icon');
    const mobilePopupElement = document.querySelector('.mobile_popup');
    const closeElement = document.querySelector('.close');
    mbIconElement.addEventListener('click', function() {
        mobilePopupElement.classList.add('on');
        document.body.style.overflow = 'hidden';
    });
    closeElement.addEventListener('click', function() {
        mobilePopupElement.classList.remove('on');
        document.body.style.overflow = 'auto';
    });
    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        let mainHeight = document.querySelector('.main').offsetHeight;
        let topHeadElement = document.querySelector('.top_head');
        if (scroll > mainHeight) {
            topHeadElement.style.background = 'rgba(0, 0, 0, 0.7)';
        } else {
            topHeadElement.style.background = 'none';
        }
    });
    /**
     * 로그인 버튼 시작
     */
    const idParaElement = document.querySelector('.id_para');
    const pwParaElement = document.querySelector('.pw_para');
    const loginClassElement = document.querySelector('.login_class');
    const snsContsSecond = document.querySelector('.sns_conts:nth-child(2)');
    const modalWrap = document.querySelector('.modal_wrap');
    const btnClose = document.querySelector('.btn_close');
    let idInput, pwInput;
    snsContsSecond.addEventListener('click', function() {
        modalWrap.classList.add('on');
    });
    btnClose.addEventListener('click', function() {
        modalWrap.classList.remove('on');
    });
    function handleInput() {
        idInput = idParaElement.value;
        pwInput = pwParaElement.value;
        let koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if (koreanRegex.test(idInput)) {
            idParaElement.value = '';
        }
        if (idInput !== '' && pwInput !== '') {
            loginClassElement.classList.add('active');
        } else {
            loginClassElement.classList.remove('active');
        }
    }
    idParaElement.addEventListener('input', handleInput);
    pwParaElement.addEventListener('input', handleInput);
    loginClassElement.addEventListener('click', function() {
        idInput = idParaElement.value;
        pwInput = pwParaElement.value;
        switch (true) {
            case idInput === 'boysheep' && pwInput === '123':
                alert('가입된 아이디 입니다.');
                break;
            case idInput === 'boysheep' && pwInput !== '123':
                alert('비밀번호가 다릅니다.');
                break;
            case idInput !== 'boysheep':
                alert('회원이 아닙니다.');
                break;
            default:
                alert('회원이 아닙니다.');
        }
    });
    /**
     * gotop 버튼
     */
    const gotopElement = document.querySelector('.gotop');
    gotopElement.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    /**
     * movie tab
     */
    // const mTxtLiElements = document.querySelectorAll('.m_txt > li');
    // const mListElements = document.querySelectorAll('.m_list');
    // const arrowWrapElement = document.querySelector('.arrow_wrap');
    // mTxtLiElements.forEach(function(mTxtLiElement) {
    //     mTxtLiElement.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         let clickTab = this.querySelector('a').getAttribute('href');
    //         mListElements.forEach(function(mListElement) {
    //             mListElement.style.display = 'none';
    //         });
    //         arrowWrapElement.style.display = 'none';
    //         document.querySelector(clickTab).style.display = 'flex';
    //         mTxtLiElements.forEach(function(liElement) {
    //             liElement.classList.remove('active');
    //         });
    //         this.classList.add('active');
    //     });
    // });
    /**
     * 영화 슬라이드 시작
     */
    const slidesWrap1 = document.querySelector(".slides_wrap1");
    const mbr1 = document.querySelector(".mbr1");
    const mbl1 = document.querySelector(".mbl1");
    const slidesWrap2 = document.querySelector(".slides_wrap2");
    const mbr2 = document.querySelector(".mbr2");
    const mbl2 = document.querySelector(".mbl2");
    const slidesWrap3 = document.querySelector(".slides_wrap3");
    const mbr3 = document.querySelector(".mbr3");
    const mbl3 = document.querySelector(".mbl3");
    const slidesWrap4 = document.querySelector(".slides_wrap4");
    const mbr4 = document.querySelector(".mbr4");
    const mbl4 = document.querySelector(".mbl4");
    const movieSlidetab1 = new Swiper(slidesWrap1, {
        navigation: {
            nextEl: mbr1,
            prevEl: mbl1,
        },
        slidesPerView: 5,
        spaceBetween: 32,
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
        breakpoints: {
            1024: {
                freeMode: true,
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        }
    });
    const movieSlidetab2 = new Swiper(slidesWrap2, {
        navigation: {
            nextEl: mbr2,
            prevEl: mbl2,
        },
        slidesPerView: 5,
        spaceBetween: 32,
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                mbl2.style.display = 'none';
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndex1 = this.realIndex;
                if (window.innerWidth > 1024) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 왼쪽 버튼 숨기기
                        mbl2.style.display = 'none';
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        mbl2.style.display = 'block';
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        mbr2.style.display = 'none';
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        mbr2.style.display = 'block';
                    }
                } else {
                    if (this.isBeginning) {
                        mbl2.style.display = 'none';
                        mbr2.style.display = 'none';
                    } else {
                        mbl2.style.display = 'none';
                        mbr2.style.display = 'none';
                    }
                    if (this.isEnd) {
                        mbr2.style.display = 'none';
                        mbl2.style.display = 'none';
                    } else {
                        mbr2.style.display = 'none';
                        mbl2.style.display = 'none';
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
    const movieSlidetab3 = new Swiper(slidesWrap3, {
        navigation: {
            nextEl: mbr3,
            prevEl: mbl3,
        },
        slidesPerView: 5,
        spaceBetween: 32,
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                mbl3.style.display = 'none';
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndex1 = this.realIndex;
                if (window.innerWidth > 1024) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 왼쪽 버튼 숨기기
                        mbl3.style.display = 'none';
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        mbl3.style.display = 'block';
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        mbr3.style.display = 'none';
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        mbr3.style.display = 'block';
                    }
                } else {
                    if (this.isBeginning) {
                        mbl3.style.display = 'none';
                        mbr3.style.display = 'none';
                    } else {
                        mbl3.style.display = 'none';
                        mbr3.style.display = 'none';
                    }
                    if (this.isEnd) {
                        mbr3.style.display = 'none';
                        mbl3.style.display = 'none';
                    } else {
                        mbr3.style.display = 'none';
                        mbl3.style.display = 'none';
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
    const movieSlidetab4 = new Swiper(slidesWrap4, {
        navigation: {
            nextEl: mbr4,
            prevEl: mbl4,
        },
        slidesPerView: 5,
        spaceBetween: 32,
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                mbl4.style.display = 'none';
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndex1 = this.realIndex;
                if (window.innerWidth > 1024) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 왼쪽 버튼 숨기기
                        mbl4.style.display = 'none';
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        mbl4.style.display = 'block';
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        mbr4.style.display = 'none';
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        mbr4.style.display = 'block';
                    }
                } else {
                    if (this.isBeginning) {
                        mbl4.style.display = 'none';
                        mbr4.style.display = 'none';
                    } else {
                        mbl4.style.display = 'none';
                        mbr4.style.display = 'none';
                    }
                    if (this.isEnd) {
                        mbr4.style.display = 'none';
                        mbl4.style.display = 'none';
                    } else {
                        mbr4.style.display = 'none';
                        mbl4.style.display = 'none';
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
    const icons = Array.from(document.querySelectorAll('.ic1, .ic2, .ic3'));
    const views = Array.from(document.querySelectorAll('.vw1, .vw2, .vw3'));
    const videos = Array.from(document.querySelectorAll('.vod'));
    icons.forEach((icon, index) => {
        const view = views[index];
        const video = videos[index];
        icon.addEventListener('click', () => {
            view.style.display = 'block';
        });
        icon.addEventListener('click', () => {
            video.currentTime = 0;
            video.play();
        });
    });
    document.querySelectorAll('.vc1, .vc2, .vc3').forEach(function(element) {
        element.addEventListener('click', function() {
            const index = Array.from(document.querySelectorAll('.vc1, .vc2, .vc3')).indexOf(element);
            const view = views[index];
            const video = videos[index];
            view.style.display = 'none';
            video.currentTime = 0;
            video.pause();
        });
    });
    /**
     * play tab
     */
    const pTabElements = document.querySelectorAll('.p_tab > li > a');
    const pImgWrapElements = document.querySelectorAll('.p_img_wrap > div');
    pTabElements.forEach(function(pTabElement) {
        pTabElement.addEventListener('click', function(event) {
            event.preventDefault();
            pTabElements.forEach(function(tabElement) {
                tabElement.classList.remove('on');
            });
            this.classList.add('on');
            let index = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
            pImgWrapElements.forEach(function(imgWrapElement) {
                imgWrapElement.style.display = 'none';
            });
            pImgWrapElements[index].style.display = 'block';
        });
    });
    /**
     * 매거진 슬라이드
     */
    const personswiper1 = new Swiper(".maga1_sliderWrap", {
        navigation: {
            nextEl: ".si_right",
            prevEl: ".si_left",
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            480: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            }
        },
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                document.querySelector('.si_left').style.display = 'none';
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndexmini1 = this.realIndex;
                if (window.innerWidth > 480) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 첫 번째 슬라이드에 도달했을 때 왼쪽 버튼 숨기기
                        document.querySelector('.si_left').style.display = 'none';
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        document.querySelector('.si_left').style.display = 'block';
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        document.querySelector('.si_right').style.display = 'none';
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        document.querySelector('.si_right').style.display = 'block';
                    }
                } else {
                    if (this.isBeginning) {
                        document.querySelector('.si_left').style.display = 'none';
                        document.querySelector('.si_right').style.display = 'none';
                    } else {
                        document.querySelector('.si_left').style.display = 'none';
                        document.querySelector('.si_right').style.display = 'none';
                    }
                    if (this.isEnd) {
                        document.querySelector('.si_right').style.display = 'none';
                        document.querySelector('.si_left').style.display = 'none';
                    } else {
                        document.querySelector('.si_right').style.display = 'none';
                        document.querySelector('.si_left').style.display = 'none';
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
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            480: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            }
        },
        on: {
            init: function () {
                // 초기화될 때 왼쪽 버튼 숨기기
                document.querySelector('.si_left2').style.display = 'none';
            },
            slideChange: function () {
                // 현재 슬라이드 인덱스 가져오기
                let currentIndexmini2 = this.realIndex;
                if (window.innerWidth > 480) {
                    // 첫 번째 슬라이드에 도달했을 때
                    if (this.isBeginning) {
                        // 첫 번째 슬라이드에 도달했을 때 왼쪽 버튼 숨기기
                        document.querySelector('.si_left2').style.display = 'none';
                    } else {
                        // 첫 번째 슬라이드가 아닌 경우 왼쪽 버튼 보이기
                        document.querySelector('.si_left2').style.display = 'block';
                    }
                    // 마지막 슬라이드에 도달했을 때
                    if (this.isEnd) {
                        // 오른쪽 버튼 숨기기
                        document.querySelector('.si_right2').style.display = 'none';
                    } else {
                        // 마지막 슬라이드가 아닌 경우 오른쪽 버튼 보이기
                        document.querySelector('.si_right2').style.display = 'block';
                    }
                } else {
                    if (this.isBeginning) {
                        document.querySelector('.si_left2').style.display = 'none';
                        document.querySelector('.si_right2').style.display = 'none';
                    } else {
                        document.querySelector('.si_left2').style.display = 'none';
                        document.querySelector('.si_right2').style.display = 'none';
                    }
                    if (this.isEnd) {
                        document.querySelector('.si_right2').style.display = 'none';
                        document.querySelector('.si_left2').style.display = 'none';
                    } else {
                        document.querySelector('.si_right2').style.display = 'none';
                        document.querySelector('.si_left2').style.display = 'none';
                    }
                }
            },
        }
    });
    /**
     * 이벤트 슬라이드
     */
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
    const rollingList = document.querySelector('.rolling_wrap');
    rollingList.addEventListener('mouseenter', function () {
        event.autoplay.stop();
    });
    rollingList.addEventListener('mouseleave', function () {
        event.autoplay.start();
    });
});
$(document).ready(function(){
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
});
// 푸터 계열사 사이트 이동
function goFamilySite() {
    let famulySiteURL = document.getElementById('familysite').value;  
    if (famulySiteURL != "") {
        let win = window.open(famulySiteURL, 'winFamilySite');
        win.focus();
    }
}
// 모바일 푸터 캐러셀
function fnFooter() { 
    const target = document.querySelector('.btn_footerInfo').parentNode;
    if (!target.classList.contains('active')) {
        const siblings = Array.from(target.parentNode.children).filter(child => child !== target);
        siblings.forEach(sibling => {
            sibling.style.display = 'block';
        });
        target.classList.add('active');
    } else {
        const siblings = Array.from(target.parentNode.children).filter(child => child !== target);
        siblings.forEach(sibling => {
            sibling.style.display = 'none';
        });
        target.classList.remove('active');
    }
}