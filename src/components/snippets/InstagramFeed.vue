<template>
	<div class="instagram-feed">
		<a class="instagram-feed__post" v-for="post in instagramData" :key="post.index" :href="post.link" :title="post.caption.text">
			<img class="instagram-feed__img" :src="post.images.low_resolution.url" :alt="post.caption.text">
		</a>
	</div>
</template>

<script>
	const axios = require('axios');
	export default {
		name: 'InstagramFeed',
		data() {
			return {
				instagramData: null
			}
		},
		mounted() {
			axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=302493035.20cd535.20dbac4ab0384cd99b4edb8e99b8f1f8')
			.then( response => (this.instagramData = response.data.data.slice(0,9) ) )
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.instagram-feed {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: .25rem;
	}
	.instagram-feed__post {
		display: block;
		text-decoration: none;
		color: inherit;
	}
	.instagram-feed__img {
		width: 100%;
	}
	@include breakpoint-min (lg) {
		.instagram-feed {
			max-width: 540px;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>