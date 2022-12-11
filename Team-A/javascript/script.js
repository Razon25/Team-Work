// SCREENSHOT SLIDER JS
$(document).ready(function(){
    $('.slide_container').slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 2000,
        focusOnSelect:true,
        centerMode: true,
        centerPadding: true,
    });
  });

// TESTIMONIAL SLIDER JS
  $(document).ready(function(){
    $('.testimonial_slider').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade:true,
    });
  });

// TEAM SLIDER JS
  $(document).ready(function(){
    $('.team_slide_container').slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10,
        speed: 2000,
        focusOnSelect:true,
    });
  });

// COUNTER UP JS
$('.counter').counterUp({
  delay: 5,
  time: 2000,
});

// WOW JS
new WOW().init();

 /*-------------------------------
     back to top
 ------------------------------*/
$(document).on('click', '.back-top', function(){
  $("html,body").animate({
    scrollTop: 0
  }, 200);
});



// VENO BOX
new VenoBox({
  selector: '.my-video-links',
});