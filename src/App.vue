<template>
	<div id="app" :class="(activeTheme() === 'dark') ? 'app app--dark' : 'app'">
		<Header class="app-header" :darkTheme="(activeTheme() === 'dark') ? true : false" />
		<Navigation class="app-navigation" :activePage="activePage()"/>
		<main class="layout-main app-main">
			<router-view></router-view>
		</main>
		<Footer class="app-footer" :darkTheme="(activeTheme() === 'dark') ? true : false" />
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
		},
		methods: {
			activeTheme() {
				return this.$route.meta.theme
			},
			activePage() {
				return this.$route.meta.page
			}
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/style.scss";

	.app {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas: 
			"header"
			"main"
			"footer";
		background: $white;

		&.app--dark {
			background: $black;
		}

		@include breakpoint-min(lg) {
			grid-template-columns: 1fr 5rem;
			grid-template-areas: 
				"header navigation"
				"main navigation"
				"footer navigation";
		}

	}

	.app-header {
		grid-area: header;
	}

	.app-navigation {
		grid-area: navigation;
	}

	.app-main {
		grid-area: main;
		min-height: calc(100vh - 101px);
		
		@include breakpoint-min (lg) {
			min-height: calc(100vh - 146px);
		}

	}

	.app-footer {
		grid-area: footer;
	}


</style>