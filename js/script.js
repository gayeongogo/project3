/* 모바일메뉴 */
//열림
$('.appbarBt').click(function(){
    $('.mobile-menu').stop().animate({left:0},500);
});

//닫힘
$('.appbarCloseBt').click(function(){
    $('.mobile-menu').stop().animate({left:'-100%'},500);
});