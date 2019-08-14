<template>
	<div id="part">
		<header id="part-header">
			<h1 class="screen-reader-text">{{ globalTitle }}</h1>
		</header>

		<main id="part-container">
			<section class="container">

				<h2 class="title ff-myeongjo">신촌맥주축제,</h2>

				<div class="left-image">
					<img src="@/assets/images/contents/part2/top@1x.jpg" alt="축제 이미지"
						 srcset="@/assets/images/contents/part2/top@2x.jpg 2x">

					<div class="subtitle ff-myeongjo">이런상상</div>
				</div>

				<div class="background" v-bind:style="'background-image: url('+require( '@/assets/images/contents/part2/img_1@1x.png')+');'">
					<div class="caption">축제로 대한민국을 더 즐겁게 만들자</div>
				</div>

				<div class="center">
					<div class="curation">CURATION</div>
					<div class="caption">수준 높은 국내 수제 맥주를<br>많은 사람들에게 소개</div>

					<img src="@/assets/images/icon/noun_Plus_2171489@1x.png" alt="+"
						 srcset="@/assets/images/icon/noun_Plus_2171489@1x.png 2x">

					<div class="culture">CULTURE</div>
					<div class="caption">맥주를 건전하게 소비하는<br>문화형성</div>

					<div class="line"></div>
				</div>

				<div class="bottom">
					<img src="@/assets/images/contents/part2/01@1x.jpg" alt="이미지 01"
						srcset="@/assets/images/contents/part2/01@2x.jpg 2x" class="img01">
					<img src="@/assets/images/contents/part2/02@1x.jpg" alt="이미지 02"
						srcset="@/assets/images/contents/part2/02@2x.jpg 2x"class="img02">
					<img src="@/assets/images/contents/part2/03@1x.jpg" alt="이미지 03"
						srcset="@/assets/images/contents/part2/03@2x.jpg 2x"class="img03">

					<div class="img-title">2019년 신촌맥주축제<br>감성 한 줄, 맥주 한 잔</div>
					<div class="caption">매년 다른 "Curation"을 통하여 새로운 맥주문화를<br>제시 하였던 신촌 맥주축제에서는 올해 20-30세대가<br>소비하는 글과 감성 그리고 건전한 맥주문화를 컨셉으로<br>
					제5회 신촌맥주축제를 준비하였습니다.</div>

					<div class="logo">
						<img src="@/assets/images/contents/part2/m_logo@2x@1x.png" alt="이미지 03"
						srcset="@/assets/images/contents/part2/m_logo@2x@2x.png 2x">
					</div>
				</div>
			</section>
		</main>

		<footer id="part-footer"></footer>
	</div>
</template>



<script>
export default {
	name: 'part2',
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
				padding-left: 15px;

				.subtitle {
					top: 394px;
					left: 305px;
					position: absolute;
					transform: rotate(-90deg);
					color: #09170d;
					font-size: 40px;
					white-space: nowrap;
					transform-origin: left top;
				}
			}
		}

		.background {
			max-width: 374px;
			height: 160px;
			margin-top: 30px;

			.caption {
				color: #fff;
				text-align: center;
				vertical-align: middle;
				font-size: 18px;
				font-weight: 700;
				line-height: 160px;
			}
		}

		.center {
			text-align: center;
			margin: 0 auto;

			.curation {
				margin: 0 auto;
				margin-top: 40px;
				margin-bottom: 13px;
				width: 140px;
				height: 140px;
				line-height: 140px;
				box-shadow: 0 5px 14px rgba(0, 0, 0, 0.1);
				border-radius: 50%;
				background-image: linear-gradient(149deg, rgba(255, 239, 196, 0.7) 0%, rgba(209, 253, 255, 0.7) 100%);
				color: #09170d;
				font-size: 18px;
				font-weight: 700;
			}

			.caption {
				margin-bottom: 42px;
				color: #09170d;
				font-size: 15px;
			}

			img{
				width: 20px;
				height: 20px;
			}

			.culture {
				margin: 0 auto;
				margin-top: 40px;
				margin-bottom: 13px;
				width: 140px;
				height: 140px;
				line-height: 140px;
				box-shadow: 0 5px 14px rgba(0, 0, 0, 0.1);
				border-radius: 50%;
				background-image: linear-gradient(150deg, rgba(255, 241, 235, 0.7) 0%, rgba(172, 224, 249, 0.7) 100%);
				color: #09170d;
				font-size: 18px;
				font-weight: 700;
			}
		}

		.bottom {
			position: relative;
			margin-top: 40px;
			background-color: #f9f9f9;

			.img01 {
				position: absolute;
				padding: 41px 0 0 15px;
			}

			.img02 {
				position: absolute;
				padding: 89px 0 0 65px;
			}

			.img03 {
				position: absolute;
				padding: 50px 0 0 231px;
			}

			.img-title {
				padding-top: 235px;
				padding-left: 15px;
				color: #09170d;
				font-size: 18px;
				font-weight: 700;
			}

			.caption {
				padding-top: 17px;
				padding-left: 15px;
				color: #09170d;
				font-size: 15px;
			}

			.logo {
				padding: 18px 0 90px 300px;
			}
		}
	}

</style>
