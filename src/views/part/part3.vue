<template>
	<div id="part">
		<header id="part-header">
			<h1 class="screen-reader-text">{{ globalTitle }}</h1>
		</header>

		<main id="part-container">
			<section class="container">

				<div class="top-image" v-bind:style="'background-image: url('+require( '@/assets/images/contents/part3/top_img@1x.png')+');'">
					<h2 class="title ff-myeongjo">감성 한줄,</h2>
					<div class="desc01 ff-myeongjo">2019<br>09/20 -<br>09/22</div>
					<div class="desc02 ff-myeongjo">제5회 신촌맥주축제<br>서울특별시 서대문구<br>창천동 연세로</div>
					<div class="subtitle ff-myeongjo">맥주 한 잔</div>
				</div>

				<div class="video-block">
					<video controls>
						<source src="@/assets/video/beer_44k-iphone8.mp4" type="video/mp4">
						Your browser does not support the video tag.
					</video>
				</div>

				<div class="inform">감성에 맥주를 더하다,<br>2019 제5회 신촌 맥주 축제<br>P R O G R A M</div>

				<div class="figure">
					<img src="@/assets/images/contents/part3/mid_img_1@1x.jpg" alt="맥주축제 이미지01"
							srcset="@/assets/images/contents/part3/mid_img_1@2x.jpg 2x">
					<div class="caption">약 25개의 브루어리</div>
				</div>
				<div class="figure">
					<img src="@/assets/images/contents/part3/mid_img_2@1x.jpg" alt="맥주축제 이미지01"
							srcset="@/assets/images/contents/part3/mid_img_2@2x.jpg 2x">
					<div class="caption">약 10개의 글로벌푸드 팀</div>
				</div>
				<div class="figure">
					<img src="@/assets/images/contents/part3/mid_img_3@1x.jpg" alt="맥주축제 이미지01"
							srcset="@/assets/images/contents/part3/mid_img_3@2x.jpg 2x">
					<div class="caption">각종 공연 및 무대행사</div>
				</div>
				<div class="figure">
					<img src="@/assets/images/contents/part3/mid_img_4@1x.jpg" alt="맥주축제 이미지01"
							srcset="@/assets/images/contents/part3/mid_img_4@2x.jpg 2x">
					<div class="caption">작가와의 만남 및<br>낭만도시 공개방송 등<br>프로그램</div>
				</div>
				<div class="figure">
					<img src="@/assets/images/contents/part3/mid_img_5@1x.jpg" alt="맥주축제 이미지01"
							srcset="@/assets/images/contents/part3/mid_img_5@2x.jpg 2x">
					<div class="caption">맥덕인증상, 스탬프 투어<br>등 각종 참여 이벤트</div>
				</div>
				<div class="map">
					<div class="box-title">행사 안내 및 위치 안내</div>
					<img src="@/assets/images/contents/part3/map@1x.jpg" alt="맥주축제 이미지01"
							srcset="@/assets/images/contents/part3/map@2x.jpg 2x">
					<div class="caption">제5회 신촌맥주축제<br>2019.09.20(금) - 09.22(일)<br>서울특별시 서대문구 창천동 연세로</div>
				</div>

				<div class="logo">
					<img src="@/assets/images/contents/part3/m_logo@2x@1x.png" alt="로고"
						 srcset="@/assets/images/contents/part3/m_logo@2x@2x.png 2x">
				</div>

			</section>
		</main>

		<footer id="part-footer"></footer>
	</div>
</template>
<script>
export default {
	name: 'part3',
}
</script>

<style lang="scss" scoped>
	#part-container {
		.container {
			max-width: 375px;
			background-color: #fff;

			.top-image {
				margin-top: 85px;
				padding: 0 15px 0;
				color: #fff;
				background-repeat: no-repeat;

				.title {
					font-size: 50px;
					font-weight: 400;
				}
				.desc01 {
					padding-top: 110px;
					font-size: 15px;
				}
				.desc02 {
					padding-top: 15px;
				}
				.subtitle {
					padding: 40px 0 0 0;
					font-size: 50px;
					text-align: right;
				}
			}

			.video-block {
				position: relative;
				margin-top: 50px;
				padding-top: 56.25%;
				background-color: #d8d8d8;

				video {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
			}

			.inform {
				margin: 50px 0 10px;
				font-size: 18px;
				font-weight: 700;
				color: #09170d;
				text-align: center;
			}

			.figure {
				padding-top: 40px;
				margin: 0 auto 20px;
				max-width: 264px;
				width: 100%;

				.caption {
					margin-top: 13px;
				}
			}

			.map {
				padding-top: 34px;
				padding-left: 0;

				.box-title {
					margin-bottom: 20px;
					margin: 0 auto 20px;
					max-width: 264px;
					width: 100%;
					font-size: 15px;
					font-weight: 700;
					color: #09170d;
				}
				.caption {
					padding-top: 10px;
					margin: 0 auto 20px;
					max-width: 264px;
					width: 100%;
				}
			}

			.logo {
				margin: 50px 0 90px 300px;
			}
		}
	}

</style>
