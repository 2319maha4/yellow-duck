// stiky header 
$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 200) $(".header-content").removeClass('fixed-header');
    else $(".header-content").addClass('fixed-header');
});

// banner
$('.banner-carousel').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true
  });