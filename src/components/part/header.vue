<template>
	<header id="part-header">
		<div class="container">
			<div id="part-header-inner">
				<h1 class="screen-reader-text">{{ globalTitle }}</h1>

				<button class="go-back" type="button">
					<span class="screen-reader-text">뒤로가기</span>
				</button>

				<button class="share" type="button"></button>
			</div>
		</div>

		<div class="container">
			<div id="part-header-share">
				<button class="close" type="button"></button>

				<ul>
					<li>
						<a href="#">
							<span class="screen-reader-text">KAKAO</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="screen-reader-text">Twitter</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="screen-reader-text">Facebook</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="screen-reader-text">링크복사</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'partHeader',
	}
</script>

<style lang="scss">
	#part-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

		&-inner {

		}

		&-share {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 85px;

			ul {
				margin: 0;
				padding: 0;
				list-style: none;
				background-color: #f8f8f8;

				li {

				}
			}
		}
	}
</style>
