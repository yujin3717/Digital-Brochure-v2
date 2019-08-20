// vue.config.js
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `
					@import "@/assets/scss/_mixin.scss";
				`
			}
		}
	}
}
