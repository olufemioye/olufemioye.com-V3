<template>
	<div class="page page--grid">
		<section class="page-content">
			<div class="page-content__container">
				<h1 class="heading">Person</h1>
				<p class="paragraph text-steel">
					Full name - Oluwafemi Abiodun Oye.
				</p>
				<p class="paragraph text-steel">
					90s baby. Based in Lagos, Nigeria.
				</p>
				<p class="paragraph text-steel">
					Music Junkie, art and travel enthusiat. I take my sleep and food pretty serious.
				</p>
				<p class="paragraph text-steel">
					I really like building things, I like watching things grow from ground up. Currently I am using my knowledge in design and code to build better and meaniful digital experiences. I have an interest in building businesses at scale.
				</p>
			</div>
		</section>
		<section class="page-visual">
			<p class="caption text-silver">Latest from my Instagram</p>
			<div class="layout-container">
				<InstagramFeed />
			</div>
		</section>
	</div>
</template>

<script>
	import InstagramFeed from '@/components/snippets/InstagramFeed.vue';

	export default {
		name: 'Person',
		components: {
			InstagramFeed
		}
	}
</script>