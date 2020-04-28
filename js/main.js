
	/////////////////////////////////////////

	//Carousel img Slick
	$('.slick-carousel').slick({
		dots: true,
		arrows: true,
		infinite: true, 
		autoplay: true,
  });

	//Carousel img Slick
	$('.slick-products').slick({
		infinite: true,
		dots: true,
		arrows: true,
		autoplay: true,
  
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