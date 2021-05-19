export default function SearchModule() {
	/* HEADER SEARCH */
	$('.header-search-icon').on('click', function () {
		$('.search-mobile').addClass('--active');
		$('body').addClass('stop-scrolling');
	});
	$('.search-mobile-close').on('click', function () {
		$('.search-mobile').removeClass('--active');
		$('body').removeClass('stop-scrolling');
	});
	/* HEADER SEARCH - END */
}
