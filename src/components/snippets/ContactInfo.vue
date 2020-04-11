<template>
	<div class="contact-info">
		<p class="contact-info__title caption">{{title}}</p>
		<a :href="url" class="contact-info__link" target="_blank">
			<div class="contact-info__icon">
				<Twitter v-if="icon === 'twitter'" />
				<Instagram v-else-if="icon === 'instagram'" />
				<Medium v-else-if="icon === 'medium'" />
				<Dribbble v-else-if="icon === 'dribbble'" />
				<Github v-else-if="icon === 'github'" />
				<LinkedIn v-else-if="icon === 'linkedin'" />
			</div>
			<p class="contact-info__name">{{name}}</p>
			<div class="contact-info__arrow">
				<Arrow />
			</div>
		</a>
	</div>
</template>

<script>
import Twitter from '@/components/icons/Twitter.vue';
import Instagram from '@/components/icons/Instagram.vue';
import Medium from '@/components/icons/Medium.vue';
import Dribbble from '@/components/icons/Dribbble.vue';
import Github from '@/components/icons/Github.vue';
import LinkedIn from '@/components/icons/LinkedIn.vue';
import Arrow from '@/components/icons/Arrow.vue';

export default {
	name: 'contact-info',
	props: {
		title: String,
		icon: String,
		url: String,
		name: String
	},
	components: {
		Twitter,
		Instagram,
		Medium,
		Dribbble,
		Github,
		LinkedIn,
		Arrow
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.contact-info__title {
		color: $silver;
		margin-bottom: .5rem;
	}

	.contact-info__link {
		position: relative;
		display: flex;
		align-items: center;
		padding: .5rem 0;
		text-decoration: none;
		color: $white;
		background-color: rgba($steel, .5);
		z-index: 1;
		&::after {
				content: '';
				position: absolute;
				z-index: -1;
				width: 0;
				height: 100%;
				top: 0;
				left: 0;
				background-color: $steel;
				transition: width .5s ease;
			}
		
		&:hover {
			&::after {
				content: '';
				width: 100%;
			}
		}
	}

	.contact-info__name {
		margin: 0;
		flex: 1 0 auto;
	}

	.contact-info__icon {
		display: flex;
		padding: 0 .75rem;

		svg {
			width: 1rem;
			height: 1rem;
		}
	}
	
	.contact-info__arrow {
		display: none;
	}

	@include breakpoint-min(lg) {
		.contact-info__icon,
		.contact-info__arrow {
			padding: 0 1rem;
			
			svg {
				height: 1.25rem;
				width: 1.25rem;
			}
		}

		.contact-info__arrow {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>