<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';
	import List from '$lib/components/List.svelte';

	type Job = {
		company: string;
		period: string;
		description: string;
		tasks: string[];
	};
	type WorkExperienceData = {
		title: string;
		jobs: Job[];
	};

	interface Props {
		data: WorkExperienceData;
	}

	let { data: workExperience }: Props = $props();
</script>

<Section title={workExperience.title}>
	{#each workExperience.jobs as job (job.company)}
		<Entry title={job.company} date={job.period} description={job.description}>
			<List items={job.tasks} />
		</Entry>
	{/each}
</Section>
