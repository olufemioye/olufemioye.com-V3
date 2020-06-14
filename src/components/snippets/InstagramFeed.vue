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
				instagramData: null,
				accessToken: '302493035.20cd535.495b1e5141ea40bf9937829f15180de3',
				count: 9
			}
		},
		mounted() {
			axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.accessToken}&count=${this.count}`)
			.then( response => (this.instagramData = response.data.data ) )
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