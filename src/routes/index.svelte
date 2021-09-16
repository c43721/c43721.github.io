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
	$width: clamp(90%, 50vw, 50%);

	.content {
		display: flex;
		justify-content: center;
        align-items: center;
        height: 45vh;
        width: $width;
	}
</style>
