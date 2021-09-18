<script lang="ts">
	export let title: string;
	export let description: string;
	export let category: string;
	export let stack: string[];

	let open: boolean = false;
</script>

<div class="container">
	<div class="header">
		<p class="title">{title}</p>
		{#if open}
			<p class="category">{category}</p>
		{/if}
		{#if open}
			<p class="button" on:click|preventDefault={() => (open = !open)}>View Less</p>
		{:else}
			<p class="button" on:click|preventDefault={() => (open = !open)}>View More</p>
		{/if}
	</div>
	{#if open}
		<div class="description">
			<div>
				<p>Stack:</p>
				<ul>
					{#each stack as s}
						<li>{stack}</li>
					{/each}
				</ul>
			</div>
			<p class="main_content">
				{@html description}
			</p>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../styles/base';

	.main_content {
		margin-top: 15px;
	}

	.category {
		font-size: 0.8rem;
		color: #6c757d;
        opacity: .75;
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
