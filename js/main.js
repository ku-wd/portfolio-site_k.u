//ハンバーガーメニュー（クリック時）
$(function () {
  $('.js-hamburger').on('click', function () {
    $('.js-hamburger').toggleClass('close');
    $('.header__nav').toggleClass('fade');
  });
});






// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
});

// ズームイン
function zoomIn() {

  $('.js-zoomIn').each(function(){
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if(scroll > position - windowHeight + 100){
    $(this).addClass('zoomIn');
    }else{
    $(this).removeClass('zoomIn');
    }
  });
}

$(window).scroll(function(){
  zoomIn();
});

// フェードレフト
function fadeLeft() {

  $('.js-fadeLeft').each(function(){
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if(scroll > position - windowHeight + 100){
    $(this).addClass('fadeLeft');
    }else{
    $(this).removeClass('fadeLeft');
    }
  });
}

$(window).scroll(function(){
  fadeLeft();
});

// フェードライト
function fadeRight() {

  $('.js-fadeRight').each(function(){
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if(scroll > position - windowHeight + 100){
    $(this).addClass('fadeRight');
    }else{
    $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function(){
  fadeRight();
});

// フェードアップ
function fadeUp() {

  $('.js-fadeUp').each(function(){
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if(scroll > position - windowHeight + 100){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
  });
}

$(window).scroll(function(){
  fadeUp();
});


// PageTop
$('.js-pagetop').on('click', function(){
  $("html, body").animate({
      scrollTop: 0
  }, 500);
});