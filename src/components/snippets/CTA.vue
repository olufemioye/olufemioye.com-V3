<template>
	<div class="cta">
		<p class="caption cta__caption" :class="captionClass"> {{caption}} </p>
		<a href="mailto:hello@olufemioye.com" class="cta__link" :class="darkTheme ? 'cta__link--dark' : null">hello@olufemioye.com</a>
	</div>
</template>

<script>
export default {
	name: "call-to-action",
	props: {
		darkTheme: Boolean,
		caption: String,
		captionClass: String
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.cta {
		position: relative;
	}

	.cta__caption {
		margin-bottom: .75rem;
		color: $silver;
	}

	.cta__link {
		display: inline-block;
		position: relative;
		color: $theme-blue;
		font-size: $font-size-l;
		font-weight: $font-weight-medium;
		transition: .5s ease-in-out all;
		text-decoration: none;
		z-index: 1;
		
		&::after {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			bottom: -2px;
			width: 100%;
			height: 2px;
			line-height: 1.5;
			background: $theme-blue;
			z-index: -1;
			text-decoration: none;
			transition: inherit;
		}

		&.cta__link--dark {
			color: $white;

			&::after {
				background: $white;
			}

			&:focus,
			&:hover {
				color: $theme-blue;
			}

		}

		&:focus,
		&:hover {
			color: $white;

			&::after {
				height: calc(100% + 2px);
			}

		}

	}

	@include breakpoint-min(lg) {
		.cta__caption {
			margin-bottom: 1rem;
		}

		.cta__link {
			font-size: $font-size-xl;

			&::after {
				bottom: -4px;
				height: 4px;
			}

			&:focus,
			&:hover {

				&::after {
					height: calc(100% + 4px);
				}
			}
		}
	}

</style>