<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Fabio Somaglia</title>
	<meta
		name="description"
		content="Fabio Somaglia is a Software Engineer with 7 years of experience building high-impact web applications for thousands of users, specializing in robust scalable products and clean code."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fabiosomaglia.com" />
	<meta property="og:title" content="Fabio Somaglia ･ Full Stack Engineer" />
	<meta
		property="og:description"
		content="Full Stack Engineer with 7 years of experience delivering high-impact web applications for thousands of users. Passionate about robust scalable products and clean code."
	/>
	<meta property="og:image" content="https://fabiosomaglia.com/og.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://fabiosomaglia.com" />
	<meta property="twitter:title" content="Fabio Somaglia ･ Full Stack Engineer" />
	<meta
		property="twitter:description"
		content="Full Stack Engineer with 7 years of experience delivering high-impact web applications for thousands of users. Passionate about robust scalable products and clean code."
	/>
	<meta property="twitter:image" content="https://fabiosomaglia.com/og.png" />
</svelte:head>

{@render children()}
