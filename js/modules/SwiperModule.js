export default function SwiperModule() {
	/** SWIPER */
	// RUN SLIDER IN MOBILE
	let sliderMobileList = [];
	function sliderMobile() {
		var screenWidth = $(window).width();
		if (screenWidth > 767 && sliderMobileList.length !== 0) {
			sliderMobileList.map((s) => s.destroy());
			sliderMobileList = [];
			$('.swiper-wrapper').removeAttr('style');
			$('.swiper-slide').removeAttr('style');
		} else if (screenWidth <= 767 && sliderMobileList.length === 0) {
			$('.is-slider-mobile').each(function () {
				const $this = $(this);
				const $swiper = $this.find('.swiper-container');
				const nextBtn = $this.find('.swiper-button-next');
				const prevBtn = $this.find('.swiper-button-prev');
				const pagination = $this.find('.swiper-pagination');
				const isLoop = $this.hasClass('--loop') || false;
				const isParallax = $this.hasClass('--parallax') || false;
				const isCenter = $this.hasClass('--center') || false;
				const isAuto =
					($this.hasClass('--auto') && {
						speed: 6000,
						delay: 5000,
						disableOnInteraction: false,
					}) ||
					false;
				const tempSwiper = new Swiper($swiper, {
					speed: 1200,
					// autoHeight: false,
					autoplay: isAuto,
					slidesPerView: 'auto',
					watchSlidesProgress: true,
					// TRIGGER SWIPER RUN ASYNCHRONOUS
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
					centeredSlides: isCenter,
					parallax: isParallax,
					loop: isLoop,
				});
				sliderMobileList.push(tempSwiper);
			});
		}
	}
	$('.is-slider-mobile').length && sliderMobile();
	$(window).on('resize', function () {
		$('.is-slider-mobile').length && sliderMobile();
	});
	// RUN SLIDER IN MOBILE - END

	// SLIDER COMMON
	function swiper(el, callback = null) {
		const $this = $(el);
		const $swiper = $this.find('.swiper-container');
		const nextBtn = $this.find('.swiper-button-next');
		const prevBtn = $this.find('.swiper-button-prev');
		const pagination = $this.find('.swiper-pagination');
		const isLoop = $this.hasClass('--loop') || false;
		const isParallax = $this.hasClass('--parallax') || false;
		const isAuto =
			($this.hasClass('--auto') && {
				speed: 6000,
				delay: 5000,
				disableOnInteraction: false,
			}) ||
			false;
		const isCenter = $this.hasClass('--center') || false;
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
			centeredSlides: isCenter,
			parallax: isParallax,
			loop: isLoop,
			on: {
				init: function () {
					if (
						this.params.loop &&
						this.el.querySelector('.is-lightgallery') &&
						$('.is-lightgallery').length
					) {
						$('.is-lightgallery').data('lightGallery').destroy(true);
						$('.is-lightgallery').lightGallery({
							thumbnail: true,
						});
					}
				},
				slideChange: function () {
					callback && callback.call(this);
				},
				// slideChangeTransitionStart: function () {},
			},
		});
	}
	function runSwiperCommon(el) {
		$(el).each((_, s) => {
			swiper(s);
		});
	}
	$('.is-slider.is-slider-common').length &&
		runSwiperCommon('.is-slider.is-slider-common');
	// SLIDER COMMON - END

	// PRODUCT DETAIL
	function productDetail() {
		const thumbsS = new Swiper('.slider-detail-thumbs .swiper-container', {
			speed: 1200,
			autoplay: {
				delay: 5000,
			},
			spaceBetween: 10,
			slidesPerView: 3,
			loop: false,
			breakpoints: {
				768: {
					spaceBetween: 10,
					slidesPerView: 4,
				},
			},
		});
		const mainS = new Swiper('.slider-detail .swiper-container', {
			speed: 1200,
			autoplay: {
				delay: 5000,
			},
			spaceBetween: 10,
			slidesPerView: 1,
			navigation: {
				nextEl: $('.slider-detail .swiper-button-next'),
				prevEl: $('.slider-detail .swiper-button-prev'),
			},
			loop: false,
			thumbs: {
				swiper: thumbsS,
			},
		});
	}
	$('.slider-detail .is-slider').length &&
		$('.slider-detail-thumbs .is-slider').length &&
		productDetail();
	/** SWIPER - END*/
}
