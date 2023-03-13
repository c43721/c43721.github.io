<script>
	import Head from '../components/Head.svelte';
	import Divider from '../components/Divider.svelte';
	import Avatar from '../components/Avatar.svelte';
</script>

<Head title="About" description="About c43721" />

<main class="container">
	<section class="content">
		<div class="header">
			<Avatar scale={75} src="ProfilePicture.png" />
			<span class="name">c43721</span>
		</div>

		<span class="divider">
			<Divider />
		</span>

		<section class="description">
			<b>Hello!</b> I'm a professional Software Engineer with a strong focus on backend. I have solved problems using toolsets ranging from C#
			and .NET, to TypeScript and JavaScript, and as far as Rust and Cloudflare Workers. My deployment techstack of choice for these projects
			is Docker for isolation / containerization and NGiNX as my reverse proxy and load balancer.

			<br /> <br />

			I became enamored with engineering in the professional sense for around 1 year at this point. That, coupled with another 3
			years spent as a hobby-enthusiast, give me an excellent base of knowledge with which I solve problems and seek to accomplish goals.
			My first programming language was good old grandpa Java, from which I modernized my development tools by learning JavaScript, shortly 
			thereafter followed by TypeScript and C#. Most of my <a href="/projects">Open Source Projects</a> are written in
			TypeScript and deployed using Docker.

			<br /> <br />

			If you want to get in touch with me, you're free to
			<a href="mailto:c43721@c43721.dev">shoot me an email</a>. If you wish to explore my projects in
			more detail, head to my <a href="https://github.com/c43721" target="_blank">github page</a>.
		</section>
	</section>
</main>

<style lang="scss">
	@import '../styles/base';

	$scale: 75px;
	$linkColor: #007bff;

	@media screen and (max-width: 800px) {
		.content {
			width: 80vw !important;
		}
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
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
