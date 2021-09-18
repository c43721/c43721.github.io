<script>
	import InfoBox from '../components/InfoBox.svelte';
	import Confetti from '../components/Confetti.svelte';
	import Header from '../components/Header.svelte';
</script>

<Header />

<main class="content">
	<InfoBox />
</main>

<Confetti />

<div class="wave" />

<style lang="scss">
	.content {
		margin: 0 1rem;
		display: flex;
		justify-content: center;
        align-items: center;
        height: 45vh;
        min-width: 50vw;
	}
</style>
