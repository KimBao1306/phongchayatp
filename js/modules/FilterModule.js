export default function FilterModule() {
	$('.pd-filter-mobile').on('click', function () {
		$('.pd-filter').addClass('--active');
		$('body').addClass('stop-scrolling');
	});
	$('.pd-filter-close').on('click', function () {
		$('.pd-filter').removeClass('--active');
		$('body').removeClass('stop-scrolling');
	});
}
