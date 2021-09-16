<script lang="ts">
	interface Link {
		name: string;
		path: string;
	}

	let links: Link[] = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' }
	];
</script>

<div class="container">
	{#each links as link (link.name)}
		<a class="link" href={link.path}>{link.name}</a>
	{/each}
</div>

<style lang="scss">
	@import '../styles/base';

	$padding: 1rem;
	$containerHeight: 75px;

	:global(body) {
		box-sizing: border-box;
		margin: 0;
	}

	.container {
		height: $containerHeight;
		background-color: $primary;
	}

	.link {
		padding: $padding;
		color: $textSecondary;
		text-decoration: none;

		&--active {
			color: $textPrimary;
		}
	}
</style>
