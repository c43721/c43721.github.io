<script lang="ts">
	import { fade } from 'svelte/transition';

	import Project from '../components/Project.svelte';
	import type IProject from '../types/project';

	const projects: IProject[] = [
		{
			title: 'tes1t',
			category: 'Website',
			description: 'Testing website',
			stack: ['mongodb']
		},
		{
			title: 'test2',
			category: 'Website',
			description: 'Testing website',
			stack: ['mongodb']
		},
		{
			title: 'test3',
			category: 'Website',
			description: 'Testing website',
			stack: ['mongodb']
		}
	];
</script>

<h1 class="header">Projects</h1>

<div class="project-list">
	{#each projects as p, i (p.title)}
		<span in:fade={{ delay: i * 100 }}>
			<Project {...p} />
		</span>
	{/each}
</div>

<style lang="scss">
	.header {
		text-align: center;
	}

	.project-list {
		max-width: 50vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		gap: 25px;
	}
</style>
