import type IProject from './project';

export default [
	{
		title: 'Payload',
		category: 'Discord Bot',
		description: `
		A discord bot intended to integrate services from TF2 into Discord. This was my first major project which I not only developed on my own, but also deployed into a production environment for actual end users.
		I deployed the system using Docker for my virtualized containers, NGiNX as a reverse proxy, which was then further proxied & DDoS protected via Cloudflare DNS & network services. Payload bot is released with an accompanying React frontend to manage your bot's personalized settings.
		
		<br /> <br />
		Fun fact: I translated all of the bot to Spanish myself!`,
		stack: ['MongoDB', 'TypeScript', 'NodeJS', 'Next.js', 'Express', 'Vercel', 'DigitalOcean'],
		starred: true
	},
	{
		title: 'rcon.tf',
		category: 'Website',
		description: `A website to manage many <a href="https://developer.valvesoftware.com/wiki/Source_Dedicated_Server">srcds gameservers</a> at once as a server owner. The goal in mind was to give power to a server owner to see who is playing and what is going on. This was my final project for my Coding Bootcamp.`,
		stack: ['MongoDB', 'TypeScript', 'NodeJS', 'React', 'Redux', 'NestJS', 'DigitalOcean']
	},
	{
		title: 'tf2pickup.org',
		category: 'Website',
		description: `An open sourced website to allow people to organize pick-up games for TF2. I got involved by doing some contributions to the backend, and do some tidying up here and there. Since I'm not a core maintainer and just a collaborator currently, most of my work is talking with the project owners and coding up some solutions, getting feedback, working on the feedback, and merging my PRs!`,
		stack: ['MongoDB', 'TypeScript', 'NodeJS']
	},
	{
		title: 'RGL API',
		category: 'Website',
		description: `A website that scraped a site to provide a fast, efficient, and scalable API. Brought in socket.io to have real time broadcasts of events, and used Redis heavily to cache to prevent unwanted requests.`,
		stack: ['Redis', 'TypeScript', 'NodeJS', 'NestJS', 'DigitalOcean']
	},
	{
		title: 'rcon-srcds',
		category: 'NPM Package',
		description: `
            A sweet package that was developed by <a href="https://github.com/EnriqCG"
            target="_blank">Enrique</a> in late 2018 to interact with the Valve RCON
            protocol. Recently, Enrique had converted the repo to TypeScript, although it had
            not been merged. Since the creation of <a href="https://rcon.tf"
                target="_blank">rcon.tf</a>, I had been searching for a package with TypeScript
            support and this was the most promising. I had forked the repo and committed several
            changes that were merged, where I now am listed as a contributor.
        `,
		stack: ['TypeScript', 'NPM', 'NodeJS']
	},
	{
		title: 'Kodning',
		category: 'Website',
		description: `Our group final that took everything that we learned and put it to the test: Make a social media website. Complete with user authentication! I led our group of 6 bootcamp attendees to victory achieved a 100% on the project.`,
		stack: ['MongoDB', 'JavaScript', 'NodeJS', 'React', 'Express']
	},
	{
		title: 'logstf-parser',
		category: 'NPM Package',
		description: `A fork of a past framework for parsing logs.tf logs, I stepped in and helped test the whole package and introduced some more modern syntax. I don't core maintain the package, but I work with the owner of the repo to help keep it modern and working!`,
		stack: ['TypeScript', 'NodeJS', 'Jest']
	},
	{
		title: 'This Site!',
		category: 'Website',
		description: `Originally written during bootcamp, I decided in mid 2021 to reface it and give it more meaning and give it a better feel. I had originally written it using just HTML, CSS, and JavaScript, but now is written using <a href="https://svelte.dev">Svelte</a>! This project also has a full-on CI/CD pipeline, where changes will be reflected automatically using GitHub Actions and GitHub Pages.`,
		stack: ['JavaScript', 'SCSS', 'Svelte', 'GitHub Actions']
	},
	{
		title: 'Website Rcon',
		category: 'Website',
		description: `I more-or-less built this just to test my skills, as I had already built something
            similar for the rcon.tf project, but I decided to take that code and make it
            accessable to anyone on the web. It uses GitHub Pages to host, and uses the rcon.tf's backend to run commands.`,
		stack: ['HTMl', 'CSS', 'JavaScript', 'Express', 'GitHub Pages']
	}
] as IProject[];
