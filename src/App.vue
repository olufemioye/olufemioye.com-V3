<template>
	<div id="app">
		<Header />
		<Navigation />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
	import Header from '@/components/layouts/Header.vue';
	import Navigation from '@/components/layouts/Navigation.vue';
	import Footer from '@/components/layouts/Footer.vue';

	export default {
		name: 'App',
		components: {
			Header,
			Navigation,
			Footer
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/style.scss";

	.page-content {
		margin-bottom: 5rem;
		@include breakpoint-min (lg) {
			width: 50%;
			&.page-content--full {
				width: 100%;
			}
		}
	}
	.page-visual {
		background: $snow;
		padding: 2rem 1rem;
	}
</style>