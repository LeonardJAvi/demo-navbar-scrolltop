$(document).ready(function(){

 var $burguer = document.getElementById('burguer');
 var $menu = document.getElementById('menu');
 function toggleMenu(){
    $menu.classList.toggle('active');
    $burguer.classList.toggle('is-active');
 };
 $burguer.addEventListener('click',toggleMenu);

    $(".single-item").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    adaptiveWidth: true,
    centerMode: true,
    infinite: true,
    speed: 800,
    cssEase: 'linear',
    centerPadding:false,
    });
});

