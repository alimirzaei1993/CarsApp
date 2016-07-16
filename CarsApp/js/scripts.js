jQuery(window).load( function() {
	$ = jQuery;
	var mobile_breakpoint = 576;

	$('#video-scroller').css('display', 'block');
	$('#video-scroller').royalSlider({
		autoHeight: true,
		arrowsNav: false,
		fadeinLoadedSlide: false,
		controlNavigationSpacing: 0,
		imageScaleMode: 'none',
		controlNavigation: 'custom-bullets',
		bulletsWrapper: '<div class="slideshow-bullets">',
		imageAlignCenter:false,
		loop: false,
		loopRewind: true,
		numImagesToPreload: 6,
		slidesSpacing: 20,
		keyboardNavEnabled: true,
		navigateByClick: true,
		sliderDrag: false,
		block: {
			delay: 400
		}
	});

	size_home_page_mobile_panels();

	$('#blog-scroller').css('display', 'block');
	$('#blog-scroller').royalSlider({
		autoHeight: true,
		arrowsNav: false,
		fadeinLoadedSlide: false,
		controlNavigationSpacing: 0,
		imageScaleMode: 'none',
		controlNavigation: 'custom-bullets',
		bulletsWrapper: '<div class="slideshow-bullets">',
		imageAlignCenter:false,
		loop: false,
		loopRewind: true,
		numImagesToPreload: 6,
		slidesSpacing: 20,
		keyboardNavEnabled: true,
		navigateByClick: true,
		sliderDrag: false,
		block: {
			delay: 400
		}
	});


	$('.custom-tabs-slider').css('display', 'block');
	var gallery_view_slider = $('.custom-tabs-slider').royalSlider({
		autoHeight: true,
		autoScaleSliderHeight: 370,
		arrowsNav: true,
		arrowsNavAutoHide: false,
		fadeinLoadedSlide: false,
		controlNavigationSpacing: 0,
		controlNavigation: 'tabs',
		controlsInside: false,
		imageScaleMode: 'none',
		imageAlignCenter: false,
		slidesSpacing: 0,
		loop: false,
		loopRewind: true,
		numImagesToPreload: 6,
		keyboardNavEnabled: true,
		usePreloader: false,
		navigateByClick: false,
		sliderDrag: false
	}).data('royalSlider');

	if( $('.press-room-gallery').length > 0 ) {
		$('.press-room-gallery').royalSlider({
			autoScaleSliderWidth: 1096,
			autoScaleSliderHeight: 480,
			imageScaleMode: 'none',
			autoHeight: true,
			imageAlignCenter: false,
			controlNavigation: 'none',
			arrowsNav: true,
			arrowsNavAutoHide: false,
			controlsInside: false,
			loop: true,
			autoplay: {
				enabled: false
			}
		});
	}

	if( $('.blog-gallery').length > 0 ) {
		$('.blog-gallery').css('display', 'block');
		$('.blog-gallery').royalSlider({
			autoScaleSliderWidth: 631,
			autoScaleSliderHeight: 355,
			imageScaleMode: 'none',
			autoHeight: true,
			imageAlignCenter: false,
			controlNavigation: 'none',
			arrowsNav: true,
			arrowsNavAutoHide: false,
			controlsInside: false,
			loop: true,
			autoplay: {
				enabled: false
			}
		});
	}

	$('.custom-tabs-slider').each(function() {
		var num_tabs = $(this).find('.rsNavItem').length;
		var percentage_width = 1 / num_tabs * 100;


		$(this).find('.rsNavItem').each(function() {
			$(this).css('width', percentage_width + '%');
		});
	});

	$('.custom-tabs-slider .rsTmb').click(function(e) {
		e.preventDefault();
	});

	$('#banner-home').css('display', 'block');
	$('#banner-home').royalSlider({
		arrowsNav: false,
		loop: true,
		keyboardNavEnabled: true,
		controlsInside: false,
		imageScaleMode: 'none',
		arrowsNavAutoHide: false,
		autoScaleSlider: true, 
		autoScaleSliderWidth: 1096,     
		autoScaleSliderHeight: 424,
		controlNavigation: 'custom-bullets',
		bulletsWrapper: '<div class="slideshow-bullets">',
		thumbsFitInViewport: false,
		imageAlignCenter: true,
		slidesSpacing: 0,
		navigateByClick: true,
		startSlideId: 0,
		updateSliderSize: true,
		//autoHeight: true,
		globalCaption: false,
		autoPlay: {
			enabled: true,
			delay: 5000
		},
		transitionType:'fade',
		transitionSpeed: 600,
		globalCaption: true,
		sliderDrag: true
	});

	$('#banner-home .slideshow-bullets').appendTo('.banner-home-wrapper');

	$('#banner-internal').css('display', 'block');
	$('#banner-internal').royalSlider({
		arrowsNav: false,
		loop: true,
		keyboardNavEnabled: true,
		controlsInside: false,
		imageScaleMode: 'none',
		arrowsNavAutoHide: false,
		autoScaleSlider: true, 
		autoScaleSliderWidth: 1096,
		autoScaleSliderHeight: 424,
		controlNavigation: 'custom-bullets',
		bulletsWrapper: '<div class="slideshow-bullets">',
		thumbsFitInViewport: false,
		imageAlignCenter: true,
		slidesSpacing: 0,
		navigateByClick: true,
		startSlideId: 0,
		updateSliderSize: true,
		//autoHeight: true,
		globalCaption: false,
		autoPlay: {
			enabled: true,
			delay: 4000
		},
		transitionType:'fade',
		transitionSpeed: 600,
		globalCaption: true,
		sliderDrag: true
	});

	$('#banner-internal .slideshow-bullets').appendTo('.banner-internal-wrapper');
	

	

	$('.product-option-scroller').royalSlider({
		autoHeight: false,
		arrowsNav: false,
		imgHeight: 352,
		autoScaleSliderHeight: 352,
		updateSliderSize: true,
		transitionType: 'fade',
		transitionSpeed: 300,
		fadeinLoadedSlide: false,
		controlNavigationSpacing: 0,
		//controlsInside: false,
		imageScaleMode: 'none',
		controlNavigation: 'custom-bullets',
		bulletsWrapper: '<div class="slideshow-bullets">',
		imageAlignCenter:false,
		loop: false,
		loopRewind: true,
		numImagesToPreload: 6,
		slidesSpacing: 20,
		keyboardNavEnabled: true,
		navigateByClick: true,
		sliderDrag: false,
		block: {
			delay: 400
		}
	});

	$('.product-option-scroller .rsSlide').each(function( i ) {
		var this_color = $(this).find('img').data('color');
		$('.slideshow-bullets .rsNavItem:eq(' + i +') span').css('background-color', this_color);
	});


	// gallery_slider_sizing();

	function load_large_filmstrip_slider() {
		if( $(window).width() >= 520 ) {
			$('.gallery-with-filmstrip-slider').css('display', 'block');
			$('.gallery-with-filmstrip-slider-small-screen').css('display', 'none');
				var gallery_thumb_slider = $('.gallery-with-filmstrip-slider').royalSlider({
					controlNavigation: 'thumbnails',
					imageScaleMode: 'fit',
					imageAlignCenter: true,
					imageScalePadding: 0,
					arrowsNav: true,
					arrowsNavAutoHide: false,
					controlsInside: false,
					autoScaleSlider: true, 
					autoScaleSliderWidth: 908,   
					autoScaleSliderHeight: 807,
					// imgWidth: 908,
					// imgHeight: 605,
					sliderDrag: false,
					slidesSpacing: 0,
					updateSliderSize: true,
					globalCaption: false,
					thumbs: {
						arrows: false,
						spacing: 20,
						fitInViewport: true,
						firstMargin: false
					}
			}).data('royalSlider');
		}
	}

	function load_small_filmstrip_slider() {
		if( $(window).width() < 520 ) {
			$('.gallery-with-filmstrip-slider-small-screen').css('display', 'block');
			$('.gallery-with-filmstrip-slider').css('display', 'none');
			$('.gallery-with-filmstrip-slider-small-screen').royalSlider({
				autoHeight: true,
				loop: true,
				controlNavigation: 'none',
				arrowsNavAutoHide: false,
				arrowsNav: true,
				controlsInside: false,
				sliderDrag: true,
				globalCaption: true,
				autoScaleSliderWidth: 906,
				autoScaleSliderHeight: 605,
				imageAlignCenter: false,
				imageScaleMode: 'none'
			});
		}
	}

	load_small_filmstrip_slider();
	load_large_filmstrip_slider();

	$(window).resize( function() {
		load_small_filmstrip_slider();
		load_large_filmstrip_slider();
	});


	$('.small-screen-info').royalSlider({
		autoHeight: true,
		loop: true,
		controlNavigation: 'none',
		arrowsNavAutoHide: false,
		controlsInside: false,
		sliderDrag: false
	});

	$('.two-col-gallery').royalSlider({
		autoScaleSliderWidth: 538,
		autoScaleSliderHeight: 303,
		imageScaleMode: 'none',
		autoHeight: true,
		imageAlignCenter: false,
		controlNavigation: 'none',
		arrowsNav: true,
		arrowsNavAutoHide: false,
		controlsInside: false,
		loop: true,
		autoplay: {
			enabled: false
		}
	});

	$('.one-col-gallery').css('display', 'block');
	$('.one-col-gallery').royalSlider({
		autoScaleSliderWidth: 1096,
		autoScaleSliderHeight: 480,
		imageScaleMode: 'none',
		autoHeight: true,
		imageAlignCenter: false,
		controlNavigation: 'none',
		arrowsNav: true,
		arrowsNavAutoHide: false,
		controlsInside: false,
		loop: true,
		autoplay: {
			enabled: false
		}
	});

	if( $(window).width() <= mobile_breakpoint ) {
		if( $('.list-gallery-view').length > 0 ) {
			$('.list-gallery-view').trigger('click');
			gallery_view_slider.updateSliderSize();
		}
	}

	$('.snippet.video .video-container').each(function() {
		var play_button_height = $(this).find('.btn-play').outerHeight();
		var video_height = $(this).outerHeight();
		var caption_height = $(this).find('.video-caption').outerHeight();

		var top_value_px = (video_height - caption_height - play_button_height) / 2;
		var top_value = (top_value_px / video_height) * 100;

		$('.btn-play', this).css({
			'margin-top' : '0px',
			'top' : top_value + '%'
		});
	});

	$('#interior-jmenu').each(function() {
		if($(this).hasClass('large-menu')) {
			var height_of_one_item = $(':first-child', this).outerHeight();
			var height_of_menu = $(this).outerHeight();

			if(height_of_menu > height_of_one_item) {
				$(this).addClass('multiple-line-menu');
				$('#interior-sub-menu').addClass('has-multiple-line-menu');

				$(this).find('li').each(function() {
					var this_top_offset = $(this).position().top;

					if(this_top_offset == 0) {
						$(this).addClass('top-row');
					} else {
						$(this).addClass('second-row');
					}

				});

			}
		}
	});
});

	var timer = null;
	function size_home_page_mobile_panels() {
		if( $('#panels-featured').length > 0  ) {
			if( is_home_page_small() ) {
				timer = setInterval( function() {
					var video_col_height = $('#panels-featured .panel-01').outerHeight(); 
					var video_col_margin = parseInt( $('#panels-featured .panel-01').css('margin-bottom') );
					var panel_padding = parseInt( video_col_height ) + ( video_col_margin * 2 );

					if( panel_padding >= 200 ) {
						clearInterval( timer );
						$('#panels-featured').css('padding-bottom', panel_padding );
					}

				}, 250 );
			} else {
				$('#panels-featured').removeAttr('style');
			}
		}
	}

	function size_home_page_mobile_panels_no_timer() {
		if( $('#panels-featured').length > 0  ) {
			if( is_home_page_small() ) {
				var video_col_height = $('#panels-featured .panel-01').outerHeight(); 
				var video_col_margin = parseInt( $('#panels-featured .panel-01').css('margin-bottom') );
				var panel_padding = parseInt( video_col_height ) + ( video_col_margin * 2 );

				if( panel_padding >= 200 ) {
					$('#panels-featured').css('padding-bottom', panel_padding );
				}
			} else {
				$('#panels-featured').removeAttr('style');
			}
		}
	}

	function is_home_page_small() {
		var $panels = $('#panels-featured');
		var $customised_panel = $('#customised-vehicle-homepage');

		var panels_width = $panels.width();

		var customised_panel_width = $customised_panel.outerWidth();

		return ( panels_width == customised_panel_width ) ? true : false;
	}

jQuery(document).ready(function($) {
	var mobile_breakpoint = 576;


	$('#jmenu').jMenu({
		breakpoint: 1025,
		overlayOpacity: 0.72,
		animateOverlay: true,
		overlayAnimationSpeed: 200
	});

	if($('#interior-jmenu').length > 0) {
		$('#interior-jmenu').jMenu({
			breakpoint: 1023,
			menuButton: '.sub-menu-button', 
			showOverlay: false
		});
	}

	fix_blog_searchbar_position();
	size_blog_post_images();

	function arb_debouncer( func , timeout ) {
		var timeoutID , timeout = timeout || 200;
		return function () {
			var scope = this , args = arguments;
			clearTimeout( timeoutID );
			timeoutID = setTimeout( function () {
				func.apply( scope , Array.prototype.slice.call( args ) );
			} , timeout );
		}
	};
	
	$(window).resize( arb_debouncer(function(e) {
		size_home_page_mobile_panels_no_timer();
	}, 400));

	function fix_blog_searchbar_position() {
		if( $('.blog-post-categories-search').length > 0 ) {
			var search_height = $('.blog-post-categories-search form').height();
			var title_height = $('.blog-post-categories-search .title-col-one').height();

			var padding_top = ( title_height - search_height ) / 2;
			$('.blog-post-categories-search .blog-sidebar-widget').css( 'padding-top', padding_top );
		}
	}

	function size_blog_post_images() {
		if( $('.blog-post').length > 0 ) {
			$('.blog-post').find('img').each(function() {
				var max_width = $(this).attr('width');
				if( max_width ) {
					$(this).css({
						'max-width' : max_width + 'px',
						'margin-left' : 'auto',
						'margin-right' : 'auto',
						'display' : 'block'
					});
				}
			});
		}
	}

	$.ajax({
		type: "POST",
		url: volAjax.ajaxurl,
		data: {
			action: 'get_vehicle_selector'
		},
		success: function( data ) {
			$('.vehicle-selector-ajax').html(data);
			select_box_workaround( $('.arb-fancybox-content-wrapper .choose-make') );
			select_box_workaround( $('.arb-fancybox-content-wrapper .choose-model') );
			select_box_workaround( $('.arb-fancybox-content-wrapper .choose-series') );
			prepopulate_vehicle_selector();
		}
	});

	var nua = navigator.userAgent;
	var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));	// detect android native browser for hacky image workaround
	if( is_android ) {
		var elems_to_replace = [
			'.nav-tools #country-selector > a',
			'.jmenu-button .touch-button',
			'.btn-play',
			'.nav-tools #search-box > a',
			'#interior-sub-menu .sub-menu-button .touch-button',
			'nav.main-nav > ul.small-menu .top-level-side-expand',
			'nav.main-nav > ul.small-menu .top-level-vertical-expand',
			'nav.main-nav > ul.small-menu .sub-mega-menu .product-mega-menu .col ul li.menu-close a',
			'nav.main-nav > ul.small-menu .sub-mega-menu .product-mega-menu .col ul li a',
			'nav.main-nav > ul.small-menu .sub-mega-menu .product-mega-menu .col ul li.menu-back a'
		];

		for( var i = 0; i < elems_to_replace.length; i++ ) {
			$( elems_to_replace[i] ).addClass('android');
		}
	}

	if($('.store-finder').length > 0) {
		$('.store-finder').jStoreFinder();
	}

	$('.store-finder-options p, .two-column.text p').each(function() {
		var text = $(this).html();
		if($.trim(text).length == 0 ) {
			$(this).remove();
		}
	});

	$('.two-column.text .col-one + br').remove();

	$('select').each(function() {
		select_box_workaround( $(this) );
	});

	function select_box_workaround( $this ) {
		var extra_class = '';

		if( $this.hasClass('dark') ) {
			extra_class += 'dark ';
		} 

		if ( $this.hasClass('extra-dark') ) {
			extra_class += 'extra-dark ';
		} 

		if ( $this.hasClass('light') ) {
			extra_class += 'light ';
		}

		var margin_top = $this.css('margin-top');
		var margin_right = $this.css('margin-right');
		var margin_bottom = $this.css('margin-bottom');
		var margin_left = $this.css('margin-left');

		var combined_margin = margin_top + ' ' + margin_right + ' ' + margin_bottom + ' ' + margin_left;

		$this.css('margin', '0');

		$this.wrap('<div class="select-wrap ' + extra_class + '" style="margin: ' + combined_margin + ';" />');
	}

	$('body').on('click', '.select-wrap', function(e) {
		e.stopPropagation();
		$('select', this).trigger('mousedown');
	});


	$('.fit-01').fitText(0.9);
	$('.fit-02').fitText(1.1, { minFontSize: '2px', maxFontSize: '16px' });
	// $('.fit-03').fitText(1.2, { minFontSize: '10px', maxFontSize: '22px' });

	$('#jmenu ul li').each(function(){	
		
			$(this).bind('mouseenter', function(){				
				$(this).addClass('hover');
				if ($(this).next('li') != null) {
					$(this).next('li').addClass('nextli');
				}
			});	
			
			$(this).bind('mouseleave', function(){
				// remove previous hover classes
				$('#jmenu li.hover').each(function(){
					$(this).removeClass('hover')
					if ($(this).next('li') != null) {
						$(this).next('li').removeClass('nextli');
					}
				});
			});
	});

	$('body').on('click', '.list-gallery-view', function(e) {
		e.preventDefault();

		var view = $(this).data('view');

		if(view == 'gallery') {
			$('#list-view').fadeOut('fast', function() {
				$('#gallery-view').fadeIn('fast');
				$('.gallery-button').fadeOut('fast', function() {
					$('.list-button').fadeIn();
				});
			});	
		} else {
			$('#gallery-view').fadeOut('fast', function() {
				$('#list-view').fadeIn('fast');
				$('.list-button').fadeOut('fast', function() {
					$('.gallery-button').fadeIn();
				});
			});	
		}
	});


	var $customised_banner = $('#customised-vehicle');
	if($customised_banner.length > 0) {
		$.ajax({
			type: "POST",
			url: volAjax.ajaxurl,
			data: {
				action: 'load_vehicle_customised_banner'
			},
			success: function(data) {
				$customised_banner.html(data);
			}
		});
	}

	// Load Vehicle Customised Banner on Homepage
	var $customised_vehicle_homepage = $('#customised-vehicle-homepage');
	if($customised_vehicle_homepage.length > 0) {
		$.ajax({
			type: "POST",
			url: volAjax.ajaxurl,
			data: {
				action: 'load_customised_vehicle_homepage'
			},
			success: function(data) {
				$customised_vehicle_homepage.find('.customised-vehicle-homepage').html(data);
			}
		});
	}


	// Load Vehicle Customised String in header
	var $vehicle_customised_string = $('#vehicle_customised_string');
	if($vehicle_customised_string.length > 0) {
		$.ajax({
			type: "POST",
			url: volAjax.ajaxurl,
			data: {
				action: 'load_vehicle_customised_string'
			},
			success: function(data) {
				$vehicle_customised_string.html(data);
			}
		});
	}

	
	if(Modernizr.mq('only screen and (max-width: 768px)')) {
		$('.fit-02').fitText(1.1, { minFontSize: '10px', maxFontSize: '35px' });
		$('#footer .col-one').insertAfter('#footer .col-two');
	}

    
	if(Modernizr.mq('only screen and (max-width: 576px)')) {
		$("#search-box").prependTo("#search-mobile-container");
		$("#search-box").wrap("<ul class='search-mobile-ul'></ul>");
	}

	if(Modernizr.mq('only screen and (min-width: 577px)')) {
		$("#search-box").appendTo(".nav-tools");
		$("<ul class='search-mobile-ul'></ul>" ).remove();
	}	  

/*	$('.cat-item-with-children').click(function(e) {
		e.preventDefault();

		$(this).find('ul').slideToggle();
	});*/

  	
  	$(window).resize(function() {	
  		regenerate_horizontal_accordion();
  		// gallery_thumb_slider.updateThumbsSize();

  		if(Modernizr.mq('only screen and (max-width: 768px)')) {
			$('.fit-02').fitText(1.1, { minFontSize: '10px', maxFontSize: '35px' });
		}
		if(Modernizr.mq('only screen and (max-width: 768px)')) {
			$('#footer .col-one').insertAfter('#footer .col-two');
		}
		if(Modernizr.mq('only screen and (min-width: 769px)')) {
			$('#footer .col-two').insertAfter('#footer .col-one'); 
		}

  		if(!$("#search-box").hasClass("mobile") && Modernizr.mq('only screen and (max-width: 576px)')) {
			$("#search-box").prependTo("#search-mobile-container").wrap("<ul class='search-mobile-ul'></ul>");
  			$("#search-box").addClass("mobile");
  			$(".search-dropdown").css( "display", "block" );
  		}

		if($("#search-box").hasClass("mobile") && Modernizr.mq('only screen and (min-width: 577px)')) {
			$("#search-box").removeClass("mobile").appendTo(".nav-tools");
			$("ul.search-mobile-ul").remove(); 
		}	

		calculate_features_height();

		reset_blog_categories();

	
	}); // RESIZE END

	calculate_features_height();


	function calculate_features_height() {
		var $feature_image = $('.features-image');
		var feature_image_height = $feature_image.height();
		var padding_doubled = 150;

		var $container = $feature_image.closest('.features-area-outer');

		var features_height = feature_image_height + padding_doubled;

		if( $(window).width() > 769 ) {
			$container.height( features_height );
		} else {
			$container.removeAttr('style');
		}
	}

	function reset_blog_categories() {
		if( !$('.active-mobile-category').is(':visible') ) {
			$('.categories-block ul').removeAttr('style');
			$('.toggle-mobile-categories').removeClass('active');
		}
	}

/*	function resize_homepage_panels() {
		if( $('#panels-featured').length > 0 ) {
			var $first = $('#panels-featured > article:first-child');
			var $panels = $('#panels-featured');

			if( $first.width() != $panels.width() ) {
				var tallest = 0; 
				$('#panels-featured > article').each(function() {
					var this_height = $(this).outerHeight();
					if( this_height > tallest ) {
						tallest = this_height;
					}
				});

				$('#panels-featured > article').height( tallest );
			} else {
				$('#panels-featured > article').removeAttr('style');
			}
		}
	}*/

	$(".tools-container ul.sf-menu").superfish({ 
		delay:       1000,                            // one second delay on mouseout 
		animation:   {opacity:'show'},  			  // fade-in and slide-down animation 
		speed:       'fast',                          // faster animation speed
		minWidth:    12,   							  // minimum width of sub-menus in em units 
		maxWidth:    27,                              // maximum width of sub-menus in em units 
		autoArrows:  false,                           // disable generation of arrow mark-up 
		dropShadows: false ,						  // disable drop shadows 
		onBeforeShow: function(){ 
			$("#country-selector").addClass("no-bg");
		},
		onBeforeHide: function(){ 
			$("#country-selector").removeClass("no-bg");
		}
	});

    
	$('.faqs').on('click', '.question', function(e) {
		e.preventDefault();

		var current_question = $(this);
		var answer = $(this).next('.answer');
		var previous_question = $(this).prevAll('.question:first');

		if(!answer.is(':visible')) {
			$('.answer').each(function() {
				$(this).slideUp('fast');
			});
			$('.question').each(function() {
				$(this).removeClass('active-question');
				$(this).removeClass('question-before-hovered');
			});
			answer.slideDown('fast', function() {
				scroll_to_element(current_question);
			});
			$(this).addClass('active-question');
			previous_question.addClass('question-before-hovered');
		} else {
			answer.slideUp('fast');
			$(this).removeClass('active-question');
		}
	});

	function scroll_to_element(elem) {
		var top_offset = elem.offset().top;

		jQuery('html, body').animate({
			'scrollTop': top_offset
		}, 500);
	}

	$('.anchor-page-scroll').click(function(e) {
		e.preventDefault();

		var elem_id = $(this).attr('href');
		var elem = $(elem_id);

		scroll_to_element(elem);
	});

	// If there is an faq id in the url, direct the page to that faq and open it
	var current_url_hash = window.location.hash;

	if( current_url_hash.indexOf('#faq-') != -1 || current_url_hash.indexOf('#video-') != -1 || current_url_hash.indexOf('#snippet-') != -1) {
		scroll_to_element( $(current_url_hash) );
		$(current_url_hash).trigger( 'click' );
	}



	// On hover of a question, remove borders both above and below
	$('.question').hover(function() {
		var previous_question = $(this).prevAll('.question:first');
		var next_question = $(this).nextAll('.question');
		var current_question = $(this);

		previous_question.addClass('question-before-hovered');
		current_question.addClass('question-being-hovered');

		if(next_question.hasClass('active-question')) {
			current_question.addClass('question-being-hovered-before-active');
		}

		if(previous_question.hasClass('active-question')) {
			previous_question.addClass('active-question-before-hovered');
		}
	}, function() {
		var previous_question = $(this).prevAll('.question:first');
		var next_question = $(this).nextAll('.question');
		var current_question = $(this);

		if(!current_question.hasClass('active-question')) {
			previous_question.removeClass('question-before-hovered');
		}
		current_question.removeClass('question-being-hovered');

		if(next_question.hasClass('active-question')) {
			current_question.removeClass('question-being-hovered-before-active');
		}

		if(previous_question.hasClass('active-question')) {
			previous_question.removeClass('active-question-before-hovered');
		}
	});

	function calculate_horizontal_accordion_vals(accordion_width, elem) {
		var $ = jQuery;

		var total_width = accordion_width;
		var image_width = elem.data('image-width');
		var num_slides = elem.find('li').length;

		var c = (total_width - image_width) / (num_slides -1);

		return c;
	}

	var horizontal_accordion_breakpoint = 520;
	var accordion_width = 1096;

	var accordion_pro_settings = {
		theme: 'arb-horizontal-accordion',
		showSlideNumbers: false,
		horizontalWidth: accordion_width,
		horizontalHeight: 280,
		scaleImages: false,
		activateOn: 'click',
		touchEnabled: true,
		autoPlay: false,
		orientation: 'horizontal',
		pauseOnHover: false,
		destroyBreakpoint: horizontal_accordion_breakpoint,
		onSlideOpen: function () {
		 	var $ol = $(this).closest('ol');
		 	var $main_div = $ol.closest('.horizontal_accordion');
		 	var $accordion_caption = $main_div.nextAll('.accordion-caption');

		 	$accordion_caption.html('');

		 	$ol.find('li').each(function() {
		 		if($(this).hasClass('selected')) {
		 			var caption_html = $(this).find('.caption-content').html();
					$accordion_caption.html(caption_html);
		 		}
		 	});

		 	// Bullet controls
		 	var slide_index = $(this).closest('li').index();
		 	var $accordion_nav = $(this).closest('.horizontal_accordion').next('.accordion-nav');
		 	$accordion_nav.find('li').removeClass('active-accordion-nav');

			$accordion_nav.find('li:nth-child(' + ( slide_index + 1 ) + ')').addClass('active-accordion-nav');
		}
	};

	var accordion_slider_replacement_settings = {
		autoScaleSliderWidth: 300,
		autoScaleSlider: false,
		autoHeight: true,
		navigateByClick: false,
		sliderDrag: false,
		arrowsNav: false,
		controlNavigation: 'custom-bullets',
		bulletsWrapper: '<div class="slideshow-bullets">'
	};

	if($(window).width() > horizontal_accordion_breakpoint) {
		// Large size with full horizontal accordion
		$('.horizontal_accordion').each(function() {
			var accordion_id = $(this).attr('id');
			var accordion_slide_height = calculate_horizontal_accordion_vals( accordion_width, $('#' + accordion_id) );
			accordion_pro_settings.slideHeight = accordion_slide_height;

			$('#' + accordion_id).accordionPro( accordion_pro_settings );
		});
		
		$('.accordion-wrapper').removeClass('accordion-being-hidden');
		$('.accordion-small-wrapper').hide().addClass('accordion-being-hidden');
	} else {
		// Small size with royal slider
		$('.accordion-small-wrapper').royalSlider( accordion_slider_replacement_settings );
		$('.accordion-small-wrapper').removeClass('accordion-being-hidden');
		$('.accordion-wrapper').hide().addClass('accordion-being-hidden');
	}

	function regenerate_horizontal_accordion() {
		if( $(window).width() < horizontal_accordion_breakpoint ) {
			// Small size with royal slider

			if( $('.horizontal_accordion').hasClass( 'accordionPro' ) ) {

				$('.horizontal_accordion').each(function() {
					var accordion_id = $(this).attr('id');
					$('#' + accordion_id).accordionPro( 'destroy' );
				});

				// $('.horizontal_accordion').accordionPro( 'destroy' );

				$('.accordion-wrapper').hide().addClass('accordion-being-hidden');

				$('.horizontal_accordion li').each(function() {
					$(this).css('background-image', 'url(' + $(this).data('bg') + ')');
				});

				$('.accordion-small-wrapper').show().removeClass('accordion-being-hidden');
				$('.accordion-small-wrapper').royalSlider( accordion_slider_replacement_settings );
			}
		} else {
			// Large size with horizontal accordion
			if( !$('.horizontal_accordion').hasClass( 'accordionPro' ) ) {

				$('.accordion-wrapper').show().removeClass('accordion-being-hidden');
				
				$('.horizontal_accordion').each(function() {
					var accordion_id = $(this).attr('id');
					var accordion_slide_height = calculate_horizontal_accordion_vals( accordion_width, $('#' + accordion_id) );
					accordion_pro_settings.slideHeight = accordion_slide_height;

					$('#' + accordion_id).accordionPro( accordion_pro_settings );
				});

				$('.accordion-small-wrapper').hide().addClass('accordion-being-hidden');
			}
		}
	}


	$('.accordion-nav').on('click', 'li', function() {
		var $accordion_nav = $(this).closest('.accordion-nav');
		var $accordion = $accordion_nav.prev('.horizontal_accordion');
		var index = $(this).index();

		$accordion_nav.find('li').removeClass('active-accordion-nav');

		$(this).addClass('active-accordion-nav');

		$accordion.find('li:nth-child(' + ( index + 1 ) + ') .horizontal-accordion-slide-content').trigger('click');
	});

	$('.fancybox').fancybox({
		wrapCSS: 'arb-fancybox',
		width: 430,
		//height: 368,
		height: false,
		padding: 0,
		autoSize: false,
		helpers: {
			title: {
				type: 'inside',
				position: 'top'
			},
			overlay: {
				locked: false
			}
		},
		beforeLoad: function() {
			$('.vehicle-selector-validation-message').hide();
		},
		afterClose: function() {
			$('#select-my-vehicle').removeAttr('style');
		}
	});

	$('.no-padding-fancybox').fancybox({
		wrapCSS: 'arb-fancybox no-padding-fancybox',
		width: 430,
		//height: 368,
		height: false,
		padding: 0,
		autoSize: false,
		helpers: {
			title: {
				type: 'inside',
				position: 'top'
			},
			overlay: {
				locked: false
			}
		},
		beforeLoad: function() {
			$('.vehicle-selector-validation-message').hide();
		},
		afterClose: function() {
			$('#select-my-vehicle').removeAttr('style');
		}
	});

	$('.fancybox-gallery').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$('.fancybox-media').fancybox({
		helpers: {
			media: true,
			overlay: {
				locked: false
			}
		},
		youtube: {
			autoplay: 0
		},
/*		width: 560,
		height: 315,*/
		aspectRatio: true,
		scrolling: 'no',
		afterLoad: function() {
			this.title = '';
			// this.title = this.title + ' <br /> ' + $(this.element).find('img').attr('alt');
		}
	});

	$('.fancybox-wistia').fancybox({
		aspectRatio: true,
		scrolling: 'no',
		helpers: {
			overlay : {
				locked: false
			}
		}
	});

	$('.events-all-states').click(function(e) {
		e.preventDefault();

		$.ajax({
			type: "POST",
			url: volAjax.ajaxurl,
			data: {
				action: 'reset_event_state'
			},
			success: function( data ) {
				location.reload();
			}
		});
	});

	/*
	*	Preset the vehicle selector fields if there is data stored in the session (session data is added as data attributes if available)
	*/
	function prepopulate_vehicle_selector() {
		$('.choose-model').each(function() { 
			var $this = $(this);
			var selected_model = $this.data('selected');

			var make_id = $this.closest('form').find('.choose-make option:selected').val();

			if( selected_model > 0 ) {
				$.ajax({
					type: "POST",
					url: volAjax.ajaxurl,
					data: {
						make_id: make_id,
						model_id: selected_model,
						action: 'front_end_vehicle_selector_preset_model'
					},
					success: function(data) {
						$this.html(data);
					}
				});
			}
		});

		$('.choose-series').each(function() {
			var $this = $(this);
			var selected_series = $this.data('selected');

			var make_id = $this.closest('form').find('.choose-make option:selected').val();

			if( selected_series > 0 ) {
				$.ajax({
					type: "POST",
					url: volAjax.ajaxurl,
					data: {
						make_id : make_id,
						series_id : selected_series,
						action : 'front_end_vehicle_selector_preset_series'
					}, 
					success: function(data) {
						$this.html(data);
					}
				});
			}
		});
	}
	prepopulate_vehicle_selector();
	

	/*
	*	Filter the model select box on change of the make box - for the vehicle_selector shortcode
	*/
	$('body').on('change', '.choose-make', function() {
		var chosen_make = $('option:selected', this).val();
		var $current_make_select_box = $(this);
		var $model_select = $current_make_select_box.closest('form').find('.choose-model');
		var $series_select = $current_make_select_box.closest('form').find('.choose-series');

		$model_select.prop('disabled', 'disabled').parent('.select-wrap').addClass('disabled');
		$series_select.prop('disabled', 'disabled').parent('.select-wrap').addClass('disabled');

		if(chosen_make != 0) {
			$(this).nextAll('.choose-series:first').html('<option value="0">Select series</option>');
			$.ajax({
				type: "POST",
				url: volAjax.ajaxurl,
				data: {
					makeid: chosen_make,
					action: 'front_end_vehicle_selector_make_to_model'
				},
				success: function(data) {
					$model_select.html(data);
					$series_select.html('<option value="0">Select series</option>');

					$model_select.prop('disabled', '').parent('.select-wrap').removeClass('disabled');
					$series_select.prop('disabled', '').parent('.select-wrap').removeClass('disabled');
				}
			});
		} else {
			$model_select.html('<option value="0">Select model</option>');
			$model_select.html('<option value="0">Select series</option>');

			$model_select.prop('disabled', '').parent('.select-wrap').removeClass('disabled');
			$series_select.prop('disabled', '').parent('.select-wrap').removeClass('disabled');
		}
	});

	/*
	*	Filter the model select box on change of the model box - for the vehicle_selector shortcode
	*/
	$('body').on('change', '.choose-model', function() {
		var chosen_model = $('option:selected', this).val();
		var $current_model_select_box = $(this);
		var $series_select = $current_model_select_box.closest('form').find('.choose-series');

		$series_select.prop('disabled', 'disabled').parent('.select-wrap').addClass('disabled');

		if(chosen_model != 0) {
			$.ajax({
				type: "POST",
				url: volAjax.ajaxurl,
				data: {
					modelid: chosen_model,
					action: 'front_end_vehicle_selector_model_to_series'
				},
				success: function(data) {
					$series_select.html(data);
					$series_select.prop('disabled', '').parent('.select-wrap').removeClass('disabled');
				}
			});
		} else {
			$series_select.html('<option value="0">Select series</option>');
			$series_select.prop('disabled', '').parent('.select-wrap').removeClass('disabled');
		}
	});

	$('body').on( 'click', '.arb-fancybox-button-cancel', function(e) {
		e.preventDefault();
		$.fancybox.close();
	});

	function get_vehicle_selector_form_data( $vehicle_selector_wrapper, run_postcode_stuff ) {
		var flag = true;
		var ajax_data = {
			action: 'save_vehicle_selection'
		};

		var chosen_make = $vehicle_selector_wrapper.find('.choose-make option:selected').val();
		var chosen_make_text = $vehicle_selector_wrapper.find('.choose-make option:selected').text();

		var chosen_model = $vehicle_selector_wrapper.find('.choose-model option:selected').val();
		var chosen_model_text = $vehicle_selector_wrapper.find('.choose-model option:selected').text();

		var chosen_series = $vehicle_selector_wrapper.find('.choose-series option:selected').val();
		var chosen_series_text = $vehicle_selector_wrapper.find('.choose-series option:selected').text();

		if( run_postcode_stuff ) {
			var postcode = $vehicle_selector_wrapper.find('.user_postcode').val();
		}

		var $other_vehicle = $vehicle_selector_wrapper.find('.other_vehicle');
		var other_vehicle = $other_vehicle.val();

		if( $('.vehicle-selector-dropdowns').is(':visible') ) {

			if(chosen_make == 0) {
				show_vehicle_selection_form_error_message('Please select a make');
				flag = false;
				return false;
			}

			if(chosen_model == 0) {
				show_vehicle_selection_form_error_message('Please select a model');
				flag = false;
				return false;
			}

			if(chosen_series == 0) {
				show_vehicle_selection_form_error_message('Please select a series');
				flag = false;
				return false;
			}

			ajax_data.make = chosen_make;
			ajax_data.model = chosen_model;
			ajax_data.series = chosen_series;
			ajax_data.other_vehicle = '';

		} else {
			if( other_vehicle == '' ) {
				show_vehicle_selection_form_error_message( 'Please enter your vehicle' );
				flag = false;
				return false;
			}

			ajax_data.make = 0;
			ajax_data.model = 0;
			ajax_data.series = 0;
			ajax_data.other_vehicle = other_vehicle;
		}

		if( run_postcode_stuff ) {
			if( postcode.length < 4 || postcode.length > 4 || !$.isNumeric( postcode ) ) {
				show_vehicle_selection_form_error_message('Please enter a valid postcode');
				flag = false;
				return false;
			} else {
				ajax_data.postcode = postcode;
			}
		} else {
			ajax_data.postcode = '';
		}

		if( flag ) {
			return ajax_data;
		} else {
			return false;
		}

	}

	function show_vehicle_selection_form_error_message( message ) {
		$('.vehicle-selector-validation-message').hide().html(message).fadeIn('normal');
	}

	function remove_vehicle_selection_form_error_message() {
		$('.vehicle-selector-validation-message').hide().html('');
	}

	$('body').on('submit', 'form[name=form-select-my-vehicle]', function(e) {
		e.preventDefault();

		var $vehicle_selector_wrapper = $(this).find('.arb-fancybox-content-wrapper');
		var form_data = get_vehicle_selector_form_data( $vehicle_selector_wrapper, false );
		
		if( form_data ) {
			$.ajax({
				type: "POST",
				url: volAjax.ajaxurl,
				dataType: 'JSON',
				data: form_data,
				success: function(data) {
					if(data.error == 0) {
						if( data.page.length > 0 ) {
							top.location.href = data.page;
						} else {
							location.reload();
						}
					} else {
						show_vehicle_selection_form_error_message('The postcode you entered is invalid, please try again');
					}
				}
			});
		}
	});

	$('body').on( 'click', '.switch-to-input a', function(e) {
		e.preventDefault();
		var $vehicle_selector_wrapper = $(this).closest('.vehicle-selector-inputs');
		remove_vehicle_selection_form_error_message();

		$vehicle_selector_wrapper.find('.other_vehicle, .switch-to-dropdowns').fadeIn('fast');
		$vehicle_selector_wrapper.find('.vehicle-selector-dropdowns, .switch-to-input').hide();
	});

	$('body').on( 'click', '.switch-to-dropdowns a', function(e) {
		e.preventDefault();
		var $vehicle_selector_wrapper = $(this).closest('.vehicle-selector-inputs');
		remove_vehicle_selection_form_error_message();

		$vehicle_selector_wrapper.find('.vehicle-selector-dropdowns, .switch-to-input').fadeIn('fast');
		$vehicle_selector_wrapper.find('.other_vehicle, .switch-to-dropdowns').hide();
		
	});

	$('body').on('submit', 'form[name=form-pricelist_download]', function(e) {
		e.preventDefault();

		var $vehicle_selector_wrapper = $(this).find('.arb-fancybox-content-wrapper');
		var form_data = get_vehicle_selector_form_data( $vehicle_selector_wrapper, true );

		if( form_data) {

			$.ajax({
				type: "POST",
				url: volAjax.ajaxurl,
				dataType: 'JSON',
				data: form_data,
				success: function(data) {

					if( data.error == 0 ) {
						if( data.pricelist_error ) {
							show_vehicle_selection_form_error_message( data.pricelist_error_message );
						} else {
							// console.log( data.pricelist_id );
							top.location.href = '/download/?fl=' + data.pricelist_id;
							$.fancybox.close();
						}
					} else {
						show_vehicle_selection_form_error_message('The postcode you entered is invalid, please try again');
					}
				}
			});
		}
	});


	$('body').on(' submit', 'form[name=postcode-state-select-form]', function(e) {
		e.preventDefault();

		var postcode = $('#state-selector-postcode').val();
		var flag = true;
		var $error_container = $('.postcode-selector-error');

		if( (postcode.length < 3 || postcode.length > 4) || !$.isNumeric( postcode ) ) {
			$error_container.text('Please enter a valid postcode');
			flag = false;
		}

		if( flag ) {
			$error_container.text('');
			$.ajax({
				type: "POST",
				url: volAjax.ajaxurl,
				dataType: 'json',
				data: {
					postcode: postcode,
					action: 'get_state_from_postcode'
				},
				success: function( data ) {
					if( data.result == 'ERROR' ) {
						$error_container.text( data.message );
					} else {
						location.reload();
					}
				}
			});
		}
	});

	function update_product_description_text() {
		$.ajax({
			type: "POST",
			url: volAjax.ajaxurl,
			data: {
				action: 'product_description_string'
			},
			success: function(data) {
				$('.product-description').html(data);
			}
		});
	}

	function update_vehicle_selector_popup() {
		$.ajax({
			type: "POST",
			url: volAjax.ajaxurl,
			data: {
				action: 'update_vehicle_selector_popup'
			},
			success: function(data) {
				$('#select-my-vehicle').replaceWith( data );
				select_box_workaround( $('#select-my-vehicle .choose-make') );
				select_box_workaround( $('#select-my-vehicle .choose-model') );
				select_box_workaround( $('#select-my-vehicle .choose-series') );
				prepopulate_vehicle_selector();
			}
		});
	}

	$('.store-finder-tabs .tab').click(function() {
		var tab_name = $(this).data('tab-content');

		$('.store-finder-tabs .tab').removeClass('active-tab');
		$(this).addClass('active-tab');

		$('.store-finder-tab-content .tab-content').removeClass('active-tab-content');
		$('.tab-' + tab_name + '-content').addClass('active-tab-content');
	});

	$('.star').mouseover(function() {
		$(this).removeClass('grey').addClass('red').prevAll('.star').removeClass('grey').addClass('red');
	});

	$('.star').mouseout(function() {
		$(this).removeClass('red').addClass('grey').prevAll('.star').removeClass('red').addClass('grey');
	});

	$('.star').click(function() {
		$('.star').each(function() {
			$(this).removeClass('selected-red');
		});

		$(this).addClass('selected-red').prevAll('.star').addClass('selected-red');
		var count_red_stars = $('.selected-red').length;
		var star_rating  = count_red_stars / 2;

		$(this).closest('ul').next('.star-rating-input').find('input[type=text]').val(star_rating);
	});

	$('.reset-stars').click(function() {
		$(this).next('input[type=text]').val('');
		$('.star').each(function() {
			$(this).removeClass('selected-red');
		});
	});

	$('body').on( 'click', '#month-selector li:not(.active-month)', function() {
		var month_to_show = $(this).data('month');

		$('#month-selector li').removeClass('active-month');
		$(this).addClass('active-month');

		$('.a-month-of-events').hide().removeClass('active-month-listing');
		$('.a-month-of-events.' + month_to_show).fadeIn('fast', function() {
				$(this).addClass('active-month-listing');
			});
		
	});

	$('.large-menu .product-mega-menu .col1 li:not(.no-function)').bind( 'mouseenter', function() {
		$('.col2 > div, .col3 > div').each(function() {
			$(this).hide();
		});

		var menuitem = $(this).data('menuitem');
		$('.col2 > div[data-secondcol-menuitem="' + menuitem + '"]').fadeIn(250);
		$('.col3 > div[data-thirdcol-menuitem="' + menuitem + '"]').fadeIn(250);
	});

	/*$('.small-menu .col1 ul li:not(".no-function")').each(function() {
		var menu_item_key = $(this).data('menuitem');
		var this_item_href = $(this).find('a').attr('href');

		var $thirdcol = $('.col3 > div[data-thirdcol-menuitem="' + menu_item_key + '"]');

		var $subnav = $thirdcol.find('.product-subnav-list');

		if( $subnav.length > 0 ) {
			$subnav.find('.no-function').last().after('<li class="hide-for-large"><a href="' + this_item_href + '">Overview</a></li>');
		}
	});*/

	$('.view-more-spreadsheet-results a').click(function(e) {
		e.preventDefault();
		var $this_table = $(this).parent('p').prev('.google-spreadsheet-table');
		var $hidden_rows = $this_table.find('tr.hidden-row');
		var $button = $(this);

		for( var i = 0; i < 20; i++ ) {
			$($hidden_rows[i]).fadeIn( 'fast', function() {
				$(this).removeClass('hidden-row');

				if( $this_table.find('tr.hidden-row').length == 0 ) {
					$button.addClass('hidden-button');
				}
			});
		}


	});

	$('.toggle-mobile-categories').click(function(e) {
		var $button = $(this);
		var $categories_block = $button.closest('.categories-block');
		var $cat_list = $categories_block.find('ul');

		$cat_list.slideToggle('fast', function() {
			$button.toggleClass('active');
		});
	});

	$(":file").uniform({fileButtonClass: 'file-btn'});
	$(":radio").uniform();
	$(":checkbox").uniform();

	$(document).bind('gform_post_render', function( event, form_id, current_page ) {
		$(":file").uniform({fileButtonClass: 'file-btn'});
		$(":radio").uniform();
		$(":checkbox").uniform();
	});

	$('.accordion-title').click(function() {
		var $accordion_title = $(this);
		var $accordion_content = $(this).next('.accordion-content');

		$accordion_content.slideToggle('fast', function() {
			$(this).toggleClass('active');
			$accordion_title.toggleClass('active');
		});
	});

	// add the table of contents links to the item decription
	$('table.toc a').each(function() {
		var $a = $(this);
		$a.attr('target', '_blank');
		var $desctd = $a.closest('td').next();	
		$desctd.wrapInner(function() {
			return "<a class='pdfdesc' target='_blank' href='" + $a.attr('href') + "'></a>";
		});

	});

	// add the table of contents links to the item decription of second accordian (5 column layout)
	$('table.tocLarge a').each(function() {
		var $a = $(this);
		$a.attr('target', '_blank');
		var $desctd = $a.closest('td').next().next();	
		$desctd.wrapInner(function() {
			return "<a class='pdfdesc' target='_blank' href='" + $a.attr('href') + "'></a>";
		});

	});

	// Custom tracking for /omepromo CTA snippet BP 16-6-2015
	$('#snippet-25889 article:nth-child(1)').on('click', '.btn', function() {
		try{
			__adroll.record_user({"adroll_segments": "251ab3d3"})
		} catch(err) {}
	});
	$('#snippet-25889 article:nth-child(2)').on('click', '.btn', function() {
		try{
			__adroll.record_user({"adroll_segments": "9c22c581"})
		} catch(err) {}
	});
	$('#snippet-25889 article:nth-child(3)').on('click', '.btn', function() {
		try{
			__adroll.record_user({"adroll_segments": "a160497d"})
		} catch(err) {}
	});
});