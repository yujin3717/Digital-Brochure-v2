<template>
	<div id="part">
		<header id="part-header">
			<h1 class="screen-reader-text">{{ globalTitle }}</h1>
		</header>

		<main id="part-container">
			<section class="container">

				<h2 class="title ff-myeongjo">놀면<br>뭐 하나</h2>

				<div class="left-image">
					<img src="@/assets/images/contents/part1/top_img@1x.png" alt="맥주 이미지"
						 srcset="@/assets/images/contents/part1/top_img@2x.png 2x">
				</div>

				<div class="subtitle ff-myeongjo">재밌겠지</div>

				<div class="right-image">
					<img src="@/assets/images/contents/part1/img_1@1x.jpg" alt="맥주 이미지"
						 srcset="@/assets/images/contents/part1/img_1@2x.jpg 2x">
					<div class="backcolor-bottom"></div>
					<div class="caption">혼자라면 와인도 오케이<br>둘이라면 소주가 낫지.<br>하지만 여럿이라면 단연코 <span class="bold">맥주!</span><br>즐거움에 맥주가 빠질 수 없지.</div>
				</div>

				<div class="center-image">
					<img src="@/assets/images/contents/part1/beer_logo@2x@1x.png" alt="로고 이미지"
						 srcset="@/assets/images/contents/part1/beer_logo@2x@2x.png 2x">
					<div class="caption">지난 4년 간<br>열광적인 사랑을 받아온<br><span class="bold">신촌맥주축제</span>가<br>2019년 올해도<br>시원하게 찾아옵니다!!!</div>
				</div>

				<div class="logo">
					<img src="@/assets/images/contents/part1/m_logo@2x@1x.png" alt="로고 이미지"
						 srcset="@/assets/images/contents/part1/m_logo@2x@2x.png 2x">
				</div>
			</section>
		</main>

		<footer id="part-footer"></footer>
	</div>
</template>

<script>
export default {
	name: 'part1'
}
</script>

<style lang="scss" scoped>
	#part-container {
		background-color: #f5f5f5;

		.container {
			max-width: 375px;
			background-color: #fff;

			.title {
				padding: 85px 0 10px 15px;
				color: #09170d;
				font-size: 72px;
				font-weight: 400;
				line-height: 72px;
			}

			.left-image {
				position: relative;

				img {
					width: 100%;
				}
			}

			.subtitle {
				margin-top: -10px;
				padding: 0 0 50px 0;
				font-size: 72px;
				text-align: right;
				color: #09170d;
			}

			.right-image {
				position: relative;
				padding-left: 71px;

				.backcolor-bottom {
					position: absolute;
					top: 10px;
					left: 62px;
					z-index: -99;
					width: 303px;
					height: 267px;
					background-image: linear-gradient(180deg, #a8edea 0%, #fed6e3 100%);
					opacity: 0.3;
				}

				.caption {
					padding-top: 30px;
					font-size: 18px;
					color: #09170d;
					line-height: 29px;

					.bold {
						font-weight: 700;
					}
				}
			}

			.center-image {
				padding-top: 85px;
				text-align: center;

				.caption {
					padding-top: 20px;
					font-size: 24px;
					color: #09170d;

					.bold {
						font-weight: 700;
					}
				}
			}

			.logo {
				padding: 55px 0 90px 0;
				text-align: center;
			}
		}
	}
</style>
