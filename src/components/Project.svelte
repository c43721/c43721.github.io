<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';

	export let title: string;
	export let description: string;
	export let category: string;
	export let stack: string[];
	export let starred: boolean = false;

	let open: boolean = false;
</script>

<div class="container" class:starred>
	<div class="header">
		<p class="title">{title}</p>
		{#if open}
			<p in:fade={{ duration: 170 }} out:fly={{ x: -10 }} class="category">{category}</p>
		{/if}
		{#if open}
			<p class="button" on:click|preventDefault={() => (open = !open)}>View Less</p>
		{:else}
			<p class="button" on:click|preventDefault={() => (open = !open)}>View More</p>
		{/if}
	</div>
	{#if open}
		<div class="description" transition:slide>
			<span>
				<p>Stack:</p>
				<ul>
					{#each stack as s}
						<li>{stack}</li>
					{/each}
				</ul>
			</span>
			<p class="main_content">
				{@html description}
			</p>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../styles/base';

	$starredColor: #f1c40f;

	.main_content {
		margin-top: 15px;
	}

	.category {
		font-size: 0.8rem;
		color: #6c757d;
		opacity: 0.75;
	}

	.title {
		font-weight: 600;
	}

	.container {
		font-size: 1.2rem;
		border: 1px solid #666;
		border-radius: 0.3em;
		padding: 7px 15px;
		background-color: $primary;

		&.starred {
			border-color: $starredColor;
			box-shadow: 0 0 15px 3px $starredColor;
		}

		& .button {
			user-select: none;
			cursor: pointer;
		}

		& .header {
			display: flex;
			justify-content: space-between;
		}

		& .description {
			font-size: 1.1rem;
		}
	}
</style>
