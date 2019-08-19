<template>
	<div class="swiper-slide item">
		<router-link v-bind:to="'part' + slideItem.part">
			<div class="item-inner">

				<div class="custom-title">
					<h3 class="text" v-html="slideItem.title"></h3>
				</div>

				<!-- <div class="title">
					<h3 class="text" v-html="slideItem.title"></h3>
				</div> -->

				<img class="background-image swiper-lazy" alt="PART 배경 이미지"
					src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
					:data-src="slideItem.backgroundImage.normal"
					:data-blur-background="slideItem.backgroundImage.blur"
				>
				<div class="spinner swiper-lazy-preloader"></div>

				<!-- <div class="background-image swiper-lazy"
					:data-background="slideItem.backgroundImage.normal"
					:data-blur-background="slideItem.backgroundImage.blur">
					<div class="spinner"></div>
				</div> -->
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'mainSliderItem',
	props: {
		slideItem: {
			type: Object,
			required: true
		}
	},
}
</script>

<style lang="scss">
@import '@/assets/scss/import/_mixin.scss';
// Fonts
@import url('https://fonts.googleapis.com/css?family=Song+Myung&display=swap&subset=korean');

.item {
	height: 100%;

	a {
		display: block;
		height: 100%;
		box-shadow: 0 18px 24px rgba(0, 0, 0, 0.35);
		overflow: hidden;

		@include max-w(960) {
			border-radius: 20px;
		}
	}

	.item-inner {
		position: relative;
		display: flex;
		align-items: flex-end;
		padding: 150px 100px;
		height: 100%;
		background-color: #d8d8d8;
		overflow: hidden;

		.background-image {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center center;
			overflow: hidden;
		}

		@include max-w(960) {
			padding: 67px 30px;
			border-radius: 20px;

			.background-image {
				border-radius: 20px;
			}
		}
	}

	.title {
		position: relative;
		z-index: 2;
		width: 100%;
		font-size: 30px;
		color: #fff;

		.part {
			margin-bottom: 20px;
			font-size: 80%;
			font-weight: 400;
			line-height: 1;
		}

		.text {
			font-size: inherit;
			font-weight: 300;
			line-height: 1.3;
			letter-spacing: -0.25px;
		}

		@include max-w(960) {
			font-size: 25px;

			.part {
				margin-bottom: 10px;
				font-size: 25px;
			}

			.text {
				font-weight: 700;
			}
		}
	}

	.custom-title {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.text {
			font-family: 'Song Myung', sans-serif;
			font-size: 100px;
			font-weight: 400;
			color: #fff;
			line-height: 1.3;
		}
	}

	@include max-w(960) {
		padding: 26px 37px;
		height: inherit;
	}
}
</style>
