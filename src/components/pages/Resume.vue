<template>
	<div class="page page--resume">
		<div class="layout-container">
			<div class="page-content">
				<h1 class="heading">Resume</h1>
				<p class="paragraph text-steel mb-4">I have over 4 years of experience in building world-class digital products that help people and businesses succeed.</p>
				<section>
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
			
		</div>
	
	</div>
</template>

<script>
	import Timeline from "@/components/snippets/Timeline.vue";

	export default {
		name: 'Resume',
		components: {
			Timeline
		}
	}
</script>