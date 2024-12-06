$(document).ready(function() {	
	// menu fixe et logo tow //
	function checkScroll()
	{
		var posScroll = $(document).scrollTop();
		
		if(posScroll>0) 
			$('body').addClass('sticky')
		else
			$('body').removeClass('sticky')

		if(posScroll>160) 
			$('.toponweb').addClass('show')
		else
			$('.toponweb').removeClass('show')

	}
    $(window).scroll(function(){
		checkScroll();
	});
	$(window).resize(function(){
		checkScroll();
	});
	checkScroll();

	// menu mobile + custom mobile //
	function displayMobile()
	{
		if($(window).width()>1200) {
			$('.header_nav').removeClass('active'),
			$('.menu_mobile').removeClass('active'),
			$('body').removeClass('active_overflow')
		}
	}
	$(window).resize(function(){
		displayMobile();
	});
    $(window).scroll(function(){
		displayMobile();
	});
	displayMobile();

	$(".menu_mobile").click(function() {
		$(this).toggleClass("active");
		$("body").toggleClass("active_overflow");
		$(".header_nav").toggleClass("active");
		$(".sub").removeClass("active");
		$(".open_sub").removeClass("active");
	});
	
	$(".open_sub").click(function() {
		$(this).toggleClass("active");
		$(".menu").find(".sub").removeClass("active");
		if($(this).hasClass("active")){
			$(".open_sub").removeClass("active");
			$(this).next(".sub").toggleClass("active");
			$(this).toggleClass("active");
		}
	});	

	$(".close_sub").click(function() {
		$(".open_sub").removeClass("active");
		$(".sub").removeClass("active");
	});	


	// inscription newsletter //
	$(".form_newsletter_ok .close, .form_newsletter_ok .close_bg").click(function() {
		$(".form_newsletter_ok").fadeOut();
	});
	
	
	// scroll to top //
	$(".scroll").click(function() {
		c = $(this).attr("href")
		$('html, body').animate({ scrollTop: $("#" + c).offset().top }, 1000, "linear");
		return false
	})	
});


// animation //
(function($) {
	$.fn.visible = function(partial) {
		var $t            = $(this),
			$w            = $(window),
			viewTop       = $w.scrollTop(),
			viewBottom    = viewTop + $w.height() -80,
			_top          = $t.offset().top,
			_bottom       = _top + $t.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	  };
})(jQuery);

$(".animate").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
		el.addClass("play"); 
	}
});

$(window).scroll(function(event) {
	$(".animate").each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("play"); 
		}
	});
});