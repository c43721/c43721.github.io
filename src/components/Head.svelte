<script lang="ts">
	export let title: string = 'Home';
	export let description: string = "c43721's portfilio. ";

	$: fullTitle = title + " | c43721's Portfolio";
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<title>{fullTitle}</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="title" content={fullTitle} />

	<meta name="theme-color" content="#006994" />

	<meta name="description" content={description} />

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="c43721" />
</svelte:head>
