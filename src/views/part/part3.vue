<template>
	<div id="part">
		<header id="part-header">
			<h1 class="screen-reader-text">{{ globalTitle }}</h1>
		</header>

		<main id="part-container">
			<section class="container">

				<div class="top-image" v-bind:style="'background-image: url('+require( '@/assets/images/contents/part3/top_img@1x.png')+');'">
					<h2 class="title ff-myeongjo">감성 한줄,</h2>
					<div class="desc">2019<br>09/20 -<br>09/22<br><br>제5회 신촌맥주축제<br>서울특별시 서대문구<br>창천동 연세로</div>
					<div class="subtitle ff-myeongjo">맥주 한 잔</div>
				</div>

				<div class="inform">감성에 맥주를 더하다,<br>2019 제5회 신촌 맥주 축제<br>PROGRAM</div>


				<div class="figure">
					<div class="box01">
						<img src="@/assets/images/contents/part3/m_logo@2x@1x.png" alt="맥주축제 이미지01"
							 srcset="@/assets/images/contents/part3/m_logo@2x@2x.png 2x">
						<>
					</div>
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
	name: 'part1',
}
</script>

<style lang="scss" scoped>

</style>
