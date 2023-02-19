$(document).ready(function () {
			var $root = $('html, body');
			$('#lets').click(function () {
				var href = $.attr(this, 'href');
				$root.animate({
					scrollTop: $(href).offset().top
				}, 800, function () {
					window.location.hash = href;
				}); return false;
			});
		})