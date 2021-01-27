$(document).ready(function () {
    $('.rev_slider').slick({
         dots: false,
    speed: 300,
    arrows: false,
    infinite: true,
   
  });
  $('.slider-second').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.rev_slider',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    variableWidth:true,
    arrows: true,

  });

});