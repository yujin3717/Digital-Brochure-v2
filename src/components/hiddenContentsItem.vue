<template>
	<li><router-link v-bind:to="'part' + hiddenContentsItem.part">{{hiddenContentsItem.title | striphtml }}</router-link></li>
</template>

<script>
export default {
	props: {
		hiddenContentsItem: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
