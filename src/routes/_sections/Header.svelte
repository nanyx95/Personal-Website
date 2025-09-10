<script lang="ts">
	import { data } from '$lib/data';

	let { yearsOfExperience }: { yearsOfExperience: number } = $props();
	const { header } = data;
</script>

<header>
	<h1 class="-mb-2 font-sans text-title text-balance font-stretch-95%">{header.name}</h1>
	<p class="text-subtitle text-pretty text-neutral-600">
		{header.description.replace('{yearsOfExperience}', yearsOfExperience.toString())}
		<a
			href={header.resumeLink}
			target="_blank"
			class="inline-block font-normal underline decoration-neutral-300 decoration-1 underline-offset-2 transition-[text-decoration-color] duration-75 hover:decoration-neutral-400"
			aria-label="Open resume in new tab"
		>
			{header.resumeText}
		</a>
	</p>
</header>
