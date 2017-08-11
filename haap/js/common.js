// Mobile Menu
if($(window).width() <= 991){
 $("#menu").mmenu({
   "offCanvas": {
     "position": "right"
   }
 });
}

 // Header Fixed   
 $(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height >3) {
    $('header').addClass('header-fixed');
  }
  else if (height == 0) {
    $('header').removeClass('header-fixed');
  }
});  












