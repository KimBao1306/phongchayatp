import AosModule from './AosModule.js';

export default function LoadingModule() {
	if ($('#page-loading')) {
		$('.page-loading-logo').addClass('--hidden');
		$('.page-loading-bg').addClass('--hidden');
		$('#page-loading').addClass('--hidden');

		const onAnimationEnd = (element, handler) => {
			var events =
				'animationend transitionend webkitAnimationEnd oanimationend MSAnimationEnd webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd';
			$(element).one(events, handler);
		};
		const runCallback = (e) => {
			AosModule();
		};

		onAnimationEnd('#page-loading', runCallback);
	}
}
