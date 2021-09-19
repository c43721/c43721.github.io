import type IProject from './project';

export default [
	{
		title: 'Payload',
		category: 'Discord Bot',
		description:
			'A discord bot intended to integrate services from TF2 into Discord. I continued to develop it after it was discontinued in late 2019. Fun fact: I translated all of the bot to Spanish myself!',
		stack: ['MongoDB', 'TypeScript', 'NodeJS', 'React', 'Express', 'Vercel']
	},
	{
		title: 'rcon.tf',
		category: 'Website',
		description: `A website to manage many <a href="https://developer.valvesoftware.com/wiki/Source_Dedicated_Server">srcds gameservers</a> at once as a server owner. The goal in mind was to give power to a server owner to see who is playing and what is going on.`,
		stack: ['MongoDB', 'TypeScript', 'NodeJS', 'React', 'Redux', 'NestJS', 'DigitalOcean']
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
		description: `Our group final that took everything that we learned and put it to the test: Make a social media website. Complete with user authentication! I led our group of 6 bootcamp attendees to victory as we scored perfect on the project.`,
		stack: ['MongoDB', 'JavaScript', 'NodeJS', 'React', 'Express']
	},
	{
		title: 'This Site!',
		category: 'Website',
		description: `Originally written during bootcamp, I decided in late 2021 to reface it and give it more meaning to me. I had originally written it using just HTML, CSS, and JavaScript, but now is written using <a href="https://svelte.dev">Svelte</a>!`,
		stack: ['JavaScript', 'SCSS', 'Svelte', 'GitHub Actions']
	},
	{
		title: 'Website Rcon',
		category: 'Website',
		description: `I more-or-less built this just to test my skills, as I had already built something
            similar for the rcon.tf project, but I decided to take that code and make it
            accessable to anyone on the web. It uses GitHub pages to deploy!`,
		stack: ['HTMl', 'CSS', 'JavaScript', 'Express']
	}
] as IProject[];
