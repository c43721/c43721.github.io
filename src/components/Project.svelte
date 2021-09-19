<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';

	export let title: string;
	export let description: string;
	export let category: string;
	export let stack: string[];
	export let starred: boolean = false;

	let open: boolean = false;
</script>

<main class="container" class:starred>
	<section class="header">
		<p class="title">{title}</p>
		{#if open}
			<p in:fade={{ duration: 170 }} out:fly={{ x: -10 }} class="category">{category}</p>
		{/if}
		{#if open}
			<p class="button" on:click|preventDefault={() => (open = !open)}>View Less</p>
		{:else}
			<p class="button" on:click|preventDefault={() => (open = !open)}>View More</p>
		{/if}
	</section>
	{#if open}
		<section class='hidden_section' transition:slide|local>
			<p class="Ǐ̷̢̡̬͔̺̳̺͈̀̐̾̂̚͠_̸̧͍̳̜̤̳̌H̸̡̛̯̙̗̼̟͎̰̱̥́̒͊̀͆́̽̚ͅḀ̴͓̪̞̈̃̔̿͗̌͋͊̃̔́̋̑͛̕̕V̵̢̨̭̫̭͔̣͓̲͒̽̅́͆̈́͋̾̐̀̔͐͊̒̑͒Ȩ̸̤͈̳̻̜̹͍̠͔̪̹́̆̃͑͊͐̂_̷̧͕͕̙̝̭̠̙̳̥̣̼̲̯̙̂͛̌̓͜͝Ť̸̨̢͈̤̱̩͚͓̰̬͉̳̪̠́̔̌ͅỐ̷̡͚̳̙͇͚̗͕̰̦͍͖͓̮̾̄̊͆̓͒̐̅͘͘͠_̷͉͉͎͔͚̜͕̺͎͒͋̍̿̎̾̚͜͜͠͝R̴̡̻̳͈̮̹͖̮̻̹͇̭̞͓͚̜͛Ę̴̛̛̟̳̦̣̦̙̫͔͇̱͈̤͗̓̿͗͑̽́̆͘M̶̮͕͍̬̟͖̲̑̃͛̔̆͋̐͂̈́̀͌͜͜͠͠O̷̡̧̜̺͕͔͓̐̋͆̀͋̀͋̀͗͒̈́͜V̴̜̟̬̞͕͇̤̮̣͖̑͌̈́̉͒̄̀Ẹ̶̞͉̣̜͖̰̩̝̀̑̅͊͆̉̇̿_̴̛̻̠̭̑͑͗͑͆̏̅̈́̄͒͆̕͝M̴̗̮̞͓̈́͆͑̄̔̔͐́̃͜͜A̵̯̎͆͒̀̀͊̌̐̊̓̕͘R̷̪̝̙̱̮̄́̚͜͜͝G̴̢͚͉̮̰̣̘̣̥̪̺̰̰̲̠͂̿̀̏̑̄͋͂͌̾̀̚I̵̧͖͈͇̥̞̮͍̻̪̟͖̥̙̠͔͆̔̊̉̓̕̕͝͝N̶͇̖̭̪̺̥̭̯̹̖̜̯͙̼̐̀̉̍̓̅̏̆̒͝_̸͔̼̜̑̌͂̕͝ͅF̸̛̘͉̝̝̩̮̫͇͕̳̪̅̒ͅR̴̢̻͇̅̐̅̔͜O̸̢̨̪̺͎̱̘͈̞̲̬̩͉̭̦̼͕͑̎͆̆̄̀͊̎̌̀̿̓̚M̸̛̛̿́̀̎̃̔̽̂͗͒͂͜͠_̵͓͉̳̪̩̣͖̣̜̼̦̯̳̰̳͖͆̑̄̀͐͘͝T̷̖̘͕̰͠H̵̺̥̯̭̺̥̤̲͕̭̜͙̩͒͋̾̒̌͛̏̐̍̌̆̚̚͘ͅĮ̵̡̳͈̲͙̜͈̤̝͖̦̲̝͈̆͠͝S̴̨̨͙̼͎̝̣̠̳͙̤̫̿̏̑̎͐̐̌̎͗̃̎̓̿̉͘͘͝_̵̧̢̱̞͔̮͔͕̙͎̮̮͓̆̌͋͌̈́̑͆̓̒̽Ẻ̷̪̭̦̘̪̘͕̆̒͐̉̎̾͒̓̿̇͊͝L̷͎̫͋͌̔̓̄̇̓̈̐̊̂́̓͌̕͠E̵̡̡̳̪̥̝͎͕͍͔̭̍̅̌͂͘M̴̛̫̭̤̟̝̘̝̹̰͉̺̤̲̔̍̍̏̽̇̀͊̅̋͑̃͝͠Ȩ̷̨̛̛͇̰̦̠̟̣̮̗̲̣̊̈̋̋̌̾̅̕̚͜͝ͅͅN̴̨̬̫̹̄͛͋̔̅̓̑͗̌̽́̾͘͝T̷̢̲͚̲̦̯̀̈́̄͆͐̈́͝͝">Stack:</p>
			{#each stack as s}
				- {stack}
			{/each}
			<div class="main_content">
				{@html description}
			</div>
		</section>
	{/if}
</main>

<style lang="scss">
	@import '../styles/base';

	$starredColor: #f1c40f;

	.Ǐ̷̢̡̬͔̺̳̺͈̀̐̾̂̚͠_̸̧͍̳̜̤̳̌H̸̡̛̯̙̗̼̟͎̰̱̥́̒͊̀͆́̽̚ͅḀ̴͓̪̞̈̃̔̿͗̌͋͊̃̔́̋̑͛̕̕V̵̢̨̭̫̭͔̣͓̲͒̽̅́͆̈́͋̾̐̀̔͐͊̒̑͒Ȩ̸̤͈̳̻̜̹͍̠͔̪̹́̆̃͑͊͐̂_̷̧͕͕̙̝̭̠̙̳̥̣̼̲̯̙̂͛̌̓͜͝Ť̸̨̢͈̤̱̩͚͓̰̬͉̳̪̠́̔̌ͅỐ̷̡͚̳̙͇͚̗͕̰̦͍͖͓̮̾̄̊͆̓͒̐̅͘͘͠_̷͉͉͎͔͚̜͕̺͎͒͋̍̿̎̾̚͜͜͠͝R̴̡̻̳͈̮̹͖̮̻̹͇̭̞͓͚̜͛Ę̴̛̛̟̳̦̣̦̙̫͔͇̱͈̤͗̓̿͗͑̽́̆͘M̶̮͕͍̬̟͖̲̑̃͛̔̆͋̐͂̈́̀͌͜͜͠͠O̷̡̧̜̺͕͔͓̐̋͆̀͋̀͋̀͗͒̈́͜V̴̜̟̬̞͕͇̤̮̣͖̑͌̈́̉͒̄̀Ẹ̶̞͉̣̜͖̰̩̝̀̑̅͊͆̉̇̿_̴̛̻̠̭̑͑͗͑͆̏̅̈́̄͒͆̕͝M̴̗̮̞͓̈́͆͑̄̔̔͐́̃͜͜A̵̯̎͆͒̀̀͊̌̐̊̓̕͘R̷̪̝̙̱̮̄́̚͜͜͝G̴̢͚͉̮̰̣̘̣̥̪̺̰̰̲̠͂̿̀̏̑̄͋͂͌̾̀̚I̵̧͖͈͇̥̞̮͍̻̪̟͖̥̙̠͔͆̔̊̉̓̕̕͝͝N̶͇̖̭̪̺̥̭̯̹̖̜̯͙̼̐̀̉̍̓̅̏̆̒͝_̸͔̼̜̑̌͂̕͝ͅF̸̛̘͉̝̝̩̮̫͇͕̳̪̅̒ͅR̴̢̻͇̅̐̅̔͜O̸̢̨̪̺͎̱̘͈̞̲̬̩͉̭̦̼͕͑̎͆̆̄̀͊̎̌̀̿̓̚M̸̛̛̿́̀̎̃̔̽̂͗͒͂͜͠_̵͓͉̳̪̩̣͖̣̜̼̦̯̳̰̳͖͆̑̄̀͐͘͝T̷̖̘͕̰͠H̵̺̥̯̭̺̥̤̲͕̭̜͙̩͒͋̾̒̌͛̏̐̍̌̆̚̚͘ͅĮ̵̡̳͈̲͙̜͈̤̝͖̦̲̝͈̆͠͝S̴̨̨͙̼͎̝̣̠̳͙̤̫̿̏̑̎͐̐̌̎͗̃̎̓̿̉͘͘͝_̵̧̢̱̞͔̮͔͕̙͎̮̮͓̆̌͋͌̈́̑͆̓̒̽Ẻ̷̪̭̦̘̪̘͕̆̒͐̉̎̾͒̓̿̇͊͝L̷͎̫͋͌̔̓̄̇̓̈̐̊̂́̓͌̕͠E̵̡̡̳̪̥̝͎͕͍͔̭̍̅̌͂͘M̴̛̫̭̤̟̝̘̝̹̰͉̺̤̲̔̍̍̏̽̇̀͊̅̋͑̃͝͠Ȩ̷̨̛̛͇̰̦̠̟̣̮̗̲̣̊̈̋̋̌̾̅̕̚͜͝ͅͅN̴̨̬̫̹̄͛͋̔̅̓̑͗̌̽́̾͘͝T̷̢̲͚̲̦̯̀̈́̄͆͐̈́͝͝ {
		margin: 0;
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

		& .hidden_section {
			font-size: 1.1rem;
			padding: 8px 0 15px;
		}
	}
</style>
