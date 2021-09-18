<script>
	import { onMount } from 'svelte';

	let confetti = new Array(65)
		.fill()
		.map((_, i) => {
			return {
				x: Math.random() * 100 - 15,
				y: -20 - Math.random() * 100,
				r: 0.1 + Math.random() * 1
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map((emoji) => {
				emoji.y += 0.7 * emoji.r;
				if (emoji.y > 120) emoji.y = -20;
				return emoji;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

{#each confetti as c}
	<span class="water" style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})" />
{/each}

<style>
	:global(body) {
		overflow: hidden;
	}

	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}

	.water {
		z-index: -1;
		width: 1px;
		height: 60%;
		margin-left: 7px;
		background: linear-gradient(to bottom, rgba(79, 88, 210, 0), rgba(255, 255, 255, 0.25));
		animation: stem 0.5s linear infinite;
	}
</style>
