<script>
	import Avatar from './Avatar.svelte';
	import ButtonLink from '../components/ButtonLink.svelte';
</script>

<div class="container">
	<div class="main_information">
		<Avatar src="ProfilePicture.png" />
		<p>c43721</p>
	</div>

	<p class="self_description">
		I am a full stack web developer with a focus on building cost effective solutions to challenging
		problems.
	</p>

	<hr class="divider" />

	<div class="bottom">
		<p>Go explore my projects!</p>
		<ButtonLink text="Explore Projects" href="/projects" />
	</div>
</div>

<style lang="scss">
	@import '../styles/base';

	.main_information {
		display: flex;
		align-items: center;
		gap: 7px;

		& p {
			font-weight: 500;
			font-size: 3rem;
		}
	}

	.self_description {
		color: lighten($textPrimary, 25%);
		margin: 15px 15px;
		text-align: center;
		font-size: 1.15rem;
	}

	.divider {
		border: none;
		border: 1px solid lighten($secondary, 10%);
	}

	.bottom {
		display: flex;
		align-items: center;
		flex-direction: column;

		& p {
			font-weight: 600;
		}
	}

	.container {
		background-color: $primary;
		padding: 2rem;
		border-radius: 0.5em;
	}
</style>
