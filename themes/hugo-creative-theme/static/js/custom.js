$(document).ready(function () {
	$('a[href^="go-home-stupid-bot"]').each(function (index) {
		oh = $(this).attr("href").replace("go-home-stupid-bot", "https://t.me/joinchat");
		$(this).attr("href", oh);
	});
});
