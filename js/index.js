$(function(){
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination:'.swiper-pagination'
    });


var mySwiper2 = new Swiper ('#banner2', {
    direction: 'vertical',
    loop: true
});

var lunbo = new Swiper ('#lunbo', {
    direction: 'horizontal',
    loop: false,
    slidesPerView : 2.1
});

$('.fenlei').on('touchstart',function(){
    $('.zhegai').addClass('chu');
    $('.tanchubox').css('left','0');
});

$('.huiqu').on('touchstart',function(){
    $('.zhegai').delay(500).queue(function () {
       $('.zhegai').removeClass('chu').dequeue();
    });
    $('.tanchubox').css('left','-3.4rem');
 })



    var bt=$('.banner-top');
    var lei=$('.lei-box');
    var top=lei.get(0).offsetTop;
    window.onscroll=function(){
        var stop=document.body.scrollTop||document.documentElement.scrollTop;
        if(stop>top){
            bt.addClass('bianse');
        }
        if(stop<top){
            bt.removeClass('bianse');
        }
    };

$('.tanchu-left').on('touchstart','.tanchu-leftinner',function(){
$(this).closest('.tanchu-left').find('.tanchu-leftinner').removeClass('bianbai');
    $(this).addClass('bianbai');
    var t=$(this).index();
    $(".tanchu-right").siblings(".show").removeClass('show');
    $('.tanchu-right').eq($(this).index()).addClass('show');
});

    $('.tanchu-left').on('mousedown','.tanchu-leftinner',false);









});