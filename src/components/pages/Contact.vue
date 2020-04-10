<template>
	<div class="page page--contact">
		<div class="layout-container">
			<h1 class="heading">Contact</h1>
			<p class="paragraph">Got a product idea, or want to say hello? Please feel free to send me an email. Let’s build awesome shit together!</p>

			<p class="caption">Email</p>
			<a class="cta-link" href="mailto: hello@olufemioye.com">hello@olufemioye.com</a>
			<section class="contact-list">
				<ContactInfo title="Ramblings" icon="twitter" name="Twitter" url="https://twitter.com/olufemioye" />
				<ContactInfo title="Photos" icon="instagram" name="Instagram" url="https://instagram.com/olufemioye" />
				<ContactInfo title="Writing" icon="medium" name="Medium" url="https://medium.com/@olufemi.oye" />
				<ContactInfo title="Design" icon="dribbble" name="Dribbble" url="https://dribbble.com/olufemi" />
				<ContactInfo title="Code" icon="github" name="Github" url="https://github.com/olufemioye" />
				<ContactInfo title="CV" icon="linkedin" name="LinkedIn" url="https://linkedin.com/in/olufemioye" />
			</section>
		
		</div>
	</div>
</template>

<script>
import ContactInfo from '@/components/snippets/ContactInfo.vue';

export default {
	name: 'contact',
	components: {
		ContactInfo
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.contact-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1.5rem 1rem;

		@include breakpoint-min(lg) {
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 2rem 1.5rem;
		}
	}
</style>