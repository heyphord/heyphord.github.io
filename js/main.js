
	//Author: Hayford - heyphord@gmail.com
	/////////////////////////////////////////

	//Carousel img Slick
	$('.slick-carousel').slick({
		dots: true,
		arrows: false,
		infinite: true, 
		autoplay: true,
  });

	//Carousel img Slick
	$('.slick-products').slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		arrows: false,
		autoplay: true,
		responsive: [
			
			{
				breakpoint: 780,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  }
			  ,
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			
		  ]
  
  });


  $("#sendMail").submit(function (e) { 
	  e.preventDefault();
	  
	  let name = $("#name").val();
	  let subject = $("#subject").val();
	  let message = $("#message").val();

	  
	  let link = `mailto:janiehaylimited@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0ASent by: ${name}`
	  window.open(
		link,
		'_blank' // <- This is what makes it open in a new window.
	  );
	  
	
	  
  });

  var scroll = new SmoothScroll('a[href*="#"]');

  //init wow
  var WOW =new WOW().init();