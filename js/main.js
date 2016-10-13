$(document).ready(function(){

	var $toggleNavButton = $('.toggle-nav'),
		$mainNavList = $('#main-nav ul');

	$toggleNavButton.on('click', function(e) {
		e.preventDefault;
		e.stopPropagation();
		$(this).toggleClass('open');
		$mainNavList.toggleClass('toggle');
	});

});