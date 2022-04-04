$(document).ready(function () {
  const $vsl_slides = $('.vsl_slides'),
    $vsl_slide = $vsl_slides.find('div'),
    $aw_left = $('.aw_left'),
    $aw_right = $('.aw_right'),
    slideCount = $vsl_slide.length,
    $indicators = $('.indicators'),
    $allow = $('.allow');

  const $news_list_slides = $('.news_list_slides'),
    $btn_left = $('.btn_left'),
    $btn_right = $('.btn_right');
  const $car_list_slides = $('.car_list_slides'),
    $button_left = $('.button_left'),
    $button_right = $('.button_right');



  let currentPt = 0;


  $('.gnb_left>li:first-child').mouseenter(function () {
    $(this).find('.ctb').stop();
    $('.ctb').show();
  })
  $('.ctb').mouseleave(function () {
    $('.ctb').stop();
    $('.ctb').hide();
  })
  $('.gnb_left>li:nth-child(2)').mouseenter(function () {
    $('.ctb').stop().slideUp(200);
    $('.ctb').hide();
  })
  $aw_left.click(function () {
    gotoSlider(currentPt - 1);
    if (currentPt === 0) {
      $aw_left.addClass('in')
    } else {
      $aw_right.removeClass('in');
      $aw_left.removeClass('in');
      gotoSlider(currentPt);
    }
  })
  $aw_right.click(function () {
    gotoSlider(currentPt + 1);
    if (currentPt < 2) {
      $aw_right.removeClass('in');
      $aw_left.removeClass('in');
      gotoSlider(currentPt);
    } else {
      $aw_right.addClass('in');
    }
  })
  function gotoSlider(W) {
    $vsl_slides.animate({ 'left': -100 * W + '%' }, 700);
    currentPt = W;
  }



  // news 슬라이드
  $btn_left.click(function () {
    gotosliderpt2(currentPt - 1);
    if (currentPt === 0) {
      $btn_left.addClass('active')
    } else {
      $btn_right.removeClass('active');
      $btn_left.removeClass('active');
      gotosliderpt2(currentPt);
    }
  })
  $btn_right.click(function () {
    gotosliderpt2(currentPt + 1);
    if (currentPt <= 1) {
      $btn_right.removeClass('active');
      $btn_left.removeClass('active');
      gotosliderpt2(currentPt);
    } else {
      $btn_right.addClass('active');
    }
  })
  function gotosliderpt2(R) {
    $news_list_slides.css('left', (-50 * R) + '%');
    currentPt = R;
  }
  // car_list 슬라이드
  $button_left.click(function () {
    gotosliderpt3(currentPt - 1);
    if (currentPt === 0) {
      $button_left.addClass('take')
    } else {
      $button_right.removeClass('take');
      $button_left.removeClass('take');
      gotosliderpt3(currentPt);
    }
  })
  $button_right.click(function () {
    gotosliderpt3(currentPt + 1);
    if (currentPt < 2) {
      $button_right.removeClass('take');
      $button_left.removeClass('take');
      gotosliderpt3(currentPt);
    } else {
      $button_right.addClass('take');
    }
  })
  function gotosliderpt3(i) {
    $car_list_slides.css('left', (-33.3333 * i) + '%');
    currentPt = i;
  }

  // 차량 모델 탭

  const car_pic_top = $('.car_pic_top'),
    car_pic_btm = $('.car_pic_btm');
  let car_wrap = $('.car_wrap>div');

  car_wrap.eq(0).click(function () {
    car_wrap.removeClass('on')
    $(this).addClass('on')
    $('.car_pic_top,.car_pic_btm').show()
  });
  car_wrap.eq(1).click(function () {
    car_wrap.removeClass('on')
    $(this).addClass('on')
    car_pic_top.hide()
    car_pic_btm.show()
  });
  car_wrap.eq(2).click(function () {
    car_wrap.removeClass('on')
    $(this).addClass('on')
    car_pic_btm.hide()
    car_pic_top.show()
  });


})