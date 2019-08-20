<template>
	<div id="hidden-contents">
		<div id="hidden-contents-inner" class="ff-myeongjo">
			<div class="title">{{ globalTitle }}</div>

			<div class="contents">
				<ul>
					<hiddenContentsItem
						v-for="(hiddenContentsItem, index) in hiddenContentsItemData"
						v-bind:key="index"
						v-bind:hiddenContentsItem="hiddenContentsItem"
					></hiddenContentsItem>
				</ul>
			</div>

			<div class="sns">
				<hiddenContentsSnsItem
					v-for="(hiddenContentsSnsItem, index) in hiddenContentsSnsItemData"
					v-bind:key="index"
					v-bind:hiddenContentsSnsItem="hiddenContentsSnsItem"
				></hiddenContentsSnsItem>
			</div>
		</div>

		<div class="overlay" v-on:click="closeHiddenContents">
			<img src="@/assets/images/header/close.png" class="close" alt="목차 닫기"
				 srcset="@/assets/images/header/close@2x.png 2x">
		</div>
	</div>
</template>

<script>
import hiddenContentsItem from '@/components/hiddenContentsItem.vue';
import hiddenContentsSnsItem from '@/components/hiddenContentsSnsItem.vue';

export default {
	name: 'hiddenContents',
	components: {
		hiddenContentsItem,
		hiddenContentsSnsItem,
	},
	data() {
		return {
			hiddenContentsItemData: [
				{
					part: 1,
					title: '놀면 뭐 하나... 재밌겠지',
				},
				{
					part: 2,
					title: '제5회 신촌맥주축제',
				},
				{
					part: 3,
					title: '감성 한 줄 맥주 한 잔',
				},
				/* {
						part: 4,
						title: '맥주축제 in 신촌',
					}, */
				{
					part: 5,
					title: '2018 신촌맥주축제',
				},
			],
			hiddenContentsSnsItemData: [
				{
					sns: 'instagram',
					url: '#',
					icon: {
						x1: require('@/assets/images/icon/sns-instagram.png'),
						x2: require('@/assets/images/icon/sns-instagram@2x.png'),
					},
				},
				{
					sns: 'facebook',
					url: 'https://facebook.com',
					icon: {
						x1: require('@/assets/images/icon/sns-facebook.png'),
						x2: require('@/assets/images/icon/sns-facebook@2x.png'),
					},
				},
				{
					sns: 'youtube',
					url: 'https://youtube.com',
					icon: {
						x1: require('@/assets/images/icon/sns-youtube.png'),
						x2: require('@/assets/images/icon/sns-youtube@2x.png'),
					},
				},
			],
		};
	},
	methods: {
		closeHiddenContents(event) {
			this.$el.classList.remove('active');
		},
	},
};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/import/_mixin.scss';

	#hidden-contents {
		$p: &;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s, visibility 0.2s;

		&-inner {
			position: absolute;
			z-index: 2;
			display: flex;
			flex-direction: column;
			padding: 50px 0;
			width: calc( 100% - 50px );
			height: 100%;
			color: #4b4b4b;
			background-color: #fff;
			transform: translate3d(-100px, 0, 0);
			transition: transform 0.5s;
			transition-delay: 0.02s;

			.title {
				flex: 0 0 auto;
				padding: 0 15px 9px;
				font-size: 20px;
				font-weight: 400;
				border-bottom: 1px solid #cbcbcb;
			}

			.contents {
				flex: 1 1 auto;
				overflow: scroll;
				-webkit-overflow-scrolling: touch;

				ul {
					margin: 0;
					padding: 0;
					list-style: none;

					li {
						padding: 35px 25px 10px;
						border-bottom: 1px solid #f2f2f2;

						&:first-child {
							margin-top: 5px;
						}

						a {
							display: flex;

							.part {
								flex: 0 0 auto;
								padding-top: 2px;
								font-size: 14px;
								font-weight: 700;
								letter-spacing: -1.94px;
							}

							.text {
								flex: 1 1 auto;
								margin-left: 10px;
								font-size: 16px;
							}
						}
					}
				}
			}

			.sns {
				flex: 0 0 auto;
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				height: 90px;
				border-bottom: 1px solid #cbcbcb;

				a {
					display: block;
					margin: 0 5px 10px;

					&:last-child {
						margin-right: 10px;
					}
				}
			}
		}

		.overlay {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1;
			display: flex;
			justify-content: flex-end;
			align-items: flex-start;
			padding: 30px 15px;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.6);

			.close {
				@include user-select();
			}
		}

		&.active {
			opacity: 1;
			visibility: visible;
			@include user-select(auto);

			#{$p}-inner {
				transform: translate3d(0, 0, 0);
			}
		}

		@include min-w(1024) {
			display: none !important;
		}
	}
</style>
