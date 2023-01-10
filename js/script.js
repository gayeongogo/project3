/* 모바일메뉴 */
//열림
$('.appbarBt').click(function(){
    $('.mobile-menu').stop().animate({left:0},500);
});

//닫힘
$('.appbarCloseBt').click(function(){
    $('.mobile-menu').stop().animate({left:'-100%'},500);
});

/* 메인 슬라이더 */
$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    auto: true,
    speed: 500,
    pause: 4000,
    slideWidth: 600
  });
});