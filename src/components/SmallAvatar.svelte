<script lang="ts">
	export let src: string;
	export let alt: string = 'Avatar picture';
</script>

<img {src} {alt} class="avatar" />

<style lang="scss">
	$scale: 75px;

	.avatar {
		border-radius: 50%;
		border: 1px solid #777;
		vertical-align: middle;
		height: $scale;
		width: $scale;
		background-size: cover;
		object-fit: cover;
		background-position: top center;
	}
</style>
