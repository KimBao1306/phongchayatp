export default function HeaderModule() {
	/** MENU BUTTON */
	if (
		$('.header .hamburger-btn').length &&
		$('.header__list-wrap').length &&
		$('.overlay').length
	) {
		$('.header .hamburger-btn').on('click', function () {
			$('.header .hamburger-btn').toggleClass('--active');
			$('.header__list-wrap').toggleClass('--active');
			if ($('.header .hamburger-btn').hasClass('--active')) {
				$('body').addClass('stop-scrolling');
			} else {
				$('body').removeClass('stop-scrolling');
			}
		});
		$('.overlay').on('click', function () {
			$('.hamburger-btn').removeClass('--active');
			$('.header__list-wrap').removeClass('--active');
			// CLOSE ALL MENU WHEN CLICK OUTSIDE
			$('.header__list  .dropdown')
				.removeClass('--show')
				.find('.sub-menu')
				.slideUp();
			$('.header__list  .dropdown .fa').removeClass('--active');
			$('body').removeClass('stop-scrolling');
		});
	}
	/** MENU BUTTON - END*/
}
