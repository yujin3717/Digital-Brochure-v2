<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import Vue from 'vue';

Vue.mixin({
	data() {
		return {
			get globalTitle() {
				return '제5회 신촌맥주축제'
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
		}
	},
	mounted() {
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
	}
});

// https://stackoverflow.com/questions/44371639/how-to-remove-html-tags-from-rendered-text
Vue.filter('striphtml', function (value) {
	var div = document.createElement("div");
	div.innerHTML = value;
	var text = div.textContent || div.innerText || "";
	return text;
});

export default {
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/core.scss';
</style>
