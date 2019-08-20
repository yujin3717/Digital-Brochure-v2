<template>
	<div id="cover">
		<div id="cover-inner" v-bind:style="'background-image: url(\''+coverBackground+'\');'">
			<div id="sc" class="sc__container"></div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';

const EventBus = new Vue();

export default {
	name: 'cover',
	data() {
		return {
			coverBackground: require('@/assets/images/cover/beer_cup.png'),
		};
	},
	mounted() {
		const cover = this;

		const scContainer = document.getElementById('sc');
		const sc = new ScratchCard('#sc', {
			scratchType: SCRATCH_TYPE.CIRCLE,
			containerWidth: scContainer.offsetWidth,
			containerHeight: 200,
			imageForwardSrc: require('@/assets/images/cover/full_logo_before.png'),
			imageBackgroundSrc: require('@/assets/images/cover/full_logo_after.png'),
			clearZoneRadius: 50,
			percentToFinish: 75,
			callback() {
				// main 컴포넌트에 coverParent 이벤트를 보냅니다.
				cover.$emit('coverParent');
			},
		});
		sc.init();
	},
};
</script>

<style lang="scss">
	#cover {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999999;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f5f5f5;

		&-inner {
			position: relative;
			max-width: 425px;
			width: 100%;
			max-height: 755px;
			height: 100%;
			background-size: cover;
		}

		.sc__container {
			position: absolute;
			padding-top: 72%;
			left: 0;
			top: 50%;
			width: 100%;
			transform: translate3d(12px, -25%, 0);
			overflow: hidden;
		}

		.sc__container > img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.sc__container canvas {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
