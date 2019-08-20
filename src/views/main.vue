<template>
	<div id="wrap">
		<transition name="fade-out" appear>
			<!-- cover.vue 컴포넌트에서 coverParent 라는 이벤트 수신을 위해 v-on:coverParent를 붙였습니다. -->
			<cover v-if="showCover" v-on="{ 'coverParent' : coverControl }" />
		</transition>

		<mainHeader />

		<div id="main">
			<h2 class="screen-reader-text">목차</h2>

			<div class="swiper-container">
				<div class="swiper-wrapper">

					<mainSliderItem
						v-for="(slideItem, index) in slideItemData"
						v-bind:key="index"
						v-bind:slideItem="slideItem"
					></mainSliderItem>

				</div>
			</div>

			<div class="blur-background"></div>
		</div>

		<hiddenContents />
		<mainFooter/>
	</div>
</template>

<script>
import Vue from 'vue';
import Swiper from 'swiper/dist/js/swiper.js';

import cover from '@/components/cover.vue';
import mainHeader from '@/components/main/mainHeader.vue';
import mainFooter from '@/components/main/mainFooter.vue';
import mainSliderItem from '@/components/main/mainSliderItem.vue';
import hiddenContents from '@/components/hiddenContents/template.vue';

const EventBus = new Vue();

export default {
	name: 'mainpage',
	components: {
		cover,
		mainHeader,
		mainFooter,
		mainSliderItem,
		hiddenContents,
	},
	data() {
		return {
			showCover: false,
			slideItemData: [
				{
					part: 1,
					title: '놀자<div style="margin: 0 auto; width: 3px; height: 100px; background-color: #fff;"></div>즐겨',
					backgroundImage: {
						normal: require('@/assets/images/contents/part1/background.jpg'),
						blur: require('@/assets/images/contents/part1/background-blur.jpg'),
					},
				},
				{
					part: 2,
					title: '신촌<div style="margin: 0 auto; width: 3px; height: 100px; background-color: #fff;"></div>맥주',
					backgroundImage: {
						normal: require('@/assets/images/contents/part2/background.jpg'),
						blur: require('@/assets/images/contents/part2/background-blur.jpg'),
					},
				},
				{
					part: 3,
					title: '감성<div style="margin: 0 auto; width: 3px; height: 100px; background-color: #fff;"></div>맥주',
					backgroundImage: {
						normal: require('@/assets/images/contents/part3/background.jpg'),
						blur: require('@/assets/images/contents/part3/background-blur.jpg'),
					},
				},
				/* {
						part: 4,
						title: '브루<div style="margin: 0 auto; width: 3px; height: 100px; background-color: #fff;"></div>어리',
						backgroundImage: {
							normal: require('@/assets/images/contents/part4/background.jpg'),
							blur:   require('@/assets/images/contents/part4/background-blur.jpg'),
						},
					}, */
				{
					part: 5,
					title: '지난<div style="margin: 0 auto; width: 3px; height: 100px; background-color: #fff;"></div>축제',
					backgroundImage: {
						normal: require('@/assets/images/contents/part5/background.jpg'),
						blur: require('@/assets/images/contents/part5/background-blur.jpg'),
					},
				},
			],
			slideNum: null,
		};
	},
	beforeRouteEnter(to, from, next) {
		/**
		 * 2019-08-19 part 내지에서 뒤로가기 했을 때 해당 파트의 카드로 이동되게 하는 스크립트
		 * 코드 개선 필요
		 */
		if (from !== null && from.name !== null) {
			next((vm) => {
				vm.setPrevData(from);
			});
		} else {
			next(); // next를 해야 스크립트가 멈추지 않고 계속 작동한다 (return true와 비슷한 개념)
		}
	},
	beforeRouteUpdate(to, from, next) {
		/**
			 * 2019-08-19 part 내지에서 뒤로가기 했을 때 해당 파트의 카드로 이동되게 하는 스크립트
			 * 코드 개선 필요
			 */
		this.slideNum = null;
		this.setPrevData(from);
		next((vm) => {
			vm.iosHeightFix( vm.$el.querySelector('#main .swiper-container').swiper );
		}); // next를 해야 스크립트가 멈추지 않고 계속 작동한다 (return true와 비슷한 개념)
	},
	mounted() {
		const mainSelf = this;

		const blurBackgroundElm = document.querySelector('.blur-background');

		const contentsSlider = new Swiper('.swiper-container', {
			mousewheel: true,
			resistanceRatio: 0.5,
			slidesPerView: 2.5,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 2,
			},
			breakpoints: {
				960: {
					slidesPerView: 1.2,
					direction: 'vertical',
					resistanceRatio: 0.85,
					centeredSlides: true,
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

		// ios에서 브라우저 하단 버튼bar 때문에 높이가 잘려 보이는 문제를 해결하기 위해 추가
		this.iosHeightFix(contentsSlider);
	},
	methods: {
		coverControl() {
			const self = this;

				self.$nextTick(() => {
				setTimeout(() => {
					self.showCover = !self.showCover;
				}, 400);
			});
		},
		iosHeightFix(slider) {
			window.onresize = function() {
				document.body.height = window.innerHeight;
			};
			window.onresize();
		},
		setPrevData(from) {
			/**
				 * 2019-08-19 part 내지에서 뒤로가기 했을 때 해당 파트의 카드로 이동되게 하는 스크립트
				 * 코드 개선 필요
				 */
			const self = this;
			const partNum = parseInt(from.name.replace('part', ''));
			const slider = document.querySelector('#main .swiper-container').swiper;

			self.slideNum = partNum - 1;
			self.showCover = false;

			slider.slideTo(self.slideNum, 0);
		},
	},
};
</script>

<style lang="scss" scoped>
#main {
	height: 100%;

	.swiper-container {
		position: relative;
		z-index: 2;
		height: 100%;

		@include max-w(960) {
			max-width: 500px;
		}
	}

	.blur-background {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		opacity: 1;
		visibility: visible;
		transition: opacity 0.2s, visibility 0.2s;

		&.fadeOut {
			opacity: 0;
			visibility: hidden;
		}

		@include max-w(1023) {
			display: block;
		}
	}
}
</style>
