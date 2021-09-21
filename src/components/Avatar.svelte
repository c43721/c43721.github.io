<script lang="ts">
	export let src: string;
	export let alt: string = 'Avatar picture';

	export let scale: number = 150;
</script>

<img {src} {alt} width={scale} height={scale} class="avatar" />

<style lang="scss">

	.avatar {
		border-radius: 50%;
		border: 1px solid #777;
		vertical-align: middle;
		background-size: cover;
		object-fit: cover;
		background-position: top center;
	}
</style>
