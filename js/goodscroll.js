// ========== 9. START SCROLLTO SCRIPT ========== //

     (function($) { "use strict";

$("a.scrollto[href^='#']").on('click', function(e) {



   // prevent default anchor click behavior

   e.preventDefault();



   // store hash

   var hash = this.hash;



   // animate

   $('html, body').stop().animate({

       scrollTop: $(hash).offset().top -30}, 1200, 'easeInOutExpo');



});

 })(jQuery);

 // ========== END SCROLL TO SCRIPT ========== //