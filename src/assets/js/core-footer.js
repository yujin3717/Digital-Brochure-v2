(function() {

	/**
	 * 링크에 #이 있을 경우 이벤트 초기화
	 **/
	var aBlank = document.querySelectorAll('a[href="#"]');
	for ( var i = 0; i < aBlank.length; i++ ) {
		var e = aBlank[i];

		e.addEventListener('click', function(event) {
			event.preventDefault();
		});
	}

	/**
	 * 메인페이지 목차 슬라이더
	 */
	// 블러 배경 이미지 Element
	var blurBackgroundElm = document.querySelector('.blur-background');

	// 목차 슬라이더 구성
	var contentsSlider = new Swiper('#main .swiper-container', {
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
			init: function() {
				var thisSlide = this.slides[this.activeIndex];
				var prevSlide = this.slides[this.previousIndex];

				var blurBackgroundUrl = thisSlide.querySelector('[data-blur-background]').getAttribute('data-blur-background');
				blurBackgroundElm.style.backgroundImage = 'url('+blurBackgroundUrl+')';
			},
			slideChange: function() {
				var thisSlide = this.slides[this.activeIndex];
				var prevSlide = this.slides[this.previousIndex];
				// 블러 배경이미지 Element에 fadeOut 추가
				blurBackgroundElm.classList.add('fadeOut');
			},
			slideChangeTransitionEnd: function() {
				var thisSlide = this.slides[this.activeIndex];
				var prevSlide = this.slides[this.previousIndex];

				// 블러 배경이미지 URL 가져오기
				var blurBackgroundUrl = thisSlide.querySelector('[data-blur-background]').getAttribute('data-blur-background');

				// 블러 배경이미지 신규 생성
				var newBlurBackground = new Image;
				newBlurBackground.onload = function() {
					// 로드가 완료되면 실행
					blurBackgroundElm.style.backgroundImage = 'url('+blurBackgroundUrl+')';
					blurBackgroundElm.classList.remove('fadeOut');
				}
				// 블러 배경이미지의 URL
				newBlurBackground.src = blurBackgroundUrl;
			},
		},
	});


	/**
	 * 숨겨진 목차 토글 버튼
	 */
	var hiddenContentsBtn   = document.querySelector('#toggle-hidden-contents');
	var hiddenContents      = document.querySelector('#hidden-contents');
	var hiddenContentsClose = hiddenContents.querySelector('.overlay');

	hiddenContentsBtn.addEventListener('click', function(e) {
		e.preventDefault();
		hiddenContents.classList.add('active');
	});

	hiddenContentsClose.addEventListener('click', function(e) {
		e.preventDefault();
		hiddenContents.classList.remove('active');
	});

})();
