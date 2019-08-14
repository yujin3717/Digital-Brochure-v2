<template>
	<div id="part">
		<header id="part-header">
			<h1 class="screen-reader-text">{{ globalTitle }}</h1>
		</header>

		<main id="part-container">
			<section class="container">

				<h2 class="title ff-myeongjo">놀면 뭐 하나...</h2>

				<div class="left-image">
					<img src="@/assets/images/contents/part1/top_img@1x.png" alt="맥주 이미지"
						 srcset="@/assets/images/contents/part1/top_img@2x.png 2x">
					<div class="backcolor-top"></div>
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
	name: 'part1',
}
</script>

<style lang="scss" scoped>

	#part-container {

		.container {

			.title {
				color: #09170d;
				font-size: 50px;
				font-weight: 400;
				line-height: 55px;
				padding: 85px 0px 40px 15px;
			}

			.left-image {
					position: relative;

				.backcolor-top {
					position: absolute;
					top: 25px;
					left: 20px;
					width: 300px;
					height: 380px;
					background-image: linear-gradient(180deg, #48c6ef 0%, #6f86d6 100%);
					opacity: 0.3;
					z-index: -99;
				}
			}

			.subtitle {
				padding: 30px 0px 50px 207px;
				color: #09170d;
				font-size: 40px;
			}

			.right-image {
				padding-left: 71px;
				position: relative;

				.backcolor-bottom {
					position: absolute;
					top: 10px;
					left: 62px;
					width: 303px;
					height: 267px;
					background-image: linear-gradient(180deg, #a8edea 0%, #fed6e3 100%);
					opacity: 0.3;
					z-index: -99;
				}

				.caption {
					padding-top: 30px;
					color: #09170d;
					font-size: 18px;
					line-height: 29px;

					.bold {
					/* Text style for "맥주!" */
					font-family: "Nanum Gothic Extra Bold";
					font-weight: 700;
					}
				}
			}

			.center-image {
				text-align: center;
				padding-top: 85px;

				.caption {
					padding-top: 20px;
					color: #09170d;
					font-size: 18px;

					.bold {
						font-family: "Nanum Gothic Extra Bold";
						font-weight: 700;
					}
				}
			}

			.logo {
				padding: 55px 0px 90px 159px;
			}
		}
	}
</style>
