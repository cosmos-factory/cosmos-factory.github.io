$(function() {

	$('#my-menu').mmenu({
        extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: 'Mr. Carwash'
        },
        offCanvas: {
            position: 'right'
        }
    });

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function(){
	    $(".hamburger").addClass('is-active');
    }) .bind('closed', function(){
        $('.hamburger').removeClass('is-active');
    });


$('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false
})

$('.partners').owlCarousel({
    loop: true,
    smartSpeed: 700,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0:{
            items: 1
        },
        480:{
            items: 2
        },
        768:{
            items: 3
        },
        992:{
            items: 4
        }
    }
});

});
