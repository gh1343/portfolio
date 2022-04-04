$(document).ready(function () {
  $('.gnb').mouseenter(function () {
    $(this).find('.sub').stop().slideDown();
    $('.sub_bg').show();
  }).mouseleave(function () {
    $('.gnb>li').find('.sub').stop().slideUp(300);
    $('.sub_bg').hide();
  })
  $('.mb_icon').click(function () {
    $('.gnb,.sub,.sns,.sub_bg').toggleClass('on');
    $(this).toggleClass('close');
  })
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (scroll > 1000) {
      $('header').css('background', 'rgba(0, 0, 0, 0.7)')
    } else {
      $('header').css('background', 'none')
    }
  });
  // movie
  $('.m_list a').mouseenter(function () {
    $(this).find('div').stop().fadeIn();
  }).mouseleave(function () {
    $(this).find('div').stop().fadeOut(300);
  })
  // btn
  $('.btn_2').click(function () {
    $('tbc').removeClass('active');
    $('.tab_conts1').addClass('active');
  })
  $('.sns_conts:nth-child(2)').click(function () {
    $('.modal_wrap').css('display', 'block')
  })

  $('.btn_close').click(function () {
    $('.modal_wrap').css('display', 'none')
  })
  // gotop
  $('.gotop').click(function () {
    $('html,body').animate({ 'scrollTop': 0 })
  })
  //movie tab
  const $mTxtLi = $('.m_txt>li'),
    $mTxt1 = $('.m_txt>li:first-child'),
    $mTxt2 = $('.m_txt>li:nth-child(2)'),
    $mTxt3 = $('.m_txt>li:nth-child(3)'),
    $mTxt4 = $('.m_txt>li:nth-child(4)'),
    $mList1 = $('.m_list_wrap>.m_list:first-child'),
    $mList2 = $('.m_list_wrap>.m_list:nth-child(2)'),
    $mList3 = $('.m_list_wrap>.m_list:nth-child(3)'),
    $mList4 = $('.m_list_wrap>.m_list:nth-child(4)');

  $mTxtLi.click(function (e) {
    e.preventDefault();
    let clickTab = $(this).find('a').attr('href');
    $('.m_list').css('display', 'none')
    $(clickTab).css('display', 'flex')
  })

  // play
  const $ic1 = $('.ic1'),
    $ic2 = $('.ic2'),
    $ic3 = $('.ic3'),
    $vw1 = $('.vw1'),
    $vw2 = $('.vw2'),
    $vw3 = $('.vw3'),
    $vd1 = $('.vd1'),
    $vd2 = $('.vd2'),
    $vd3 = $('.vd3'),
    $vc1 = $('.vc1'),
    $vc2 = $('.vc2'),
    $vc3 = $('.vc3');

  $ic1.click(function () {
    $vw1.css('display', 'block')
  })
  $vc1.click(function () {
    $vw1.css('display', 'none')
  })
  $ic1.on('click', function () {
    let vid1 = $('.vod').get(0);
    vid1.currentTime = 0;
    vid1.play();
  });
  $vc1.on('click', function () {
    let vid1 = $('.vod').get(0);
    vid1.currentTime = 0;
    vid1.pause();
  });
  $ic2.click(function () {
    $vw2.css('display', 'block')
  })
  $vc2.click(function () {
    $vw2.css('display', 'none')
  })
  $ic2.on('click', function () {
    let vid2 = $('.vod').get(1);
    vid2.currentTime = 0;
    vid2.play();
  });
  $vc2.on('click', function () {
    let vid2 = $('.vod').get(1);
    vid2.currentTime = 0;
    vid2.pause();
  });
  $ic3.click(function () {
    $vw3.css('display', 'block')
  })
  $vc3.click(function () {
    $vw3.css('display', 'none')
  })
  $ic3.on('click', function () {
    let vid3 = $('.vod').get(2);
    vid3.currentTime = 0;
    vid3.play();
  });
  $vc3.on('click', function () {
    let vid3 = $('.vod').get(2);
    vid3.currentTime = 0;
    vid3.pause();
  });

  // play tab
  const contp = $('.p_img_wrap>div');
  let $Ptab = $('.p_tab>li');

  $Ptab.eq(0).click(function () {
    $Ptab.removeClass('on')
    $(this).addClass('on')
    contp.hide()
    $('.first').show()
  });
  $Ptab.eq(1).click(function () {
    $Ptab.removeClass('on')
    $(this).addClass('on')
    contp.hide()
    $('.second').show()
  });
  $Ptab.eq(2).click(function () {
    $Ptab.removeClass('on')
    $(this).addClass('on')
    contp.hide()
    $('.third').show()
  });
  // tab
  const
    // 누르는거
    $txtH = $('.tab_txt>h4'),
    // 보여지는거
    $tcA = $('.tab_conts>a');

  $txtH.eq(0).click(function () {
    $txtH.removeClass('up')
    $(this).addClass('up')
    $tcA.show()
  })
  $txtH.eq(1).click(function () {
    $txtH.removeClass('up')
    $(this).addClass('up')
    $tcA.hide()
    $('.pre').show()
  })
  $txtH.eq(2).click(function () {
    $txtH.removeClass('up')
    $(this).addClass('up')
    $tcA.hide()
    $('.eve').show()
  })




  // // movie 슬라이드
  const $m_list = $('.m_list'),
    $m_button_left = $('.m_button_left'),
    $m_button_right = $('.m_button_right');

  const $maga1_slides = $('.maga1_slides'),
    $si_left1 = $('.si_left'),
    $si_right1 = $('.si_right');

  const $maga2_slides = $('.maga2_slides'),
    $si_left2 = $('.si_left2'),
    $si_right2 = $('.si_right2');

  $(window).resize(function () {
    let win = $(this);
    winWid = win.width(),
      currentPt = 0;
    // 슬라이더1
    $si_left1.click(function () {
      gotosliderpt1(currentPt - 1);

      if (currentPt === 0) {
        $si_left1.addClass('take')
      } else {
        $si_right1.removeClass('take');
        $si_left1.removeClass('take');
        gotosliderpt1(currentPt);
      }

    })
    $si_right1.click(function () {
      gotosliderpt1(currentPt + 1);
      if (winWid < 1920) {
        if (currentPt < 3) {
          $si_right1.removeClass('take');
          $si_left1.removeClass('take');
          gotosliderpt1(currentPt);
        } else {
          $si_right1.addClass('take');
        }
      }
      if (winWid < 960) {
        if (currentPt < 4) {
          $si_right1.removeClass('take');
          $si_left1.removeClass('take');
          gotosliderpt1(currentPt);
        } else {
          $si_right1.addClass('take');
        }
      }
      if (winWid < 768) {
        if (currentPt < 4) {
          $si_right1.removeClass('take');
          $si_left1.removeClass('take');
          gotosliderpt1(currentPt);
        } else {
          $si_right1.addClass('take');
        }
      }
      if (winWid < 486) {
        if (currentPt < 5) {
          $si_right1.removeClass('take');
          $si_left1.removeClass('take');
          gotosliderpt1(currentPt);
        } else {
          $si_right1.addClass('take');
        }
      }

    })
    function gotosliderpt1(W) {
      if (winWid < 960) {
        $maga1_slides.css('left', (-50 * W) + '%');
        currentPt = W;
      } else {
        $maga1_slides.css('left', (-33.3333 * W) + '%');
        currentPt = W;
      }
      if (winWid < 768) {
        $maga1_slides.css('left', (-50 * W) + '%');
        currentPt = W;
      }
      if (winWid < 486) {
        $maga1_slides.css('left', (-100 * W) + '%');
        currentPt = W;
      }
    }
    // 슬라이더 2
    $si_left2.click(function () {
      gotosliderpt2(currentPt - 1);

      if (currentPt === 0) {
        $si_left2.addClass('in')
      } else {
        $si_right2.removeClass('in');
        $si_left2.removeClass('in');
        gotosliderpt2(currentPt);
      }

    })
    $si_right2.click(function () {
      gotosliderpt2(currentPt + 1);
      if (winWid < 1920) {
        if (currentPt < 3) {
          $si_right2.removeClass('in');
          $si_left2.removeClass('in');
          gotosliderpt2(currentPt);
        } else {
          $si_right2.addClass('in');
        }
      }
      if (winWid < 960) {
        if (currentPt < 4) {
          $si_right2.removeClass('in');
          $si_left2.removeClass('in');
          gotosliderpt2(currentPt);
        } else {
          $si_right2.addClass('in');
        }
      }
      if (winWid < 768) {
        if (currentPt < 4) {
          $si_right2.removeClass('in');
          $si_left2.removeClass('in');
          gotosliderpt2(currentPt);
        } else {
          $si_right2.addClass('in');
        }
      }
      if (winWid < 486) {
        if (currentPt < 5) {
          $si_right2.removeClass('in');
          $si_left2.removeClass('in');
          gotosliderpt2(currentPt);
        } else {
          $si_right2.addClass('in');
        }
      }

    })
    function gotosliderpt2(R) {
      if (winWid < 960) {
        $maga2_slides.css('left', (-50 * R) + '%');
        currentPt = R;
      } else {
        $maga2_slides.css('left', (-33.3333 * R) + '%');
        currentPt = R;
      }
      if (winWid < 768) {
        $maga2_slides.css('left', (-50 * R) + '%');
        currentPt = R;
      }
      if (winWid < 486) {
        $maga2_slides.css('left', (-100 * R) + '%');
        currentPt = R;
      }
    }

    $m_button_left.click(function () {
      gotosliderpt(currentPt - 1);
      if (currentPt === 0) {
        $m_button_left.addClass('switch')
      } else {
        $m_button_right.removeClass('switch');
        $m_button_left.removeClass('switch');
        gotosliderpt(currentPt)
      }

    })
    $m_button_right.click(function () {
      gotosliderpt(currentPt + 1);
      if (winWid < 1920) {
        if (currentPt < 3) {
          $m_button_right.removeClass('switch');
          $m_button_left.removeClass('switch');
          gotosliderpt(currentPt);
        } else {
          $m_button_right.addClass('switch');
        }
      }
      if (winWid < 960) {
        if (currentPt < 4) {
          $m_button_right.removeClass('switch');
          $m_button_left.removeClass('switch');
          gotosliderpt(currentPt);
        } else {
          $m_button_right.addClass('switch');
        }
      }
      if (winWid < 768) {
        if (currentPt < 5) {
          $m_button_right.removeClass('switch');
          $m_button_left.removeClass('switch');
          gotosliderpt(currentPt);
        } else {
          $m_button_right.addClass('switch');
        }
      }
      if (winWid < 486) {
        if (currentPt < 7) {
          $m_button_right.removeClass('switch');
          $m_button_left.removeClass('switch');
          gotosliderpt(currentPt);
        } else {
          $m_button_right.addClass('switch');
        }
      }

    })
    function gotosliderpt(i) {
      if (winWid < 960) {
        $m_list.css('left', (-25 * i) + '%');
        currentPt = i;
      } else {
        $m_list.css('left', (-20 * i) + '%');
        currentPt = i;
      }
      if (winWid < 768) {
        $m_list.css('left', (-33.3333 * i) + '%');
        currentPt = i;
      }
      if (winWid < 486) {
        $m_list.css('left', (-100 * i) + '%');
        currentPt = i;
      }
    }

  }).resize();













})