$(document).ready(function() {
    $('.full-slider').slick({
        arrows: true,
        prevArrow: $('#fullSliderPrevBtn'),
        nextArrow: $('#fullSliderNextBtn'),
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        speed: 1000,
        dots: true
    });
    $('.section--mini-slider__content-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('#miniSliderPrevBtn'),
        nextArrow: $('#miniSliderNextBtn'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }

        ]
    });
    
    $('.button--popup').click(function(){
        $('#popUp').css({"display":"flex"})
    });
    
    $('#bigClosePopUp').click(function(){
        $('#popUp').css({"display":"none"})
    });
    
    $('#smallClosePopUp').click(function(){
        $('#popUp').css({"display":"none"})
    });
    
    $('#adaptiveMenuBtn').click(function(){
        $('#navigation').toggleClass('active')
    });
    
    $('.link--nav').click(function(){
        $('#navigation').toggleClass('active')
    });
    
    $('.link--nav').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
});
