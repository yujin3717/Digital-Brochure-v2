<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import Vue from 'vue';

const EventBus = new Vue();

Vue.mixin({
	data() {
		return {
			get globalTitle() {
				return '제5회 신촌맥주축제';
			},
			/* partData: [
					{
						part: 1,
						title: '놀면 뭐 하나... <br>재밌겠지',
						backgroundImage: {
							normal: require('@/assets/images/contents/part1/background.jpg'),
							blur:   require('@/assets/images/contents/part1/background-blur.jpg'),
						},
					},
					{
						part: 2,
						title: '제5회 <br>신촌맥주축제',
						backgroundImage: {
							normal: require('@/assets/images/contents/part2/background.jpg'),
							blur:   require('@/assets/images/contents/part2/background-blur.jpg'),
						},
					},
					{
						part: 3,
						title: '감성 한 줄 <br>맥주 한 잔',
						backgroundImage: {
							normal: require('@/assets/images/contents/part3/background.jpg'),
							blur:   require('@/assets/images/contents/part3/background-blur.jpg'),
						},
					},
					{
						part: 4,
						title: '맥주축제 <br>in 신촌',
						backgroundImage: {
							normal: require('@/assets/images/contents/part4/background.jpg'),
							blur:   require('@/assets/images/contents/part4/background-blur.jpg'),
						},
					},
					{
						part: 5,
						title: '2018 <br>신촌맥주축제',
						backgroundImage: {
							normal: require('@/assets/images/contents/part5/background.jpg'),
							blur:   require('@/assets/images/contents/part5/background-blur.jpg'),
						},
					},
				] */
		};
	},
	mounted() {
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
	},
});

// https://stackoverflow.com/questions/44371639/how-to-remove-html-tags-from-rendered-text
Vue.filter('striphtml', (value) => {
	const div = document.createElement('div');
	div.innerHTML = value;
	const text = div.textContent || div.innerText || '';
	return text;
});

export default {
	name: 'App',
};
</script>

<style lang="scss">
	@import '@/assets/scss/reset.scss';
	@import '@/assets/scss/core.scss';

	.fade-out-enter-active,
	.fade-out-leave-active {
		transition: opacity 0.7s;
	}
	.fade-out-enter,
	.fade-out-leave-to {
		opacity: 0;
	}

	.fade-down-enter-active {
		animation: fadeDown 0.7s;
	}
	.fade-down-leave-active {
		animation: fadeDown 0.7s reverse;
	}

	@keyframes fadeDown {
		0% { opacity: 0; transform: translate3d(0, -30px, 0); }
		100% { opacity: 1; transform: translate3d(0, 0, 0); }
	}
</style>
