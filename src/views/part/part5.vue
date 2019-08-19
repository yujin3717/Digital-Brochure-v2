<template>
	<div id="part">
		<header id="part-header">
			<h1 class="screen-reader-text">{{ globalTitle }}</h1>
		</header>

		<main id="part-container">
			<section class="container">

				<div class="top-image" v-bind:style="'background-image: url('+require( '@/assets/images/contents/part5/top_img@1x.png')+');'">
					<div class="border" v-bind:style="'background-image: url('+require( '@/assets/images/contents/part5/box@1x.png')+');'">
						<div class="caption01 ff-myeongjo" style="writing-mode: tb-rl">신촌</div>
						<div class="caption02 ff-myeongjo" style="writing-mode: tb-rl">맥주축제</div>
					</div>
				</div>

				<div class="slider">

					<div class="title">자기의 취향을 찾아가는 맥주축제</div>

					<div class="slider-area">

						<div class="swiper-container">
							<div class="swiper-wrapper">

								<div class="swiper-slide">
									<img src="@/assets/images/contents/part5/img_1@1x.jpg" alt="맥주축제 이미지01"
										 srcset="@/assets/images/contents/part5/img_1@2x.jpg 2x">
								</div>
								<div class="swiper-slide">
									<img src="@/assets/images/contents/part5/img_2@1x.jpg" alt="맥주축제 이미지02"
										 srcset="@/assets/images/contents/part5/img_2@2x.jpg 2x">
								</div>
								<div class="swiper-slide">
									<img src="@/assets/images/contents/part5/img_3@1x.jpg" alt="맥주축제 이미지03"
										 srcset="@/assets/images/contents/part5/img_3@2x.jpg 2x">
								</div>
								<div class="swiper-slide">
									<img src="@/assets/images/contents/part5/img_4@1x.jpg" alt="맥주축제 이미지04"
										 srcset="@/assets/images/contents/part5/img_4@2x.jpg 2x">
								</div>
								<div class="swiper-slide">
									<img src="@/assets/images/contents/part5/img_5@1x.jpg" alt="맥주축제 이미지05"
										 srcset="@/assets/images/contents/part5/img_5@2x.jpg 2x">
								</div>
								<div class="swiper-slide">
									<img src="@/assets/images/contents/part5/img_6@1x.jpg" alt="맥주축제 이미지06"
										 srcset="@/assets/images/contents/part5/img_6@2x.jpg 2x">
								</div>
								<div class="swiper-slide">
									<img src="@/assets/images/contents/part5/img_7@1x.jpg" alt="맥주축제 이미지07"
										 srcset="@/assets/images/contents/part5/img_7@2x.jpg 2x">
								</div>
								<div class="swiper-slide">
									<img src="@/assets/images/contents/part5/img_8@1x.jpg" alt="맥주축제 이미지08"
										 srcset="@/assets/images/contents/part5/img_8@2x.jpg 2x">
								</div>

							</div>

							<div class="swiper-arrows">
								<button type="button" class="arrow prev-arrow">
									<img src="@/assets/images/contents/part5/arrow@1x.png" alt="화살표"
										 srcset="@/assets/images/contents/part5/arrow@2x.png 2x">
								</button>
								<button type="button" class="arrow next-arrow">
									<img src="@/assets/images/contents/part5/arrow_R@1x.png" alt="화살표"
										 srcset="@/assets/images/contents/part5/arrow_R@2x.png 2x">
								</button>
							</div>
						</div>
						<div class="pagination"></div>

					</div>

				</div>

				<div class="logo">
					<a href="http://www.moounga.co.kr" target="_blank">
						<img src="@/assets/images/contents/part5/m_logo@2x@1x.png" alt="로고"
							 srcset="@/assets/images/contents/part5/m_logo@2x@2x.png 2x">
					</a>
				</div>

			</section>
		</main>

		<footer id="part-footer"></footer>
	</div>
</template>


<script>
import Swiper from 'swiper/dist/js/swiper.js';

export default {
	name: 'part5',
	mounted() {
		var innerSlider = new Swiper('.swiper-container', {
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-arrows .next-arrow',
				prevEl: '.swiper-arrows .prev-arrow',
			},
			pagination: {
				el: '.slider-area .pagination',
				type: 'fraction',
			}
		});
	}
}
</script>


<style lang="scss" scoped>

	#part-container {
		.container {
			max-width: 375px;
			background-color: #fff;

			.top-image {
				margin-top: 85px;
				padding-top: 100px;
				max-width: 374px;
				height: 450px;

				.border {
					margin: 0 auto;
					width: 93px;
					height: 250px;
					color: #fff;
					background-size: cover;
					background-position: center center;
					background-repeat: no-repeat;

					.caption01 {
						padding-top: 20px;
						padding-left: 10px;
						font-size: 25px;
						font-weight: 700;
					}
					.caption02 {
						padding-left: 50px;
						font-size: 25px;
						font-weight: 700;
					}
				}
			}

			.slider {
				padding-left: 15px;
				padding-right: 15px;
				margin-top: 44px;

				.title {
					margin-bottom: 30px;
					font-size: 15px;
					font-weight: 700;
					color: #09170d;
				}

				.slider-area {
					position: relative;

					.swiper-container {
						.swiper-wrapper {

							.swiper-slide {
								text-align: center;
								padding: 0 30px;
							}
						}

						.swiper-arrows {
							position: absolute;
							bottom: 0;
							left: 0;
							z-index: 2;
							width: 100%;
							height: 100%;
							user-select: none;
							pointer-events: none;
							touch-action: none;

							.arrow {
								position: absolute;
								top: 50%;
								width: 24px;
								height: 24px;
								line-height: 0;
								background-color: #d8d8d8;
								border: none;
								transform: translateY(-50%);
								user-select: auto;
								pointer-events: auto;
								touch-action: auto;
							}
							.prev-arrow {
								left: 0;
							}
							.next-arrow {
								right: 0;
							}
						}
					}
					.pagination {
						padding-top: 20px;
						margin: 0 auto;
						text-align: center;
					}
				}
			}

			.logo {
				text-align: right;
				padding: 100px 15px 90px;

				a {
					display: inline-block;
				}
			}
		}
	}

</style>
