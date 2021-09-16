<script lang="ts">
	import { page } from '$app/stores';
	interface Link {
		name: string;
		path: string;
	}

	let active = (path: string) => $page.path === path;

	let links: Link[] = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' }
	];
</script>

<div class="container">
	<a class="link__header" href="/">c43721</a>

	{#each links as link (link.name)}
		<a class="link" class:link--active={active(link.path)} href={link.path}>{link.name}</a>
	{/each}
</div>

<style lang="scss">
	@import '../styles/base';

	$padding: 1rem;
	$containerHeight: 50px;

	$colorActive: rgba(0, 0, 0, 0.9);
	$colorInactive: rgba(0, 0, 0, 0.5);

	.container {
		height: $containerHeight;
		background-color: $primary;
		display: flex;
		align-items: center;
		padding: 0 5vw;
	}

	.link {
		padding: $padding;
		color: $colorInactive;
		text-decoration: none;
		margin: 0 8px;

		&:hover {
			color: $textPrimary;
		}

		&--active {
			color: $colorActive;
			font-weight: 400;
		}

		&__header {
			color: $colorActive;
			padding: $padding;
			text-decoration: none;
			padding: 3px 7px;
			font-weight: 600;
		}
	}
</style>
