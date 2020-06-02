
//Author: Hayford - heyphord@gmail.com
/////////////////////////////////////////


//Gallery Carousel
$('.gallery-slick').slick({
	infinite: true,
	dots: true,
	slidesToShow: 4,
	slidesToScroll:2,
	arrows: false,
	autoplay: true,

	
	responsive: [
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},

	]

});

//Carousel img Slick
$('.team-slick').slick({
	infinite: true,
	dots: true,
	slidesToShow: 5,
	slidesToScroll:2,
	arrows: false,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1000,
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
		// ,
		// {
		// 	breakpoint: 500,
		// 	settings: {
		// 		slidesToShow: 2,
		// 		slidesToScroll: 2
		// 	}
		// }

	]

});

//GET IN CONTACT US SECTION
$("#sendMail").submit(function (e) {
	e.preventDefault();

	let name = $("#name").val();
	let subject = $("#subject").val();
	let message = $("#message").val();


	let link = `mailto:foundationthemp@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0ASent by: ${name}`
	window.open(
		link,
		'_blank' // <- This is what makes it open in a new window.
	);



});

var scroll = new SmoothScroll('a[href*="#"]');

//init wow
var WOW = new WOW().init();