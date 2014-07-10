(function($){
	var articlesCount = 0,
	accordionify = function (){
		if($('article').length != articlesCount) {
			articlesCount = $('article').each(function(){
				if($(this).data('accordion-toggled') == null){
					$(this)
						.data('accordion-toggled', false)
						.find('.articleContent').fadeOut(1).end()
						.find('h1').prepend('<span class="accordion" style="cursor:pointer;">[+]</span>');

					$(this).find('.accordion')
						.click(function(){
							var button, $parent = $(this).closest('article');
							if($parent.data('accordion-toggled')) {
								$parent.find('.articleContent').fadeOut();
								$parent.data('accordion-toggled', false);
								button = '+';
							} else {
								$parent.find('.articleContent').fadeIn();
								$parent.data('accordion-toggled', true);
								button = '-';
							}
							$parent.find('.accordion').text('['+button+']');
						});
				}
			}).length;
		}
	}
	$(window).scroll(accordionify);
	accordionify();
})(jQuery);