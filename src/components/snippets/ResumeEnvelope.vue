<template>
	<a href="https://bit.ly/2EjuVlY" class="resume-envelope" target="_blank">
		<div class="resume-envelope__back"></div>
		<div class="resume-paper"></div>
		<div class="resume-envelope__front">
			<span class="resume-envelope__cta">Olufemi's Resume</span>
		</div>
	</a>
</template>

<script>
export default {
	name: 'Resume-Envelope'
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	$back-color: #8C91A1;
	$front-color: #CED3E3;

	$envelope-width: 15rem;
	$envelope-height: 25rem;
	$back-height: 20rem;
	$back-flap-height: 5rem;
	$front-height: 18rem;
	$front-cutout: 2rem;
	$paper-width: 13.5rem;
	$paper-height: 20rem;
	$magnifiaction: 1.5;



	.resume-envelope {
		display: block;
		position: relative;
		height: $envelope-height;
		width: $envelope-width;
		margin: 0 auto;
		transition: .5s ease-in-out all;

		@include breakpoint-min (lg) {
			transform-origin: top;
			transform: scale($magnifiaction);
		}

		&:hover,&:focus {
			.resume-paper {
				top: 0rem;
				animation: none;
			}
		}
	}

	.resume-envelope__back {
		position: absolute;
		bottom: 0;
		left: 0;
		width: $envelope-width;
		height: $back-height;
		background: darken($back-color, 15%);

		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 0;
			height: 0;
			top: -$back-flap-height;
			border-style: solid;
			border-width: 0 ($envelope-width/2) $back-flap-height ($envelope-width/2);
			border-color: transparent transparent $back-color transparent;
			transition: .5s ease-in-out all;
			transition-delay: .5s;
			transform-origin: bottom;
		}
	}

	.resume-envelope__front {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		position: absolute;
		bottom: 0;
		left: 0;
		width: $envelope-width;
		height: $front-height;
		background-color: $front-color;

		&::before, &::after {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			top: -$front-cutout;
			border-style: solid;
		}
		&::before {
			left: 0;
			border-width: $front-cutout 0 0 ($envelope-width/2);
			border-color: transparent transparent transparent $front-color;
		}
		&::after {
			right: 0;
			border-width: 0 0 $front-cutout ($envelope-width/2);
			border-color: transparent transparent $front-color transparent;
		}
	}

	.resume-envelope__cta {
		display: inline-block;
		color: $back-color;
		font-size: $font-size-xs;
		font-weight: $font-weight-medium;
		letter-spacing: 1px;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 2rem;
	}

	.resume-paper {
		position: absolute;
		width: $paper-width;
		height: $paper-height;
		top: 3rem;
		left: .75rem;
		background: $white;
		border: 1px solid rgba($snow, .5);
		box-shadow: 0 0 .25rem rgba($black, .08);
		transition: inherit;
		animation: 10s bounce infinite;
		animation-delay: 3s;
	}

	@keyframes bounce {
		from,
		3%,
		7%,
		10%,
		to {
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
			transform: translate3d(0, 0, 0);
		}

		5%,
		6% {
			animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
			transform: translate3d(0, -1rem, 0);
		}

		8% {
			animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
			transform: translate3d(0, -.5rem, 0);
		}

		11% {
			transform: translate3d(0, -.125rem, 0);
		}
		13% {
			transform: translate3d(0, 0, 0);
		}
	}

	.bounce {
		animation-name: bounce;
		transform-origin: center bottom;
	}

</style>
