
$(function () {
	// $("html,body").stop().animate({"scrollTop":0},1000);

	$(document).ready(function () {
		$('#fullpage').fullpage({
			//options here
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			autoScrolling: true,
			scrollHorizontally: true,
			responsive: 768,
			responsiveWidth: 768,
			navigation: true,
			navigationPosition: 'right',
			sectionSelector: '.selector'
		});
	});

});

