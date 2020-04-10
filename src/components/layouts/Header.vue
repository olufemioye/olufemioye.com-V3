<template>
	<header class="header" :class="darkTheme ? 'header--dark' : null">
		<div class="layout-container">
			<router-link to="/" class="header__logo-mark">OlufemiOye<span class="text-blue">.com</span></router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	props: {
		darkTheme: Boolean
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.header {
		display: block;
		position: sticky;
		top: 0;
		background: $white;
		padding: 1rem 0;
		border-bottom: 1px solid $snow;
		z-index: $z-index-header;

		&.header--dark {
			background: $black;
			border-bottom-color: $steel;

			.header__logo-mark {
				color: $white;
			}
		}

	}

	.header__logo-mark {
		display: inline-block;
		font-size: 1rem;
		font-weight: $font-weight-medium;
		line-height: 1.5rem;
		display: inline-block;
		text-decoration: none;
		color: $black;
	}


	@include breakpoint-min (lg) {
		.header {
			padding: 2rem 0;
		}
		
		.header__logo-mark {
			font-size: 1.125rem;
		}
	}

</style>