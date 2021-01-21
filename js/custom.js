$(document).ready(function(){
  $('.slider').slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/arrow-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/arrow-right.png'>",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode:true,
  });  
});

