<script lang="ts">
	import type { PageProps } from './$types';
	import Header from './_sections/Header.svelte';
	import WorkExperience from './_sections/WorkExperience.svelte';
	import EducationAndCertifications from './_sections/EducationAndCertifications.svelte';
	import Projects from './_sections/Projects.svelte';
	import Skills from './_sections/Skills.svelte';
	import Elsewhere from './_sections/Elsewhere.svelte';
	import Footer from './_sections/Footer.svelte';

	let { data }: PageProps = $props();
</script>

<div class="flex justify-center px-4">
	<div class="prose prose-neutral prose-a:text-inherit prose-hr:my-10">
		<main class="py-12 sm:py-16">
			<Header data={data.header} />
			<hr class="border-neutral-200" />
			<WorkExperience data={data.workExperience} />
			<hr class="border-neutral-200" />
			<EducationAndCertifications data={data.educationAndCertifications} />
			<hr class="border-neutral-200" />
			<Projects data={data.projects} />
			<hr class="border-neutral-200" />
			<Skills data={data.skills} />
			<hr class="border-neutral-200" />
			<Elsewhere data={data.elsewhere} />
		</main>
		<Footer data={data.currentYear} />
	</div>
</div>
