<template>
	<header id="header">
		<h1 class="title ff-myeongjo">{{ globalTitle }}</h1>

		<button id="toggle-hidden-contents">
			<span class="screen-reader-text">목차 열기 버튼</span>
			<img src="@/assets/images/header/toggle-content.png" alt="목차 열기 버튼"
				 srcset="@/assets/images/header/toggle-content@2x.png">
		</button>
	</header>
</template>

<script>
import Vue from 'vue';

const EventBus = new Vue();

export default {
	name: 'mainHeader',
	mounted() {
		const toggleBtn = this.$el.querySelector('#toggle-hidden-contents');
		const hiddenContents = document.querySelector('#hidden-contents');
		toggleBtn.addEventListener('click', (event) => {
			event.preventDefault();
			hiddenContents.classList.add('active');
		});
	},
};
</script>

<style lang="scss" scoped>
#header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	padding: 60px 100px 0;
	width: 100%;
	color: #fff;
	@include user-select(none);

	.title {
		font-size: 30px;
		font-weight: 400;
	}

	#toggle-hidden-contents {
		display: none;
		width: 40px;
		height: 40px;
		line-height: 0;
		background-color: #fff;
		border: 0;
		border-radius: 50%;
		box-shadow: 0 18px 40px rgba(41, 41, 41, 0.35);
		@include user-select(auto);

		img {
			width: 18px;
			height: 18px;
		}
	}

	@include max-w(960) {
		left: 0;
		right: 0;
		margin: 0 auto;
		padding: 30px 15px 0;
		max-width: 500px;
		width: 100%;

		.title {
			display: none;
		}

		#toggle-hidden-contents {
			display: block;
			outline: none;
		}
	}
}
</style>
