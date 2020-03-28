<template>
	<nav :class=" isActive ? 'navigation navigation--active' : 'navigation' ">
		<NavigationMenu :isOpen="isActive" @clickMenu="toggleNavigation()" />
		<ul class="navigation__links">
			<li v-for="link in navigationLinks" :key="link.index">
				<router-link :to="link.url" :class="link.isActive ? 'navigation__link navigation__link--active' : 'navigation__link'" @click.native="toggleNavigation()">{{ link.name }}</router-link>
			</li>
		</ul>
		<div class="navigation__overlay" @click="toggleNavigation()"></div>
	</nav>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu.vue";
export default {
	name: 'Navigation',
	components: {
		NavigationMenu
	},
	props: {
		activePage: String
	},
	methods: {
		toggleNavigation() {
			this.isActive = !this.isActive;
		},
		changeActiveLink() {
			if (this.activePage === "Home") {
				this.navigationLinks[0].isActive = true;
			}
			else if (this.activePage === "Resume") {
				this.navigationLinks[1].isActive = true;
			} 
			else if (this.activePage === "Person") {
				this.navigationLinks[2].isActive = true;
			} 
			else if (this.activePage === "Contact") {
				this.navigationLinks[3].isActive = true;
			}
		}
	},
	data() {
		return {
			isActive: false,
			navigationLinks: [
				{
					name: "Home",
					url: "/",
					isActive: false
				},
				{
					name: "Resume",
					url: "/resume",
					isActive: false
				},
				{
					name: "Person",
					url: "/person",
					isActive: false
				},
				{
					name: "Contact",
					url: "/contact",
					isActive: false
				},
			]
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
		position: fixed;
		height: 100%;
		top: 0;
		right: -3.5rem;
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
			right: 0;
			justify-content: center;
		}
		.navigation__link {
			padding: 1.5rem;
		}
	}
</style>