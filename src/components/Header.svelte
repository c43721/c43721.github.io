<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	interface Link {
		name: string;
		path: string;
	}

	let links: Link[] = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Github', path: 'https://github.com/c43721' }
	];

	let showMobileMenu = false;

	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	const handleNavbarClick = () => {
		if (!showMobileMenu) return;
		showMobileMenu = !showMobileMenu;
	};

	const mediaQueryHandler = (e: MediaQueryListEvent) => {
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 450)');

		mediaListener.addEventListener('change', mediaQueryHandler);
	});
</script>

<nav>
	<div class="flex__container">
		<div on:click={handleMobileIconClick} class="icon" class:mobile={showMobileMenu}>
			<div class="middle-line" />
		</div>
		<ul class="navbar-list" class:mobile={showMobileMenu}>
			{#each links as item}
				<li>
					<a on:click={handleNavbarClick} href={item.path} class:active={$page.path === item.path}
						>{item.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	@import '../styles/base';

	nav {
		background-color: $primary;
		height: 50px;
	}

	@media screen and (min-width: 750px) {
		.flex__container {
			max-width: 50vw;
		}
	}

	.flex__container {
		margin: 0 auto;
		padding: 0 20px;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.icon:after,
	.icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: $textSecondary;
		transition: all 0.4s;
		transform-origin: center;
	}

	.icon:before,
	.middle-line {
		top: 0;
	}

	.icon:after,
	.middle-line {
		bottom: 0;
	}

	.icon:before {
		width: 66%;
	}

	.icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.icon:hover:before,
	.icon:hover:after,
	.icon.active:before,
	.icon.active:after,
	.icon.active .middle-line {
		width: 100%;
	}

	.icon.active:before,
	.icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-around;
		margin: 0;
		padding: 0 40px;

		& li {
			list-style-type: none;
			position: relative;

			& a.active {
				color: $textPrimary;
			}
		}

		& li::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1px;
		}

		& li:hover::before {
			transition: 250ms;
			background-color: $textSecondary;
		}
	}

	.navbar-list.mobile {
		background-color: rgba(0, 0, 0, 0.7);
		position: fixed;
		display: block;
		height: calc(100% - 50px);
		bottom: 0;
		left: 0;
		display: flex;
		gap: 15px;
		flex-direction: column;
		justify-content: start;

		& li a {
			font-size: 1.25rem;
			transition: 250ms;
			color: rgba(255, 255, 255, 0.8);

			&:hover {
				color: #fff;
			}

			&.--active {
				color: $textPrimary;
			}
		}
	}

	.navbar-list a {
		color: $textSecondary;
		font-weight: 600;
		text-decoration: none;
		display: flex;
		height: 50px;
		align-items: center;
		padding: 0 10px;
		font-size: 13px;

		&:hover {
			color: $textPrimary;
		}
	}

	@media only screen and (min-width: 767px) {
		.icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
</style>
