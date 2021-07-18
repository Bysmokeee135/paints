
// document.addEventListener("DOMContentLoaded", function(event) { 
//   //do work
// });

$(function() {
	//inner page 
		$('.category-grid .slider-wrap.owl-carousel, .home-slider .slider-wrap.owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			items:1,
			navText: '‹›'
		})
		$('.tools-slider .tools-items-wrap').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items:4,
				}
			},
			navText: '‹›'
		})
		$('.tools-slider .tools-items-wrap .item').click(function(){
			return false;
		})
		$('.new-products .slider-wrap').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items:3,
				}
			},
			navText: '‹›'
		})
	// 
	$('.show-menu-btn').click(function(){
		$(this).parent().children('nav').slideToggle();
	})
	
	$('.colors-theme .color-theme-items-wrap .color-theme-item .item .segment-wrap').on('mousemove', function(e){ 
		$(this).closest('.item').find('.popup-color').css({
			'top': e.offsetY-100+'px',
			'left': e.offsetX-30+'px' 
		})  
		console.log(e.offsetX)
	});
	$('.colors-theme .color-theme-items-wrap .color-theme-item .item .segment-wrap').on('mouseout', function(e){ 
		$(this).closest('.item').find('.popup-color').css({
			'top': 0+'px',
			'right': 0+'px' 
		})  
	});	
	// one.addEventListener('mouseout', function(e){ 
	// 	two.style.top = '108px';
	//   two.style.left = '8px';
	// });
$('.check-wrap').click(function(){
	$(this).closest('.radio-fields:not(.check-fields)').find('.check-wrap').removeClass('checked').find('input').prop("checked", false);
	if($(this).hasClass('checked')) {
		$(this).removeClass('checked').find('input').prop("checked", false);
	} else {
	$(this).addClass('checked').find('input').prop("checked", true);
	}
	console.log($(this).find('input').val())
})
$('.mega-menu nav.links li > a').click(function(){
	if($(this).parent().hasClass('opened')) {
		$(this).parent().removeClass('opened')
	} else {
		$(this).parent().addClass('opened')
	}
})
$('.custom-select .select-title').click(function(){
	if($(this).hasClass('closed')){
		$(this).removeClass('closed')
	} else {
		$(this).addClass('closed')
	}
	$(this).closest('.custom-select').find('.wrap').slideToggle();
})
$('.filters h3').click(function(){
	$('aside > div').slideToggle();
})
$('.support-btn').click(function(){
	if($(this).hasClass('opened')){
		$('.page-wrap').removeClass('opened-popup');
		$(this).removeClass('opened').parent().find('.contact-form').fadeOut(300);
	} else {
		$('.page-wrap').addClass('opened-popup');
		$(this).addClass('opened').parent().find('.contact-form').fadeIn(300);
	}
	return false;
})
$('.contact-form .close, .page-wrap.opened-popup').click(function(){
	$('.support-btn').click();
})
$('.btn-toggle').click(function(){
	if($(this).hasClass('closed')){
		$(this).removeClass('closed')
	}else {
		$(this).addClass('closed')
	}
	$(this).closest('.filed-wrap').find('div').slideToggle()	
})
$('.clear').click(function(){
	$(this).closest('.category').find('span').remove();
})
$('.delete').click(function(){
	$(this).parent().remove();
})

var $box = $('.segment-wrap');
$box.tinycolorpicker();
// $('.item .track').mouseleave(function(){
// 	$(this).closest('.item').find('.popup-color').fadeOut();
// 	console.log('hided')
// })  

// $('.track').click(function(){
// 	var currentC = $(this).closest('.color-wrap').find('.colorInput').val();
// 	$(this).closest('.item').find('.popup-color').css('background-color', currentC);
// 	console.log(currentC)
// })
// $('input').tagsinput('add', 'some tag');
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
