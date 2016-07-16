(function($) {
	/**
	 *
	 * RoyalSlider bullets module
	 * @version 1.0.1:
	 *
	 * 1.0.1
	 * - Minor optimizations
	 * 
	 */ 
	$.extend($.rsProto, {
		_initJBullets: function() {
			var self = this;
			if(self.st.controlNavigation === 'custom-bullets') {

				var itemHTML = '<div class="rsNavItem rsBullet"><span></span></div>';
				self.ev.one('rsAfterPropsSetup', function() {

					self._controlNavEnabled = true;
					self.slider.addClass('rsWithBullets');
					var out = '<div class="rsNav rsBullets">';
					for(var i = 0; i < self.numSlides; i++) {
						out += itemHTML;
					}
					self._controlNav = out = $(out + '</div>');

					

					self._controlNavItems = out.appendTo(self.slider).find('.rsNavItem');

					if(self.st.bulletsWrapper) {
						self._controlNav.wrap(self.st.bulletsWrapper);
					}

					self._controlNav.on('click.rs','.rsNavItem',function(e) {
						if(!self._thumbsDrag ) {
							self.goTo( $(this).index() );
						}
					});
				});

				self.ev.on('rsOnAppendSlide', function(e, parsedSlide, index) {
					if(index >= self.numSlides) {
						self._controlNav.append(itemHTML);
					} else {
						self._controlNavItems.eq(index).before(itemHTML);
					}
					self._controlNavItems = self._controlNav.find('.rsNavItem');
				});
				self.ev.on('rsOnRemoveSlide', function(e, index) {
					var itemToRemove = self._controlNavItems.eq(index);
					if(itemToRemove && itemToRemove.length) {
						itemToRemove.remove();
						self._controlNavItems = self._controlNav.find('.rsNavItem');
					}
					
				});	

				self.ev.on('rsOnUpdateNav', function() {
					var id = self.currSlideId,
						currItem,
						prevItem;

					if(self._prevNavItem) {
						self._prevNavItem.removeClass('rsNavSelected');
					}
					currItem = $(self._controlNavItems[id]);

					currItem.addClass('rsNavSelected');
					self._prevNavItem = currItem;
				});
			}
		}
	});
	$.rsModules.jBullets = $.rsProto._initJBullets;
})(jQuery);