//standard slider
const swiper = new Swiper('.standard-slider', {
  pagination: {
    el: '.standard-slider-pagination',
    clickable: true
  },
  speed: 1000,
  navigation: {
    nextEl: '.standard-slider-next',
    prevEl: '.standard-slider-prev',
  },
});

//mask
$(document).ready(function() {
  $('.phone-mask').mask('+7(000)000-00-00');
});

//toggle mobile menu
$('.toggle-mobile-menu').click(function () {
  toggleMobileMenu();
});

$('.close-mobile-menu').click(function () {
  closeMobileMenu();
});

$('.mobile-menu-overlay').click(function () {
  closeMobileMenu();
});

function toggleMobileMenu() {
  $('body').toggleClass('scroll-locked');
  $('.toggle-mobile-menu').toggleClass('active');
  $('.mobile-menu').toggleClass('show');
  $('.mobile-menu-overlay').toggleClass('show');
}

$(document).ready(function () {
  closeMobileMenu();
})
function closeMobileMenu() {
  $('body').removeClass('scroll-locked');
  $('.toggle-mobile-menu').removeClass('active');
  $('.mobile-menu').removeClass('show');
  $('.mobile-menu-overlay').removeClass('show');
}

//review slider
const reviewSlider = new Swiper('.review-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.review-slider-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  }
});

//media modal
$(document).ready(function(){
  const url = $("#mediaModal iframe").attr('src');
  $("#mediaModal").on('hide.bs.modal', function(){
    $("#mediaModal iframe").attr('src', '');
  });

  $("#mediaModal").on('show.bs.modal', function(){
    $("#mediaModal iframe").attr('src', url);
  });
});

//animations
jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  let doAnimations = function() {

    // Calc current offset and get all animatables
    let offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
      let $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});