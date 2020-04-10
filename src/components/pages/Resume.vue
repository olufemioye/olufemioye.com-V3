<template>
	<div class="page page--grid">
		<section class="page-content">
			<div class="page-content__container">
				<h1 class="heading">Resume</h1>
				<p class="paragraph text-steel margin-b-lg">I have over 4 years of experience in building world-class digital products that help people and businesses succeed.</p>
				<section class="margin-b-lg">
					<h4 class="sub-heading">Work Experience</h4>
					<Timeline date="Mar. 2020 - Present" 
										role="Front-end Developer | VC4A"
										description="Connecting enterpreneurs with Investors with Frontend Development and UX Design."  />
					<Timeline date="Feb. 2018 - Mar. 2020" 
										role="Product Designer | REACH"
										description="Designed tools and solutions that helps millennials understand, borrow and invest money." />
					<Timeline date="Aug. 2016 - Feb. 2018" 
										role="Front-end Developer | SeamlessHR"
										description="Developed various products that empowers and enhances HR systems and career development."  />
				</section>
				
				<section>
					<h4 class="sub-heading">Education</h4>
					<Timeline date="Bachelor of Science 2016" 
										role="Obafemi Awolowo University"
										description="Chemical Engineering."  />
				</section>
				
			</div>
		</section>
		<section class="page-visual">
			<div class="page-visual__container">
				<ResumeEnvelope />
			</div>
		</section>
	</div>
</template>

<script>
	import Timeline from "@/components/snippets/Timeline.vue";
	import ResumeEnvelope from "@/components/snippets/ResumeEnvelope";

	export default {
		name: 'Resume',
		components: {
			Timeline,
			ResumeEnvelope
		}
	}
</script>