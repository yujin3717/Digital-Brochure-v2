<template>
	<a v-bind:class="hiddenContentsSnsItem.sns" v-bind:href="hiddenContentsSnsItem.url" target="_blank" rel="noopener">
		<img width="35" height="35"
			v-bind:src="hiddenContentsSnsItem.icon.x1"
			v-bind:srcset="hiddenContentsSnsItem.icon.x2"
			v-bind:alt="'SNS '+hiddenContentsSnsItem.sns+'icon'"
		>
	</a>
</template>

<script>
export default {
	props: {
		hiddenContentsSnsItem: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
