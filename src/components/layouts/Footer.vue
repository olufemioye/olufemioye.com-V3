<template>
	<footer class="footer">
		<div class="layout-container">
			<small class="small text-slate">@{{currentYear()}} Olufemi Oye - Made in Lagos.</small>
		</div>
	</footer>
</template>

<script>
export default {
	methods: {
		currentYear() {
			return new Date().getFullYear();
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.footer {
		padding: .75rem 0;
		background: $snow;
		border-top: 1px solid $smoke;
		text-align: center;

		@include breakpoint-min (lg) {
			padding: 1rem 0;
			background: $white;
			border-top-color: $snow;
			text-align: left;
		}
	}
</style>