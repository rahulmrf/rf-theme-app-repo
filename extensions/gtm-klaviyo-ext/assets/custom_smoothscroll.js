/* this is for smoth scroll */
$(document).ready(function() {
  var additinalHeight = 0;

  $('.rf_main_wrapper_nav a').on('click', function(evt) {
    if ($('#header:visible').length) {
      additinalHeight = $('#header:visible').outerHeight();
    }
    
    if ($('.rf_main_wrapper_nav:visible').length) {
      additinalHeight = $('.rf_main_wrapper_nav:visible').outerHeight();
    }

    if ($(this).attr('href').indexOf("#main_signup_wrapper") != -1 ) {
      
      if ($('#main_signup_wrapper').length > 0) {
        evt.preventDefault();
        $('html, body').animate(
          { scrollTop: $('#main_signup_wrapper').offset().top - additinalHeight},
          500
        );
      }

    }
  });
});
