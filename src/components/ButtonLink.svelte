<script lang="ts">
	export let href: string = '/';
	export let text: string;
</script>

<a {href} class="link">
	<button class="button">
		{text}
	</button>
</a>

<style lang="scss">
    @import "../styles/base";

    $borderColor: lighten($secondary, 10%);
    $backgroundColor: lighten($secondary, 15%);
    $textColor: #FAFAFA;

	.link {
		text-decoration: none;
	}

    .button {
        border: none;
        background-color: $backgroundColor;
        padding: 9px 20px;
        border: 1px solid $borderColor;
        border-radius: .3em;
        color: $textColor;
        font-weight: bold;

        cursor: pointer;
    }
</style>
