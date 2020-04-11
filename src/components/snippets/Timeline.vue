<template>
	<div class="timeline">
		<h6 class="caption timeline__date">{{date}}</h6>
		<p class="paragraph timeline__role">{{role}}</p>
		<small class="small timeline__desc">{{description}}</small>
	</div>
</template>

<script>
export default {
	name: 'Timeline',
	props: {
		date: String,
		role: String,
		description: String
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/modules/_variables.scss";
	@import "@/assets/scss/modules/_responsive.scss";

	.timeline {
		display: block;
		position: relative;
		padding-left: 1.25rem;
		margin-bottom: 2rem;
		&:last-child{
			&::after {
				content: none;
			}
		}

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: .75rem;
			height: .75rem;
			background: $theme-blue;
			border-radius: 50%;
		}

		&::after {
			content: '';
			display: block;
			position: absolute;
			height: calc(100% + 2rem - 5px);
			border-right: 1px dashed $theme-blue;
			top: 5px;
			left: 5px;
			transform: translateX(50%);
		}
	}

	.timeline__date {
		color: $theme-blue;
		margin-bottom: .25rem;
	}
	.timeline__role {
		color: $black;
		margin-bottom: .25rem;
	}
	.timeline__desc {
		color: $slate;
		margin: 0;
	}

	@include breakpoint-min(lg) {
		.timeline {
			padding-left: 1.75rem;
			margin-bottom: 2.5rem;
			&::before {
				height: 1rem;
				width: 1rem;
			}
			&::after {
				top: 7px;
				left: 7px;
				height: calc(100% + 2.5rem - 7px);
			}
		}
	}
</style>