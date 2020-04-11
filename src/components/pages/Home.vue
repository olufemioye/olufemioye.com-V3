<template>
	<div class="page page--grid">
		<section class="page-content">
			<div class="page-content__container">
				<h1 class="heading" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"><span class="hand-wave">👋🏾</span></h1>
				<h4 class="sub-heading margin-b-md" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">My name is Femi, and I build digital products.</h4>
				<p class="paragraph text-steel margin-b-lg" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">I transform ideas into meaningful digital experiences with design and code.</p>
				<CTA data-aos="fade-up" data-aos-duration="600" data-aos-delay="600" data-offset="20" caption="Stay in touch" />
			</div>
		</section>
		<section class="page-visual" data-aos="fade" data-aos-duration="1200" data-aos-delay="800">
			<div class="page-visual__container text-center">
				<Avatar />
			</div>
		</section>
	</div>
</template>

<script>
	import Avatar from "@/components/snippets/Avatar.vue";

	export default {
		name: 'Home',
		components: {
			Avatar
		}
	}
</script>

<style lang="scss" scoped>
	.hand-wave {
		display: inline-block;
		position: relative;
		transform-origin: bottom right;
		animation-name: handWave;
		animation-direction: normal;
		animation-delay: 2s;
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-iteration-count: 2;
		animation-play-state: running;
		animation-timing-function: ease;

		&:hover {
			cursor: none;
			animation-iteration-count: infinite;
		}
	}

	@keyframes handWave {
		0% {
			transform: rotate(0);
		}
		20% {
			transform: rotate(15deg);
		}
		40% {
			transform: rotate(-15deg);
		}
		60% {
			transform: rotate(7deg);
		}
		80% {
			transform: rotate(-7deg);
		}
		100% {
			transform: rotate(0);
		}
	}
</style>