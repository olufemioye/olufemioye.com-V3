<template>
	<div id="app">
		<Header />
		<Navigation />
		<main class="layout-main">
			<router-view></router-view>
		</main>
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

	#app {
		@include breakpoint-min (lg) {
			padding-right: 5rem;
		}
	}
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
		padding: 2rem 0;
		text-align: center;

		@include breakpoint-min (lg) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: fixed;
			right: 5rem;
			top: 0;
			width: 100%;
			max-width: 480px;
			height: 100%;
			padding: 3rem 1rem;
			z-index: $z-index-visual;
		}
		@include breakpoint-min (xl) {
			max-width: 520px;
		}
		@media (min-width: 1400px) {
			max-width: 600px;
		}
	}
</style>