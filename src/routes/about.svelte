<script>
	import Divider from '../components/Divider.svelte';
	import SmallAvatar from '../components/SmallAvatar.svelte';
</script>

<main class="container">
	<section class="content">
		<div class="header">
			<SmallAvatar src="ProfilePicture.png" />
			<span class="name">c43721</span>
		</div>

		<span class="divider">
			<Divider />
		</span>

		<section class="description">
			Hello! I'm a professional Software Engineer with a strong focus on backed, using tools like C#
			and .NET, TypeScript and JavaScript, Rust and Cloudflare Workers, and deploying these projects
			with Docker and Nginx.

			<br /> <br />

			I've been doing professional engineering for around a year, and extending that with another 3
			years of hobby experience. I started with good old Java, and worked myself up to JavaScript,
			TypeScript and C#. Most of my <a href="/projects">open source projects</a> are written in
			TypeScript and deployed using Docker.

			<br /> <br />

			If you want to get in touch with me, you're free to
			<a href="mailto:24@elo.associates">send me an email</a>. If you wish to explore my projects in
			more detail, head to my <a href="https://github.com/c43721" target="_blank">github page</a>.
		</section>
	</section>
</main>

<style lang="scss">
	@import '../styles/base';

	$scale: 75px;
	$linkColor: #007bff;

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 70vh;
	}

	.divider {
		padding: 15px;
	}
	.name {
		font-weight: bold;
		font-size: 2.25rem;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
	}

	.content {
		width: 50vw;
		background-color: $primary;
		padding: 20px;
		border-radius: 0.3em;
	}

	.description {
		padding: 20px;
		text-align: justify;
		line-height: 2;
		font-size: 1.05rem;
	}

	a {
		text-decoration: none;
		color: $linkColor;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
