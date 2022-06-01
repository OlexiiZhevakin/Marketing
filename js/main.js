$(function(){

  $(".menu a, .to-top").on("click", function (event) {
		event.preventDefault();
		const id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.slider-blog__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow right"></button>',
    autoplay: true,
    dots: true,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false
      }
    }
 
  ]
  });

  $('.menu__btn, .menu a').on('click', function() {
    $('.menu').toggleClass('menu--active');
  });

  const mixer = mixitup('.portfolio__content');

});