<div class="container">
	<span> &copy; c43721 2021 </span>
	<span>
		<a href="https://github.com/c43721">github</a> -
		<a href="https://www.linkedin.com/in/ryan-lahman/">linked in</a>
	</span>
</div>

<style lang="scss">
	@import '../styles/base';

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 5px;
		height: 25px;
		padding: 15px;
        padding-bottom: 20px;
		margin-top: 200vh;
		color: $primary;
		font-weight: 600;
		font-size: 1.1rem;

		& a {
			text-decoration: none;
			color: $primary;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
