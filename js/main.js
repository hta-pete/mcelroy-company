$(function(){

	var $window       = $(window);
  var raf           = requestAnimationFrame;
  var lastScrollTop = $window.scrollTop();
  var scrollTop;

  $window.on("load", function(){
    scrollTop = $window.scrollTop();
    if( scrollTop > 90 ){
      $('header').addClass('active');
    } else{
      $('header').removeClass('active');
    }  
  });

  if (raf) {
    loop();
  }

  function loop() {

    scrollTop = $window.scrollTop();
    var y         = (scrollTop > lastScrollTop) ? 'down' : ((scrollTop === lastScrollTop) ? 'none' : 'up');

    if (lastScrollTop === scrollTop) {
        raf(loop);
        return;
    } else {
        lastScrollTop = scrollTop;
        raf(loop);
    }
 
    lastScrollTop = scrollTop;

    if( scrollTop > 90 ){
      $('header').addClass('active');
    } else{
      $('header').removeClass('active');
    }  

  }


  $(".mobile-menu-btn").on("click", function(){
    $(this).toggleClass("active");
    $(".mobile-nav").toggleClass("show");
  });


  // Modals
  $('.close-modal-btn, .close-modal-link').on('click', function(){
    $('.modal-window').fadeOut('fast', function(){
      if( $('#video-modal') ){
        $('#video-modal iframe').attr('src', '');
      }
    });
  }); 

  $('.modal-window').on('click', function(e) {
    if (!$(e.target).closest('.modal').length){
      $('.modal-window').fadeOut('fast', function(){
        if( $('#video-modal') ){
          $('#video-modal iframe').attr('src', '');
        }
      });
    }
  });

  $('.btn-watch-video').on('click', function(){
   var videoURL = $(this).data('url');
   $('#video-modal iframe').attr('src', videoURL);
   $('#video-modal').fadeIn('fast');
 });
 
});




