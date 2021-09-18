<script lang="ts">
	import Project from '../components/Project.svelte';
	import type IProject from '../types/project';

	const projects: IProject[] = [
		{
			title: 'test',
			category: 'Website',
			description: 'Testing website',
			stack: ['mongodb']
		}
	];
</script>

<h1 class="header">Projects</h1>

<div class="project-list">
	{#each projects as p (p.title)}
		<Project {...p} />
	{/each}
</div>

<style lang="scss">
	.header {
		text-align: center;
	}

	.project-list {
		max-width: 50vw;
		margin: 0 auto;
	}
</style>
