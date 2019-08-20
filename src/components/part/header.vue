<template>
	<header id="part-header">
		<div class="container">
			<div id="part-header-inner">
				<h1 class="screen-reader-text">{{ globalTitle }}</h1>

				<button class="btn go-back" type="button" v-on:click="goBack">
					<span class="screen-reader-text">뒤로가기</span>
					<
				</button>

				<button class="btn share" type="button" v-on:click="openShare">
					<span class="screen-reader-text">공유하기</span>
					S
				</button>
			</div>
		</div>

		<transition name="fade-down">
			<div id="part-share" v-show="shareContent">
				<div class="container">
					<div id="part-share-inner">
						<button class="close" type="button" v-on:click="closeShare">C</button>

						<div class="items">
							<a class="item kakao" href="#">
								<span class="screen-reader-text">KAKAO</span>
							</a>
							<a class="item twitter" href="#">
								<span class="screen-reader-text">Twitter</span>
							</a>
							<a class="item facebook" href="#">
								<span class="screen-reader-text">Facebook</span>
							</a>
							<a class="item link" href="#">
								<span class="screen-reader-text">링크복사</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</header>
</template>

<script>
export default {
	name: 'partHeader',
	data() {
		return {
			shareContent: null,
		}
	},
	methods: {
		goBack() {
			this.$router.push('/');
		},
		openShare() {
			this.shareContent = true;
		},
		closeShare() {
			this.shareContent = false;
			console.log('wow2');
		}
	},
};
</script>

<style lang="scss">
#part-header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;

	.container {
		max-width: 375px;
	}

	&-inner {
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 20px 15px;

		.btn {
			display: inline-block;
			width: 25px;
			height: 25px;
			line-height: 0;
			background-color: #f2f2f2;
			border: 0;
			border-radius: 50%;
		}
	}
}

#part-share {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 20;
	width: 100%;
	background-color: #f8f8f8;

	&-inner {
		position: relative;
		width: 100%;
		height: 85px;

		.items {
			margin: 0;
			padding: 0 52px;
			list-style: none;

			.item {
				float: left;
				display: block;
				border-radius: 50%;

				&.kakao {
					background-image: linear-gradient(to right, #e4d433 0%, #e4dd49 100%);
				}
				&.twitter {
					background-color: #01b8f9;
				}
				&.facebook {
					background-color: #343e84;
				}
				&.link {
					background-color: #989898;
				}
			}
		}

		.close {
			position: absolute;
			top: 10px;
			right: 10px;
			width: 25px;
			height: 25px;
			background-color: transparent;
			border: 0;
		}
	}
}
</style>
