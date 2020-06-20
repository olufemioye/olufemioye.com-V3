<template>
	<button id="navigationMenu" :class="(isOpen) ? 'navigation-menu navigation-menu--active' : 'navigation-menu'" @click="clickReceiver()" type="button"
					aria-label="Navigation Menu" aria-haspopup="true" aria-controls="navigation">
		<span class="navigation-menu__box" aria-hidden="true">
			<span class="navigation-menu__inner" aria-hidden="true"></span>
		</span>
	</button>
</template>

<script>
export default {
	name: 'NavigationMenu',
	props: {
		isOpen: Boolean
	},
	methods: {
		clickReceiver() {
			this.$emit('clickMenu');
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.navigation-menu {
		display: block;
		padding: 1.25rem 1rem;
		border: 0;
		margin: 0;
		cursor: pointer;
		transition-property: opacity;
		transition-duration: .15s;
		transition-timing-function: linear;
		background: $theme-blue;
		outline: 0;
		z-index: $z-index-nav-menu;

		&.navigation-menu--active {
			
			.navigation-menu__inner {
				transform: translate3d(0, -.0625rem, 0) rotate(-45deg);
        transition-delay: 0.22s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &::after {
          top: 0;
          opacity: 0;
          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                      opacity 0.1s 0.22s linear;
        }

        &::before {
          top: 0;
          transform: rotate(-90deg);
          transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
			}

		}
	}

	.navigation-menu__box {
		position: relative;
		display: block;
		width: 1.5rem;
		height: 1rem;
	}

	.navigation-menu__inner {
		top: 50%;
		bottom: 0;
		transition-duration: 0.13s;
		transition-delay: 0.13s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		margin-top: -.0625rem;
		
		&,
		&::before,
		&::after {
			display: block;
			width: 1.5rem;
			height: .125rem;
			background-color: $white;
			border-radius: .0625rem;
			position: absolute;
		}

		&::before,
		&::after {
			content: "";
		}

		&::before {
			top: -.4375em;
			transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                  transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}

		&::after {
			bottom: -.4375em;
			transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                  opacity 0.1s linear;
		}

	}
</style>