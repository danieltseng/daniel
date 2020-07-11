window.onload = function(){

$(document).ready(function(){
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });
    if(location.pathname.slice(-10) == 'index.html'){
      $('#link_portfolio').css('color','#323A3B');
    }else{
      $('#link_portfolio').css('color','#ADADAD');
    }
    if(location.pathname.slice(-10) == 'about.html'){
      $('#link_about').css('color','#323A3B');
    }else{
      $('#link_about').css('color','#ADADAD');
    }
  console.log('pathname = ' + location.pathname.slice(-10));
    
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

//text machine
var theater = theaterJS()
  
  theater
    .on('type:start, erase:start', function () {
      // add a class to actor's dom element when he starts typing/erasing
      var actor = theater.getCurrentActor()
      actor.$element.classList.add('is-typing')
    })
    .on('type:end, erase:end', function () {
      // and then remove it when he's done
      var actor = theater.getCurrentActor()
      actor.$element.classList.remove('is-typing')
    })
  
  theater
    // .addActor('first')
    .addActor('me')
    
  theater
    // .addScene('first:I am Matthew,', 400)
    // .addScene('first:I am', 200, '.', 200, '.', 200, '. ')
    // .addScene('Your father!')
    .addScene('me:UI', 2000)
    .addScene('me:UX', 2000)
    .addScene('me:Product', 2000)
    .addScene('me:Interaction', 2000)
    .addScene(theater.replay)


  };

