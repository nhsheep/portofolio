$(function() {
	$('.slick-box').slick({
		infinite: true,
    slidesToShow: 1,
    centerMode: false,
    // centerPadding: '10%',
    dots: false,
    arrows: true,
    dotsClass: 'slide-dots',
    // responsive:[{
    //   breakpoint: 1000,
    //   settings: {
    //     infinite: true,
    //     slidesToShow: 3,
    //     centerMode: true,
    //     centerPadding: '2%',
    //     dots: true,
    //     arrows: false,
    //     dotsClass: 'slide-dots'
    //   }
    // },{
    //   breakpoint: 599,
    //   settings: {
    //     infinite: false,
    //     arrows: false,
    //     centerPadding: '9%',
    //     centerMode: true,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     slidesToShow: 1
    //   }
    // }]
  });
  // $('.slick-box').slick("slickSetOption", "slidesToScroll", 2);
});