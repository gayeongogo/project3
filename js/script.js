/* 모바일메뉴 */
//열림
$('.appbarBt').click(function(){
    $('.mobile-menu').stop().animate({left:0},500);
});

//닫힘
$('.appbarCloseBt').click(function(){
    $('.mobile-menu').stop().animate({left:'-100%'},500);
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
//banner slide
const slideArea=$('.main-rolling-area > ul'); //이게 움직임(대상)
const leftBtn=$('.leftBtn'); //왼쪽가는
const slideList=$('.main-rolling-area > ul > li');
const rightBtn=$('.rightBtn'); //오른쪽가는
const slideWidth=slideList.width();
let setIntervalId //마우스 올리면 멈추기 위한 clearInterval 쓰기 위해 필요

rollingSlide();
function rollingSlide(){
    // setIntervalId=setInterval(() => {}); //아래랑 똑같은거, allow function
    setIntervalId=setInterval(function(){
        slideArea.stop().animate({left:-(slideWidth)},1000,function(){
            $('.main-rolling-area > ul > li:first').insertAfter($('.main-rolling-area > ul > li:last')) //움직인 첫번째를 뒤로보내기
            slideArea.css({left: 0}); //다시 left 0으로 붙여주어 자연스럽게 움직이게 만듦
        })
    },2000); //2초마다 움직임
};

//마우스 올리면 슬라이드 멈춤
//마우스 빠져나오면 슬라이드 움직임
leftBtn.hover(function(){
    clearInterval(setIntervalId);
},function(){
    rollingSlide();
})

rightBtn.hover(function(){
    clearInterval(setIntervalId);
},function(){
    rollingSlide();
})

slideArea.hover(function(){
    clearInterval(setIntervalId);
},function(){
    rollingSlide();
})

//오른쪽 버튼을 누르면 오른쪽으로 한 칸 이동
rightBtn.click(function(){
    slideArea.stop().animate({left:-(slideWidth)},500,function(){ //0.5초간
        $('.main-rolling-area > ul > li:first').insertAfter($('.main-rolling-area > ul > li:last')) //움직인 첫번째를 뒤로보내기
        slideArea.css({left: 0}); //다시 left 0으로 붙여주어 자연스럽게 움직이게 만듦
    })
});

//왼쪽 버튼을 누르면 왼쪽으로 한 칸 이동 *주의
leftBtn.click(function(){
    $('.main-rolling-area > ul > li:last').insertBefore($('.main-rolling-area > ul > li:first')) //먼저 맨 뒤에 있는 애를 처음으로 가져오기
    slideArea.css({left:-(slideWidth)}).stop().animate({left:0},500)
});