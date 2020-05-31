
//Author: Hayford - heyphord@gmail.com
/////////////////////////////////////////


//Carousel img Slick
$('.gallery-slick, .team-slick').slick({
	infinite: false,
	dots: true,
	slidesToShow: 4,
	arrows: false,
	autoplay: true,
	responsive: [
		{
			breakpoint: 100,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
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
var WOW = new WOW().init();