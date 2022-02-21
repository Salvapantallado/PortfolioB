import React from "react";

const GithubIcon = (
	<img
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
		alt="github"
	/>
);

const LinkIcon = (
	<img src="https://simpleicon.com/wp-content/uploads/link-2.png" alt="link" />
);

export const resumeData = {
	name: "Lighuen Miranda",
	title: "Frontend Developer",
	email: "lighu.miranda@gmail.com",

	socials: {
		LinkedIn: {
			link: "https://www.linkedin.com/in/lighuen-miranda/",
			text: "My LinkedIn",
			icon: (
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
					alt="linkedin"
				/>
			),
		},
		Github: {
			link: "https://github.com/Salvapantallado",
			text: "My Github",
			icon: GithubIcon,
		},
		WhatsApp: {
			link: "https://walink.co/156dba",
			text: "My WhatsApp",
			icon: (
				<img
					src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11-1019x1024.png"
					alt="wsp"
				/>
			),
		},
	},
	about:
		"My name is Lighuen Miranda, I'm a Fullstack web developer graduated from the SoyHenry bootcamp and I'm very interested in working as a Frontend web Developer. My most notable skills are being patient and product focused, nothing is impossible as long as you have the will to try!",

	experience: [
		{
			title: "IT-TechGroup",
			date: "2021",
			description: "Front-End Developer.",
		},
	],
	education: [
		{
			title: "Henry Bootcamp",
			date: "2021",
			description: "Full-Stack Developer.",
		},
	],
	skills: [
		{
			title: "Technologies",
			description: [
				"ReactJS",
				"Javascript",
				"Typescript",
				"CSS3",
				"NextJS",
				"Sass",
				"Tailwind",
			],
		},
	],

	projects: [
		{
			tag: "PERN Stack",
			image:
				"https://thumbs.gfycat.com/HandyOccasionalGreathornedowl-size_restricted.gif",
			title: "Pokedex Project",
			caption: "Full-Stack",
			description:
				"Used technologies: Node.js, Sequelize, PostgreSQL, React, Redux and pure CSS.",
			links: [
				{
					link: "https://poke-app-spa.vercel.app",
					icon: LinkIcon,
					tag: "Website",
				},
				{
					link: "https://github.com/Salvapantallado/PokeApp-SPA",
					icon: GithubIcon,
					tag: "Repository",
				},
			],
		},
		{
			tag: "PERN Stack",
			image: "https://c.tenor.com/zoAruHO1nM8AAAAC/wine-red-wine.gif",
			title: "Wines Ecommerce",
			caption: "Full-Stack",
			description:
				"Used technologies: Node.js, Sequelize, PostgreSQL, React, Redux and Sass",
			links: [
				{
					link: "https://pf-vinos-ecommerce.vercel.app",
					icon: LinkIcon,
					tag: "Website",
				},
				{
					link: "https://github.com/Salvapantallado/PF-Vinos-Grupo14",
					icon: GithubIcon,
					tag: "Repository",
				},
			],
		},
		{
			tag: "Next JS",
			image: "https://c.tenor.com/Uk-R6moxzyQAAAAC/pirates-pirate.gif",
			title: "Crazy Pirates NFT's",
			caption: "Front-End",
			description:
				"Design and development of the Front-End using Next.js with Javascript and Tailwind.",
			links: [
				{ link: "https://crazypiratenft.com", icon: LinkIcon, tag: "Website" },
			],
		},
		{
			tag: "React JS",
			image: "https://www.ventastotales.com.uy/api/new/css/login-email.gif",
			title: "Log In template",
			caption: "Front-End",
			description:
				"Development of a log in website template done in ReactJS with pure CSS.",
			links: [
				{
					link: "https://loginapp-ky635ls1s-salvapantallado.vercel.app",
					icon: LinkIcon,
					tag: "Website",
				},
				{
					link: "https://github.com/Salvapantallado/loginapp",
					icon: GithubIcon,
					tag: "Repository",
				},
			],
		},
		{
			tag: "React JS",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/8/81/Portfolio_.gif",
			title: "Portfolio",
			caption: "Front-End",
			description:
				"Literally this very portfolio. Done in ReactJS with pure CSS",
			links: [
				{
					link: "https://lighuenm-portfolio.vercel.app",
					icon: LinkIcon,
					tag: "Website",
				},
				{
					link: "https://github.com/Salvapantallado/Portfolio",
					icon: GithubIcon,
					tag: "Repository",
				},
			],
		},
	],
};
