$(function(){

	$('.nav-toggle').on('click', function() {
		$('#menu').slideToggle(500, function(){
			if($(this).css('display') === 'none'){
			$(this).removeAttr('style');
		}
		});
	});	

$(window).resize(function(){
	if ($(window).width() > 767) {
   	$('#menu').removeAttr('style');
  }
});

$( '.swipebox' ).swipebox();

$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  $('#menu a').on('click', function(e) {
    e.preventDefault();
    var selector = $(this).attr('href');
    var h = $(selector);

    $('html, body').animate({
        scrollTop: h.offset().top
    }, 1000);

  });

var selector = $(this).attr('href');
var h = $(selector);

});


