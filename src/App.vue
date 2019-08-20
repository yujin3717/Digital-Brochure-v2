<template>
	<div id="app">
		<router-view />
		<transition name="fade-out">
			<div id="spinner" v-show="toggleSpinner">
				<div class="spin"></div>
			</div>
		</transition>
	</div>
</template>

<script>
import Vue from 'vue';

const EventBus = new Vue();

Vue.mixin({
	data() {
		return {
			get globalTitle() {
				return '제5회 신촌맥주축제';
			},
			get globalSnsDescription() {
				return '2019년 제 5회 신촌 맥주축제!';
			},
			toggleSpinner: false,
		};
	},
	mounted() {
		/**
		 * 링크에 #이 있을 경우 이벤트 초기화
		 * */
		const aBlank = document.querySelectorAll('a[href="#"]');
		for (let i = 0; i < aBlank.length; i++) {
			const e = aBlank[i];

			e.addEventListener('click', (event) => {
				event.preventDefault();
			});
		}
	},
	methods: {
		twitterShare(event) {
			const text = this.globalTitle;
			const url  = window.location.href;
			window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + url);
		},
		kakaoShare(event) {
			const self = this;
			const kakaoScript = document.createElement('script');
			kakaoScript.src = "//developers.kakao.com/sdk/js/kakao.min.js";

			// kakao 공유를 위한 스크립트 include
			document.body.appendChild(kakaoScript);

			// include가 성공적으로 완료되면 공우 스크립트 실행
			kakaoScript.onload = function() {
				// kakao api key - javascript key
				// key 교체 필요
				Kakao.init('08063a470c23d1aeb502055cbda3d727');

				Kakao.Link.sendDefault({
					objectType: 'feed',
					content: {
						title: self.globalTitle,
						description: '디지털 브로슈어',
						imageUrl: '',
						link: {
							mobileWebUrl: window.location.href,
							webUrl: window.location.href
						}
					},
				});
			};

			// kakao 공유를 위해 추가한 스크립트 제거
			document.body.removeChild(kakaoScript);
		},
		copyUrl(event) {
			// 주소 복사
			const el = document.createElement('textarea');
			document.body.appendChild(el);
			el.value = window.location.href;

			// ios에서는 execCommand('copy')가 작동되지 않기 때문에 다른 방식 적용
			// https://stackoverflow.com/a/46981847
			if ( navigator.userAgent.match(/ipad|ipod|iphone/i) ) {
				// save current contentEditable/readOnly status
				const editable = el.contentEditable;
				const readOnly = el.readOnly;

				// convert to editable with readonly to stop iOS keyboard opening
				el.contentEditable = true;
				el.readOnly = true;

				// create a selectable range
				const range = document.createRange();
				range.selectNodeContents(el);

				// select the range
				const selection = window.getSelection();
				selection.removeAllRanges();
				selection.addRange(range);
				el.setSelectionRange(0, 999999);

				// restore contentEditable/readOnly to original state
				el.contentEditable = editable;
				el.readOnly = readOnly;
			} else {
				el.select();
			}

			document.execCommand('copy');
			document.body.removeChild(el);

			alert('URL이 클립보드에 복사되었습니다.');
		},
	},
});

// https://stackoverflow.com/questions/44371639/how-to-remove-html-tags-from-rendered-text
Vue.filter('striphtml', (value) => {
	const div = document.createElement('div');
	div.innerHTML = value;
	const text = div.textContent || div.innerText || '';
	return text;
});

export default {
	name: 'App',
	data() {
		return {
		}
	},
};
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';

/**
 * Core
 */
html,
body {
	font-size: 16px;
}

body, input, textarea, select {
	font-family: 'Nanum Gothic', sans-serif;
}

img {
	@include user-select();
}

.ff-myeongjo {
	font-family: 'Nanum Myeongjo', sans-serif;
}

.container {
	margin: 0 auto;
	max-width: 960px;
	width: 100%;
}

#wrap {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #f5f5f5;
}

#spinner {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.7);

	.spin {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 2;
		margin-left: -15px;
		margin-top: -15px;
		width: 30px;
		height: 30px;
		border: 2px solid #000;
		border-top-color: transparent;
		border-radius: 50%;
		animation: spinner 0.3s linear infinite;
	}

	@keyframes spinner {
		0% { transform: rotate(0); }
		100% { transform: rotate(360deg);  }
	}
}

/**
 * Transition
 */
.fade-out-enter-active,
.fade-out-leave-active {
	transition: opacity 0.7s;
}
.fade-out-enter,
.fade-out-leave-to {
	opacity: 0;
}

.fade-down-enter-active {
	animation: fadeDown 0.7s;
}
.fade-down-leave-active {
	animation: fadeDown 0.7s reverse;
}

@keyframes fadeDown {
	0% { opacity: 0; transform: translate3d(0, -30px, 0); }
	100% { opacity: 1; transform: translate3d(0, 0, 0); }
}
</style>
