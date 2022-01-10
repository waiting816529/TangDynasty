let title=document.getElementById('title');
let rfa=document.getElementById('rfa');
let lfa=document.getElementById('lfa');
let btn=document.getElementById('btn');
let deco=document.getElementById('intro_deco');

window.addEventListener('scroll',function(){
    let value=window.scrollY;
    rfa.style.left=value*0.8+'px';
    lfa.style.left=value*-0.8+'px';
    title.style.top=value*-0.1+'px';
});

window.onload = function() {
    if(document.body.scrollTop > 0) {
        console.log(1);
        window.scrollTo(0, -1);
        document.body.scrollTop = 0;
    }
    window.scrollTo(0, -1);
    document.body.scrollTop = 0;
};

$(window).on("load", function () {
    $(".loading_wrapper").fadeOut("slow");
});

$('.card1').hover(function(){
    if($(this).hasClass("active")){
        $('.card1 .waiting_task').slideUp(function(){
            $('.card1').removeClass("active");
        });
    }else{
        $('.card1').addClass("active");
        $('.card1 .waiting_task').stop().slideDown();
    }
});

$('.card2').hover(function(){
    if($(this).hasClass("active")){
        $('.card2 .jiayu_task').slideUp(function(){
            $('.card2').removeClass("active");
        });
    }else{
        $('.card2').addClass("active");
        $('.card2 .jiayu_task').stop().slideDown();
    }
});

$('.card3').hover(function(){
    if($(this).hasClass("active")){
        $('.card3 .xioching_task').slideUp(function(){
            $('.card3').removeClass("active");
        });
    }else{
        $('.card3').addClass("active");
        $('.card3 .xioching_task').stop().slideDown();
    }
});

$('.card4').hover(function(){
    if($(this).hasClass("active")){
        $('.card4 .jingwen_task').slideUp(function(){
            $('.card4').removeClass("active");
        });
    }else{
        $('.card4').addClass("active");
        $('.card4 .jingwen_task').stop().slideDown();
    }
});
