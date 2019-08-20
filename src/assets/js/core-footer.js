(function () {
	/**
	 * 링크에 #이 있을 경우 이벤트 초기화
	 * */
	const aBlank = document.querySelectorAll('a[href="#"]');
	for (let i = 0; i < aBlank.length; i++) {
		const e = aBlank[i];

		e.addEventListener('click', (event) => {
			event.preventDefault();
		});
	}

	/**
	 * 메인페이지 목차 슬라이더
	 */
	// 블러 배경 이미지 Element
	const blurBackgroundElm = document.querySelector('.blur-background');

	// 목차 슬라이더 구성
	const contentsSlider = new Swiper('#main .swiper-container', {
		mousewheel: true,
		resistanceRatio: 0.5,
		slidesPerView: 2.5,
		loop: false,
		preloadImages: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},
		breakpoints: {
			1023: {
				slidesPerView: 1.2,
				direction: 'vertical',
				centeredSlides: true,
				lazy: {
					loadPrevNext: true,
					loadPrevNextAmount: 1,
				},
			},
		},
		on: {
			init() {
				const thisSlide = this.slides[this.activeIndex];
				const prevSlide = this.slides[this.previousIndex];

				const blurBackgroundUrl = thisSlide.querySelector('[data-blur-background]').getAttribute('data-blur-background');
				blurBackgroundElm.style.backgroundImage = `url(${blurBackgroundUrl})`;
			},
			slideChange() {
				const thisSlide = this.slides[this.activeIndex];
				const prevSlide = this.slides[this.previousIndex];
				// 블러 배경이미지 Element에 fadeOut 추가
				blurBackgroundElm.classList.add('fadeOut');
			},
			slideChangeTransitionEnd() {
				const thisSlide = this.slides[this.activeIndex];
				const prevSlide = this.slides[this.previousIndex];

				// 블러 배경이미지 URL 가져오기
				const blurBackgroundUrl = thisSlide.querySelector('[data-blur-background]').getAttribute('data-blur-background');

				// 블러 배경이미지 신규 생성
				const newBlurBackground = new Image();
				newBlurBackground.onload = function () {
					// 로드가 완료되면 실행
					blurBackgroundElm.style.backgroundImage = `url(${blurBackgroundUrl})`;
					blurBackgroundElm.classList.remove('fadeOut');
				};
				// 블러 배경이미지의 URL
				newBlurBackground.src = blurBackgroundUrl;
			},
		},
	});


	/**
	 * 숨겨진 목차 토글 버튼
	 */
	const hiddenContentsBtn = document.querySelector('#toggle-hidden-contents');
	const hiddenContents = document.querySelector('#hidden-contents');
	const hiddenContentsClose = hiddenContents.querySelector('.overlay');

	hiddenContentsBtn.addEventListener('click', (e) => {
		e.preventDefault();
		hiddenContents.classList.add('active');
	});

	hiddenContentsClose.addEventListener('click', (e) => {
		e.preventDefault();
		hiddenContents.classList.remove('active');
	});
}());
