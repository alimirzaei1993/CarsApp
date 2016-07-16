(function ( $ ) {
	$.fn.jMenu = function( options ) {

			var opts = $.extend( {}, $.fn.jMenu.defaults, options );
			var $menu = $(this);
			var menuSelector = this.selector;
			var $touchbutton = $(opts.menuButton);
			var $overlay = $('<div class="jmenu-overlay" />');
			var showOverlay = opts.showOverlay;
			var animateOverlay = opts.animateOverlay;
			var overlayOpacity = opts.overlayOpacity;
			var overlayAnimationSpeed = opts.overlayAnimationSpeed;

			// Adding some extra classes
			$menu.find('li').each(function() {
				if($(this).find('ul.sub-menu').length > 0) {
					$(this).addClass('jmenu-item-with-ul').prepend('<span class="top-level-vertical-expand" />');
				}

				if($(this).find('ul.sub-sub-menu').length > 0) {
					if(!$(this).hasClass('jmenu-item-with-ul')) {
						$(this).addClass('jmenu-item-with-second-ul').prepend('<span class="second-level-vertical-expand" />');
					}
				}

				if($(this).find('ul.sub-mega-menu').length > 0) {
					$(this).addClass('jmenu-item-with-mega-ul').prepend('<span class="top-level-side-expand" />');
				}
			});

			// Changing classes on resize depending on breakpoint
			resizer = function() {
				// Check if the window is below the breakpoint. 
				if($(window).width() <= opts.breakpoint) {
					// If so, we need to alter the classes and add a touch button
					toggleLargeToSmall($menu);
					toggleLargeToSmall($touchbutton);
					

				} else {
					toggleSmallToLarge($menu);
					toggleSmallToLarge($touchbutton);
					$('.col1, .col3, .sub-mega-menu, .sub-menu, .jmenu-item-with-mega-ul, .large-menu:not(' + opts.menuButton +'), .sub-sub-menu').removeAttr('style');
					$menu.removeClass('visible-menu');
					$touchbutton.removeClass('open');
					$menu.find('li').removeClass('visible-sub-menu');
				}
			};

			// Helper functions
			toggleSmallToLarge = function(elem) {
				elem.removeClass('small-menu').addClass('large-menu');
			};

			toggleLargeToSmall = function(elem) {
				elem.removeClass('large-menu').addClass('small-menu');
			};

			setCol1Height = function($col1, $mainli, $menu) {
				var col1_height = $col1.height();
				var item_height = parseInt($menu.find('li:first').outerHeight());
				var index = $mainli.index();
				var top_offset = index * item_height;
				var height_to_set = col1_height + top_offset;

				$mainli.height(height_to_set);
				$col1.css('top', top_offset + 'px');
			};

			setCol3Height = function($col3, $mainli, $menu) {
				var col3_height = $col3.height();
				var item_height = parseInt($menu.find('li:first').outerHeight());
				var index = $mainli.index();
				var top_offset = index * item_height;
				var height_to_set = col3_height + top_offset;

				$mainli.height(height_to_set);
				$col3.css('top', top_offset + 'px');
			};

			// Binding click events
			$('body').on('click', menuSelector + '.small-menu .top-level-vertical-expand', function(e) {
				e.stopPropagation();

				$(this).nextAll('.sub-menu').slideToggle('fast', function() {
					$(this).toggleClass('visible-sub-menu');
				});
			});

			$('body').on('click', menuSelector + '.small-menu > li > a', function(e) {
				if( $(this).nextAll('.sub-menu').length > 0 ) {
					e.stopPropagation();
					e.preventDefault();

					$(this).nextAll('.sub-menu').slideToggle('fast', function() {
						$(this).toggleClass('visible-sub-menu');
					});
				} else if( $(this).nextAll('.sub-mega-menu').length > 0 ) {
					e.stopPropagation();
					e.preventDefault();
					
					var $expander = $(this).prev('.top-level-side-expand');
					$expander.trigger( 'click' );	
				} else {
					top.location.href = $(this).attr('href');
				}
			});

/*			$('body').on('click', menuSelector + '.small-menu > li > a', function(e) {
				e.stopPropagation();
				e.preventDefault();

				var $expander = $(this).prev('.top-level-side-expand');
				$expander.trigger( 'click' );				
			});*/



			$('body').on('click', menuSelector + '.small-menu .second-level-vertical-expand', function(e) {
				e.stopPropagation();

				$(this).nextAll('.sub-sub-menu').slideToggle('fast', function() {
					$(this).toggleClass('visible-sub-menu');
				});
			});

			$('body').on('mouseenter', menuSelector + '.large-menu .sub-sub-menu li', function() {
				$(this).closest('li.jmenu-item-with-second-ul').addClass('li-being-hovered').next('li').addClass('nextli');
			}).on('mouseleave', menuSelector + '.large-menu .sub-sub-menu li', function() {
				$(this).closest('li.jmenu-item-with-second-ul').removeClass('li-being-hovered').next('li').removeClass('nextli');
			});


			$('body').on({
				mouseenter: function() {
					$(this).find('.sub-mega-menu').show();

					if(showOverlay) {
						$('body').append($overlay);

						if(animateOverlay) {
							$overlay.animate({
								opacity: overlayOpacity
							}, overlayAnimationSpeed);
						} else {
							$overlay.css('opacity', overlayOpacity);
						}
					}
				},
				mouseleave: function() {
					$(this).find('.sub-mega-menu').hide();

					if(showOverlay) {
						if(animateOverlay) {
							$overlay.animate({
								opacity: '0'
							}, overlayAnimationSpeed, function() {
								$overlay.remove();
							});
						} else {
							$overlay.remove();
						}
					}
					
				}
			}, menuSelector + '.large-menu .jmenu-item-with-mega-ul');

			$('body').on('focus', menuSelector + '.large-menu .col3 select', function() {
				$('body').off('mouseleave', menuSelector + '.large-menu .jmenu-item-with-mega-ul');
			});

			$('body').on('blur', menuSelector + '.large-menu .col3 select', function() {
				$('body').on('mouseleave', menuSelector + '.large-menu .jmenu-item-with-mega-ul', function() {
					largeMenuMouseLeave($(this));
				});
			});

			$('body').on('click', menuSelector + '.small-menu .top-level-side-expand', function(e) {
				e.stopPropagation();


				$(this).addClass('mega-menu-expanded');
				$(this).nextAll('.sub-mega-menu').show();
				var $col1 = $('.col1');
				var $mainli = $(this).closest('li');

				$col1.show();
				setCol1Height($col1, $mainli, $menu);

				$col1.animate({
					left: '0px'
				}, 'fast');
			});

			$('body').on('click', menuSelector + '.small-menu .jmenu-item-with-mega-ul .col1 li', function(e) {
				e.stopPropagation();
				e.preventDefault();


				var $col3 = $('.col3');
				var $mainli = $('.jmenu-item-with-mega-ul');

				if(!$(this).hasClass('no-function')) {

					// Load ajax content in here, and run animation on completion
					var menuitem = $(this).data('menuitem');
					$('.col3 > div').each(function() {
						$(this).hide();
					});

					var $col3_subnav = $('.col3 > div[data-thirdcol-menuitem="' + menuitem + '"]').find('.product-subnav-list');


					if( $col3_subnav.length > 0 ) {
						$('.col3 > div[data-thirdcol-menuitem="' + menuitem + '"]').show();
						$col3.animate({
							left: '0px'
						}, 'fast', function() {
							setCol3Height($col3, $mainli, $menu);
						});
					} else {
						top.location.href = $(this).find('a').attr('href');
					}
				}
			});


			$('body').on( 'click', menuSelector + '.small-menu .jmenu-item-with-mega-ul > a, ' + menuSelector + '.small-menu .jmenu-item-with-ul > a', function(e) {
				e.preventDefault();
			});

			$('body').on('click', menuSelector + '.small-menu .menu-back', function(e) {
				e.stopPropagation();
				e.preventDefault();

				var $col1 = $('.col1');
				var $col3 = $('.col3');
				var $mainli = $('.jmenu-item-with-mega-ul');

				$col1.show();
				setCol1Height($col1, $mainli, $menu);
				$col3.animate({
					left: '100%'
				}, 'fast');
			});

			$('body').on('click', menuSelector + ' .menu-close', function(e) {
				e.preventDefault();

				var $col1 = $('.col1');
				var $col3 = $('.col3');

				$col3.animate({
					left: '100%'
				}, 'fast', function() {
					$col1.animate({
						left: '100%'
					}, 'fast', function() {
						// Android default browser doesn't seem to like remove attr, setting it to blank works however
						// $('.jmenu-item-with-mega-ul').removeAttr('style');
						$('.jmenu-item-with-mega-ul').attr('style', '');
						$('.top-level-side-expand').removeClass('mega-menu-expanded');
					});
				});
			});

			$touchbutton.on('click', function() {
				$menu.slideToggle('fast', function() {
					$(this).toggleClass('visible-menu');
					$touchbutton.toggleClass('open');
				});
			});


			resizer();
			return $(window).on( 'resize', resizer );

	};

	$.fn.jMenu.defaults = {
		breakpoint: 768,
		menuButton: '.jmenu-button',
		showOverlay: true,
		overlayOpacity: 0.5,
		animateOverlay: true,
		overlayAnimationSpeed: 200
	};

}( jQuery ));
