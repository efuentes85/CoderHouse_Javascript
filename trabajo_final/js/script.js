 $(document).ready(function(){
    	
  $('.your-class').slick({
 	
 dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



  $('.js-add-slide').on('click', function() {
  	var slideIndex=0;
  		slideIndex++;
   $('.your-class').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
	});


$('.js-remove-slide').on('click', function() {
  $('.your-class').slick('slickRemove',slideIndex - 1);
  if (slideIndex !== 0){
    slideIndex--;
  }

});

});

