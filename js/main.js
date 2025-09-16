window.onload = function(){

$(document).ready(function(){
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });
    // 移除过时的颜色设置逻辑，使用CSS的.active类来处理
    // 所有链接颜色现在统一由CSS管理
  console.log('pathname = ' + location.pathname.slice(-10));
    
});

  // Header scroll behavior - hide/show on scroll (DISABLED)
  // let lastScrollTop = 0;

  // function updateHeader() {
  //   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   const header = document.querySelector('.nav-top');
    
  //   if (!header) {
  //     console.log('Header not found');
  //     return;
  //   }
    
  //   console.log('Scroll:', currentScrollTop, 'Last:', lastScrollTop);
    
  //   // 如果滚动距离小于100px，总是显示header
  //   if (currentScrollTop < 100) {
  //     header.classList.remove('hidden');
  //     console.log('Header shown (top area)');
  //     lastScrollTop = currentScrollTop;
  //     return;
  //   }
    
  //   // 向下滚动时隐藏header
  //   if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
  //     header.classList.add('hidden');
  //     console.log('Header hidden, scroll:', currentScrollTop);
  //   } 
  //   // 向上滚动时显示header
  //   else if (currentScrollTop < lastScrollTop) {
  //     header.classList.remove('hidden');
  //     console.log('Header shown, scroll:', currentScrollTop);
  //   }
    
  //   lastScrollTop = currentScrollTop;
  // }

  // 监听滚动事件 - 简化版本 (DISABLED)
  // window.addEventListener('scroll', updateHeader, { passive: true });

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
    console.log('Hamburger menu clicked');
	$(".menu").toggleClass("close");
  var $ul = $(this).parent("nav").find("ul");
  console.log('Found ul:', $ul.length);
  
  // if section is already active and clicked again
  if ( $ul.hasClass("nav-bg") ) {
    console.log('Closing menu');
    $ul.removeClass("nav-bg");
    $ul.slideUp();
  } else {
  // if section is made active
    console.log('Opening menu');
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

