<script lang="ts">
	import { fade } from 'svelte/transition';

	import Project from '../components/Project.svelte';
	import Head from '../components/Head.svelte';

	import projects from '../utils/allProjects';

	// Sorting boolean :/
	$: allProjects = projects.sort((a: any, b: any) =>
		b.starred === a.starred ? 0 : b.starred === true ? 1 : -1
	);
</script>

<Head title="Projects" description="c43721's Projects" />

<h1 class="header">Projects</h1>

<div class="project-list">
	{#each allProjects as p, i (p.title)}
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
		padding-bottom: 50px;
	}
</style>
