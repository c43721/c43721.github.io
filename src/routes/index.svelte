<script>
	import Head from '../components/Head.svelte';
	import InfoBox from '../components/InfoBox.svelte';
</script>

<Head title="Home" description="Home site of c43721." />

<main class="content">
	<InfoBox />
</main>

<style lang="scss">
	.content {
		margin: 5vh 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 50vw;
	}
</style>
