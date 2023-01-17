/* 모바일메뉴 */
//열림
$('.appbarBt').click(function(){
    $('.mobile-menu').stop().animate({left:0},500);
});

//닫힘
$('.appbarCloseBt').click(function(){
    $('.mobile-menu').stop().animate({left:'-100%'},500);
});

/* 좌측브랜드 */
$('#icebisket').hover(function(){
  $(this).stop().animate({left:'-80px'},500)
},function(){
  $(this).stop().animate({left:'-258px'},500)
});
$('#nununu').hover(function(){
  $(this).stop().animate({left:'-80px'},500)
},function(){
  $(this).stop().animate({left:'-258px'},500)
});

/* 로고이미지 */
$('.topMark').hide()
$('.topLogo').hover(function(){
  $('.topMark').show();
},function(){
  $('.topMark').hide()
})

/* 메인 슬라이더 */
$('.bxslider').bxSlider({
  mode: 'fade',
  auto: true,
  speed: 500,
  pause: 4000,
  pager: false,
});

let prevBtn=$('.bx-wrapper .bx-prev')
let nextBtn=$('.bx-wrapper .bx-next')

$('.bx-wrapper img').hover(function(){
  $(prevBtn).css({opacity:1, left:'30px'});
  $(nextBtn).css({opacity:1, right:'30px'});
},function(){
  $(prevBtn).css({opacity:0.4, left:'20px'});
  $(nextBtn).css({opacity:0.4, right:'20px'});
});

$(prevBtn).hover(function(){
  $(this).css({opacity:1, left: '35px'});
  $(nextBtn).css({opacity:1, right:'30px'});
  
},function(){
  $(this).css({opacity:0.4, left:'20px'});
});

$(nextBtn).hover(function(){
  $(this).css({opacity:1, right: '35px'});
  $(prevBtn).css({opacity:1, left:'30px'});
  
},function(){
  $(this).css({opacity:0.4, right:'20px'});
});

/* 롤링 */
$(function(){
  $('#slider-div').slick({
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite : true, 	//무한 반복 옵션	 
    slidesToShow : 4,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,			// 자동 스크롤 사용 여부
    autoplaySpeed : 2000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,		// 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
    nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable : false, 	//드래그 가능 여부 
    
    responsive: [ // 반응형 웹 구현 옵션
      {  
        breakpoint: 1000,
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow:3 
        } 
      },
      { 
        breakpoint: 760,
        settings: {	
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow:2 
        } 
      }
    ]
  });
});

/* 메인콘탠츠 탭 */

//auto
let tabs = $('.tab-product-set ul li');
var timerId = 0;

timerId = setInterval(function() {
let onTab = tabs.filter('.on');
var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
nextTab.click();
}, 3000);
  
$(".tab-product-conts").mouseleave(function () {
timerId = setInterval(function() {
var onTab = tabs.filter('.on');
var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
nextTab.click();
}, 3000);        
    
});
$(".tab-product-conts").mouseenter(function () {
    clearInterval(timerId);
});

//click
$(".tab-product-list").hide();
$(".tab-product-list:first").show();
$(".tab-product-set ul li").click(function (e) {
  e.preventDefault();
    $(".tab-product-set ul li").removeClass("on");
    $(this).addClass("on");
    $(".tab-product-list").hide()
    var activeTab = $(this).find('a').attr("href");
    $( activeTab).fadeIn()
});

/* 메인배너 텍스트 */