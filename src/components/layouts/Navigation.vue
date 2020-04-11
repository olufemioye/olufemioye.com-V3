<template>
	<nav :class=" isActive ? 'navigation navigation--active' : 'navigation' ">
		<NavigationMenu :isOpen="isActive" @clickMenu="toggleNavigation()" />
		<ul class="navigation__links">
			<li>
				<router-link to="/" 
					:class="(activePage === 'Home') ? 'navigation__link navigation__link--active' : 'navigation__link'" 
					@click.native="toggleNavigation()" >Home
				</router-link>
			</li>
			<li>
				<router-link to="/resume" 
					:class="(activePage === 'Resume') ? 'navigation__link navigation__link--active' : 'navigation__link'" 
					@click.native="toggleNavigation()" >Resume
				</router-link>
			</li>
			<li>
				<router-link to="/person" 
					:class="(activePage === 'Person') ? 'navigation__link navigation__link--active' : 'navigation__link'" 
					@click.native="toggleNavigation()" >Person
				</router-link>
			</li>
			<li>
				<router-link to="/contact" 
					:class="(activePage === 'Contact') ? 'navigation__link navigation__link--active' : 'navigation__link'" 
					@click.native="toggleNavigation()" >Contact
				</router-link>
			</li>
		</ul>
		<div class="navigation__overlay" @click="toggleNavigation()"></div>
	</nav>
</template>

<script>
import NavigationMenu from "@/components/layouts/NavigationMenu.vue";
export default {
	name: 'Navigation',
	components: {
		NavigationMenu
	},
	props: {
		activePage: String
	},
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		toggleNavigation() {
			if(window.innerWidth > 992) {
				return false;
			} else {
				this.isActive = !this.isActive;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.navigation {
		display: block;
		position: relative;
	}
	.navigation-menu {
		display: none;
		top: 0;
		right: 0;
		position: fixed;
	}

	.navigation__links {
		display: flex;
		flex-direction: column;
		list-style: none;
		padding: 0;
		margin: 0;
		background: $theme-blue;
		z-index: $z-index-nav;
		overflow: auto;
		transition: .5s all ease-in-out;
	}

	.navigation__link {
		display: block;
		color: $white;
		font-size: .875rem;
		font-weight: $font-weight-medium;
		line-height: 2rem;
		text-decoration: none;
		writing-mode: vertical-lr;
		text-transform: uppercase;
		padding: 1.5rem .75rem;
		letter-spacing: .15em;
		transition: .3s all ease-in;

		&:hover {
			background: rgba($white, .05);
		}

		&.navigation__link--active {
			background: rgba($white, .1);
		}
	}

	.navigation__overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: $pure-black;
		opacity: 0;
		z-index: $z-index-nav-overlay;
		transition: .5s opacity;
		visibility: hidden;
	}

	// Mobile Only
	@include breakpoint-max (lg) {
		.navigation-menu {
			display: block;
		}
		.navigation__links {
			position: fixed;
			height: 100%;
			top: 0;
			right: -3.5rem;
			padding-top: 5.5rem;
		}
		.navigation--active {
			.navigation__links {
				right: 0;
			}
			.navigation__overlay {
				display: block;
				opacity: .6;
				visibility: visible;
			}
		}
	}
	// Desktop Navigation
	@include breakpoint-min (lg) {
		.navigation__links {
			position: sticky;
			top: 0;
			padding-top: 9.6875rem;
			height: 100vh;
		}
		.navigation__link {
			padding: 1.5rem;
		}
	}
</style>