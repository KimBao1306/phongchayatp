export default function HeaderCateModule() {
	if ($('.header-cate').length) {
		$('.header-cate-title').on('click', function () {
			$(this).parent().toggleClass('--active');
			if ($(window).width() <= 992) {
				$('body').toggleClass('stop-scrolling');
			}
		});
		$(document).on('click', function (e) {
			if (!e.target.closest('.header-cate')) {
				$('.header-cate').removeClass('--active');
			}
		});
	}
}
