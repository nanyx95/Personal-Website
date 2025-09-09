<script lang="ts">
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const startYear = 2018;
	const startMonth = 8;
	let yearsOfExperience = $state(currentYear - startYear);
	if (currentMonth < startMonth) {
		yearsOfExperience--;
	}
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Fabio Somaglia</title>
	<meta name="title" content="Fabio Somaglia" />
	<meta
		name="description"
		content="Fabio Somaglia is a Full Stack Developer with 7 years of experience building high-impact web applications for thousands of users, specializing in robust scalable products and clean code."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fabiosomaglia.com" />
	<meta property="og:title" content="Fabio Somaglia ･ Full Stack Developer" />
	<meta
		property="og:description"
		content="Full Stack Developer with 7 years of experience delivering high-impact web applications for thousands of users. Passionate about robust scalable products and clean code."
	/>
	<meta property="og:image" content="https://fabiosomaglia.com/og.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://fabiosomaglia.com" />
	<meta property="twitter:title" content="Fabio Somaglia ･ Full Stack Developer" />
	<meta
		property="twitter:description"
		content="Full Stack Developer with 7 years of experience delivering high-impact web applications for thousands of users. Passionate about robust scalable products and clean code."
	/>
	<meta property="twitter:image" content="https://fabiosomaglia.com/og.png" />
</svelte:head>

{#snippet bullet(item: any)}
	<li class="ml-2 list-['–'] pl-2 text-description marker:text-neutral-350">
		{#if typeof item === 'object' && item.href}
			<a
				href={item.href}
				target="_blank"
				rel="noopener noreferrer"
				class="font-normal underline decoration-neutral-300 underline-offset-2 transition-[text-decoration-color] duration-75 hover:decoration-neutral-400"
			>
				{item.text}
			</a>
		{:else}
			{item}
		{/if}
	</li>
{/snippet}

<div class="flex min-h-screen flex-col items-center bg-neutral-50 text-neutral-900">
	<main class="w-full max-w-2xl px-4 py-12 font-serif sm:py-16">
		<!-- Header -->
		<header class="mb-10">
			<h1 class="mb-3 font-sans text-title text-balance font-stretch-95%">Fabio Somaglia, software engineer</h1>
			<p class="max-w-xl text-subtitle text-pretty text-neutral-600">
				I'm a passionate Full Stack Developer with a Computer Science degree and {yearsOfExperience} years of experience
				delivering impactful digital products for a variety of clients. I focus on building engaging user experiences and
				maintainable, scalable code. I hold AWS and Corda Blockchain certifications, and I'm currently exploring iOS development
				and emerging technologies.
				<a
					href="/Resume_Fabio_Somaglia.pdf"
					target="_blank"
					class="inline-block font-normal underline decoration-neutral-300 underline-offset-2 transition-[text-decoration-color] duration-75 hover:decoration-neutral-400"
					aria-label="Open resume in new tab"
				>
					Check out my Resume.
				</a>
			</p>
		</header>

		<hr class="mb-10 border-neutral-200" />

		<!-- Work Experience -->
		<section class="prose mb-10 prose-neutral prose-a:text-inherit">
			<h2 class="mb-4 font-sans text-section-header text-neutral-500 uppercase font-stretch-75%">Work Experience</h2>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Accenture</div>
				<span class="ml-0.5 align-baseline font-serif text-date text-neutral-500 italic">fall 2018–summer 2025</span>
				<br />
				<div class="text-description">
					Full Stack Developer creating web applications used daily by thousands of people, supporting business
					operations and digital transformation.
				</div>
				<ul class="mt-2 space-y-1 pl-0">
					{@render bullet('Developed and optimized web apps in Angular and Svelte for high-traffic environments')}
					{@render bullet('Engineered scalable architectures with Spring Boot microservices')}
					{@render bullet('Improved performance and reliability of legacy applications')}
					{@render bullet('Implemented secure authentication and ensured compliance with data protection standards')}
					{@render bullet('Mentored junior developers and fostered a collaborative team culture')}
				</ul>
			</div>
		</section>

		<hr class="mb-10 border-neutral-200" />

		<!-- Education & Certifications -->
		<section class="prose mb-10 prose-neutral prose-a:text-inherit">
			<h2 class="mb-4 font-sans text-section-header text-neutral-500 uppercase font-stretch-75%">
				Education & Certifications
			</h2>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">University of Turin</div>
				<span class="ml-0.5 align-baseline font-serif text-date text-neutral-500 italic">2015–2019</span>
				<br />
				<div class="text-description">
					Bachelor of Science in Computer Science, with coursework in AI, algorithms, security, and software
					engineering.
				</div>
			</div>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Amazon Web Services certification</div>
				<span class="ml-0.5 align-baseline font-serif text-date text-neutral-500 italic">2021 & 2024</span>
				<br />
				<div class="text-description">AWS Certified Cloud Practitioner.</div>
			</div>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">R3 Corda blockchain certification</div>
				<span class="ml-0.5 align-baseline font-serif text-date text-neutral-500 italic">2019</span>
				<br />
				<div class="text-description">Corda Certified Developer.</div>
			</div>
		</section>

		<hr class="mb-10 border-neutral-200" />

		<!-- Projects -->
		<section class="prose mb-10 prose-neutral prose-a:text-inherit">
			<h2 class="mb-4 font-sans text-section-header text-neutral-500 uppercase font-stretch-75%">Projects</h2>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Stateful Button Component</div>
				<br />
				<div class="text-description">
					An open-source button component for React that provides clear visual feedback with full accessibility support
					for loading/progress, success, and error states during asynchronous operations.
				</div>
				<ul class="mt-2 grid grid-cols-2 pl-0">
					{@render bullet({ href: 'https://stateful-button.vercel.app', text: 'Live Demo' })}
					{@render bullet({
						href: 'https://github.com/nanyx95/Stateful-Button-React',
						text: 'Project on GitHub'
					})}
				</ul>
			</div>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">The Story of Vito Bonanno</div>
				<br />
				<div class="text-description">
					A website built with Next.js, presenting the memories from the diary of my great-grandfather, Vito Bonanno
					(1896-1992).
				</div>
				<ul class="mt-2 grid grid-cols-2 pl-0">
					{@render bullet({ href: 'https://vitobonanno.fabiosomaglia.com', text: "Vito Bonanno's Website" })}
					{@render bullet({
						href: 'https://github.com/nanyx95/Vito-Bonanno',
						text: 'Project on GitHub'
					})}
				</ul>
			</div>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Typing Test App</div>
				<br />
				<div class="text-description">
					Typing speed test for iOS and web, featuring a native Swift/SwiftUI app and a responsive Angular frontend,
					powered by a shared Spring Boot backend.
				</div>
			</div>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Air Quality Alexa Skill</div>
				<br />
				<div class="text-description">
					Alexa Skill providing real-time air quality data using AWS Lambda and Node.js, helping users stay informed
					about local air conditions.
				</div>
			</div>
		</section>

		<hr class="mb-10 border-neutral-200" />

		<!-- Skills -->
		<section class="prose mb-10 prose-neutral prose-a:text-inherit">
			<h2 class="mb-4 font-sans text-section-header text-neutral-500 uppercase font-stretch-75%">Skills</h2>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Languages</div>
				<br />
				<div class="text-description">JavaScript, TypeScript, Java, HTML, CSS, SQL, Swift, and SwiftUI</div>
			</div>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Libraries & Frameworks</div>
				<br />
				<div class="text-description">
					Angular, Svelte, SvelteKit, React, Next.js, Node.js, Tailwind CSS, Motion, Spring Boot, Prisma, and Cypress
				</div>
			</div>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Tools & Platforms</div>
				<br />
				<div class="text-description">
					Git, GitHub, Netlify, Vercel, Docker, Jenkins, OpenShift, Apache Kafka, Jenkins, and Figma
				</div>
			</div>
			<div class="mb-6">
				<div class="inline font-sans text-company font-stretch-90%">Interests</div>
				<br />
				<div class="text-description">iOS Dev, UI/UX design, AI, and Blockchain</div>
			</div>
		</section>

		<hr class="mb-10 border-neutral-200" />

		<!-- Elsewhere -->
		<section class="prose mb-10 prose-neutral prose-a:text-inherit">
			<h2 class="mb-4 font-sans text-section-header text-neutral-500 uppercase font-stretch-75%">Elsewhere</h2>
			<div class="text-description">Connect with me on professional platforms and explore my work.</div>
			<ul class="mt-2 space-y-1 pl-0">
				{@render bullet({ href: '/Resume_Fabio_Somaglia.pdf', text: 'Resume' })}
				{@render bullet({ href: 'https://linkedin.com/in/fabio-somaglia', text: 'LinkedIn' })}
				{@render bullet({ href: 'https://github.com/nanyx95', text: 'GitHub' })}
			</ul>
		</section>
	</main>

	<!-- Footer -->
	<footer class="mt-auto w-full py-8 font-serif text-xs leading-normal tracking-tight text-neutral-500">
		<div class="mx-auto max-w-2xl px-4">© {currentYear} Fabio Somaglia. All rights reserved.</div>
	</footer>
</div>
