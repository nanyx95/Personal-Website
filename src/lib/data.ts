export const data = {
	header: {
		name: 'Fabio Somaglia, software engineer',
		description:
			"I'm a passionate Full Stack Engineer with a Computer Science degree and {yearsOfExperience} years of experience delivering impactful digital products for a variety of clients. I focus on building engaging user experiences and maintainable, scalable code. I hold AWS and Corda Blockchain certifications, and I'm currently exploring iOS development and emerging technologies.",
		resumeLink: '/Fabio_Somaglia_Resume.pdf',
		resumeText: 'Check out my Resume.'
	},
	workExperience: {
		title: 'Work Experience',
		jobs: [
			{
				company: 'Accenture',
				period: 'fall 2018–summer 2025',
				description:
					'Full Stack Engineer creating web applications used daily by thousands of people, supporting business operations and digital transformation.',
				tasks: [
					'Developed and optimized web apps in Angular, React, and Svelte for high-traffic environments',
					'Engineered scalable architectures with Spring Boot microservices',
					'Improved performance and reliability of legacy applications',
					'Implemented secure authentication and ensured compliance with data protection standards',
					'Mentored junior engineers and fostered a collaborative team culture'
				]
			}
		]
	},
	educationAndCertifications: {
		title: 'Education & Certifications',
		items: [
			{
				institution: 'University of Turin',
				period: '2015–2019',
				description:
					'Bachelor of Science in Computer Science, with coursework in AI, algorithms, security, and software engineering.'
			},
			{
				institution: 'Amazon Web Services certification',
				period: '2021 & 2024',
				description: 'AWS Certified Cloud Practitioner.'
			},
			{
				institution: 'R3 Corda blockchain certification',
				period: '2019',
				description: 'Corda Certified Developer.'
			}
		]
	},
	projects: {
		title: 'Projects',
		items: [
			{
				name: 'Stateful Button Component',
				description:
					'An open-source button component for React that provides clear visual feedback with full accessibility support for loading/progress, success, and error states during asynchronous operations.',
				links: [
					{ href: 'https://stateful-button.vercel.app', text: 'Live Demo' },
					{ href: 'https://github.com/nanyx95/Stateful-Button-React', text: 'Project on GitHub' }
				]
			},
			{
				name: 'The Story of Vito Bonanno',
				description:
					'A website built with Next.js, presenting the memories from the diary of my great-grandfather, Vito Bonanno (1896-1992).',
				links: [
					{ href: 'https://vitobonanno.fabiosomaglia.com', text: "Vito Bonanno's Website" },
					{ href: 'https://github.com/nanyx95/Vito-Bonanno', text: 'Project on GitHub' }
				]
			},
			{
				name: 'Personal Website',
				description:
					'My personal website, made with SvelteKit and Tailwind CSS, featuring a clean and minimalistic interface.',
				links: [{ href: 'https://github.com/nanyx95/Personal-Website', text: 'Project on GitHub' }]
			},
			{
				name: 'Typing Test App',
				description:
					'Typing speed test for iOS and web, featuring a native Swift/SwiftUI app and a responsive Angular frontend, powered by a shared Spring Boot backend.'
			},
			{
				name: 'Air Quality Alexa Skill',
				description:
					'Alexa Skill providing real-time air quality data using AWS Lambda and Node.js, helping users stay informed about local air conditions.'
			}
		]
	},
	skills: {
		title: 'Skills',
		categories: [
			{
				name: 'Languages',
				list: 'JavaScript, TypeScript, Java, HTML, CSS, SQL, Swift, and SwiftUI'
			},
			{
				name: 'Libraries & Frameworks',
				list: 'Angular, Svelte, SvelteKit, React, Next.js, Node.js, Tailwind CSS, Motion, Spring Boot, Prisma, and Cypress'
			},
			{
				name: 'Tools & Platforms',
				list: 'Git, GitHub, Netlify, Vercel, Docker, Jenkins, OpenShift, Apache Kafka, and Figma'
			},
			{
				name: 'Interests',
				list: 'iOS Dev, UI/UX design, AI, and Blockchain'
			}
		]
	},
	elsewhere: {
		title: 'Elsewhere',
		description: 'Connect with me on professional platforms and explore my work.',
		links: [
			{ href: '/Fabio_Somaglia_Resume.pdf', text: 'Resume' },
			{ href: 'https://linkedin.com/in/fabio-somaglia', text: 'LinkedIn' },
			{ href: 'https://github.com/nanyx95', text: 'GitHub' }
		]
	}
};
