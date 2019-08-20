<template>
	<header id="part-header">
		<div class="container">
			<div id="part-header-inner">
				<h1 class="screen-reader-text">{{ globalTitle }}</h1>

				<button class="btn go-back" type="button" v-on:click="goBack">
					<span class="screen-reader-text">뒤로가기</span>
					<i class="cuscon-arrow-left"></i>
				</button>

				<button class="btn share" type="button" v-on:click="openShare">
					<span class="screen-reader-text">공유하기</span>
					<i class="cuscon-share"></i>
				</button>
			</div>
		</div>

		<transition name="fade-down">
			<div id="part-share" v-show="shareContent">
				<div class="container">
					<div id="part-share-inner">
						<button class="close" type="button" v-on:click="closeShare">
							<span class="screen-reader-text">공유모음 닫기</span>
							<i class="cuscon-close"></i>
						</button>

						<div class="items">
							<a class="item kakao" v-on:click.stop="kakaoShare" href="#">
								<span class="screen-reader-text">KAKAO</span>
								<i class="cuscon-kakaotalk"></i>
							</a>
							<a class="item twitter" v-on:click.stop="twitterShare" href="#">
								<span class="screen-reader-text">Twitter</span>
								<i class="cuscon-sns-twitter"></i>
							</a>
							<a class="item facebook" href="#">
								<span class="screen-reader-text">Facebook</span>
								<i class="cuscon-sns-facebook"></i>
							</a>
							<a class="item link" v-on:click.stop="copyUrl" href="#">
								<span class="screen-reader-text">링크복사</span>
								<i class="cuscon-link"></i>
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
			shareContent: false,
		}
	},
	mounted() {
	},
	methods: {
		goBack() {
			this.$router.push('/');
		},
		openShare(event) {
			this.shareContent = true;
			event.preventDefault();
		},
		closeShare(event) {
			this.shareContent = false;
			event.preventDefault();
		},
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
		max-width: 500px;
	}

	&-inner {
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 30px 15px 0;

		.btn {
			display: inline-block;
			width: 40px;
			height: 40px;
			line-height: 0;
			color: #696969;
			background-color: #f2f2f2;
			border: 0;
			border-radius: 50%;
			box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

			&.go-back {
				padding-right: 3px;
				font-size: 16px;
			}

			&.share {
				font-size: 17px;
			}
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
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0;
			padding: 6px 52px 0;
			height: 100%;
			list-style: none;

			.item {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 45px;
				height: 45px;
				font-size: 23px;
				color: #fff;
				border-radius: 50%;

				&.kakao {
					font-size: 24px;
					color: #381e1f;
					background-color: #ffcd00;
				}
				&.twitter {
					font-size: 32px;
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
			top: 15px;
			right: 15px;
			width: 25px;
			height: 25px;
			font-size: 15px;
			color: #c1c1c1;
			background-color: transparent;
			border: 0;
		}
	}
}
</style>
