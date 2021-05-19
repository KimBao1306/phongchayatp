export default function BannerModule() {
	function bannerSlider(el) {
		const $this = $(el);
		const $swiper = $this.find('.swiper-container');
		const nextBtn = $this.find('.swiper-button-next');
		const prevBtn = $this.find('.swiper-button-prev');
		const pagination = $this.find('.swiper-pagination');
		const isLoop = $this.hasClass('--loop') || false;
		const isAuto =
			($this.hasClass('--auto') && {
				speed: 6000,
				delay: 5000,
				disableOnInteraction: false,
			}) ||
			false;
		const swiper_common = new Swiper($swiper, {
			speed: 1200,
			// autoHeight: false,
			autoplay: isAuto,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			pagination: {
				el: pagination,
				clickable: true,
			},
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},
			loop: isLoop,
			on: {
				slideChangeTransitionStart: function () {
					const currentIndex = this.params.loop
						? this.activeIndex
						: this.realIndex;
					const currentSlide = this.slides[currentIndex];
					$(currentSlide).find('.banner-item').removeClass('--active');
				},
				slideChangeTransitionEnd: function () {
					const currentIndex = this.params.loop
						? this.activeIndex
						: this.realIndex;
					const currentSlide = this.slides[currentIndex];
					$(currentSlide).find('.banner-item').addClass('--active');
				},
			},
		});
	}
	function multiSlider(el) {
		$(el).each((_, s) => {
			bannerSlider(s);
		});
	}
	$('.banner .is-slider').length && multiSlider('.banner .is-slider');
}
