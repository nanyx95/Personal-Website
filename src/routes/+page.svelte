<script lang="ts">
	import Header from './_sections/Header.svelte';
	import WorkExperience from './_sections/WorkExperience.svelte';
	import EducationAndCertifications from './_sections/EducationAndCertifications.svelte';
	import Projects from './_sections/Projects.svelte';
	import Skills from './_sections/Skills.svelte';
	import Elsewhere from './_sections/Elsewhere.svelte';
	import Footer from './_sections/Footer.svelte';

	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const startYear = 2018;
	const startMonth = 8;
	let yearsOfExperience = $state(currentYear - startYear);
	if (currentMonth < startMonth) {
		yearsOfExperience--;
	}
</script>

<div class="px-4">
	<main class="mx-auto w-full max-w-2xl py-12 sm:py-16">
		<div class="prose prose-neutral prose-a:text-inherit prose-hr:my-10">
			<Header {yearsOfExperience} />
			<hr class="border-neutral-200" />
			<WorkExperience />
			<hr class="border-neutral-200" />
			<EducationAndCertifications />
			<hr class="border-neutral-200" />
			<Projects />
			<hr class="border-neutral-200" />
			<Skills />
			<hr class="border-neutral-200" />
			<Elsewhere />
		</div>
	</main>

	<Footer {currentYear} />
</div>
