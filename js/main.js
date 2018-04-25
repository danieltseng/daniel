$(document).ready(function(){
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });
});

// $(".nav-top .menu #wrapper").click(function() {
//     var $ul = $(this).parent("nav").children("ul");
// 		// if section is already active and clicked again
// 		if ( $ul.hasClass("nav-bg") ) {
// 			$ul.removeClass("nav-bg");
// 			$ul.slideUp();
// 		} else {
// 		// if section is made active
// 			$ul.addClass("nav-bg");
// 			$ul.slideDown();
// 			return false;
// 		}
// 	}); // end click event handler

  $("#wrapper").click( function() {
	$(".menu").toggleClass("close");
  var $ul = $(this).parent("nav").children("ul");
  // if section is already active and clicked again
  if ( $ul.hasClass("nav-bg") ) {
    $ul.removeClass("nav-bg");
    $ul.slideUp();
  } else {
  // if section is made active
    $ul.addClass("nav-bg");
    $ul.slideDown();
    return false;
  }
});
