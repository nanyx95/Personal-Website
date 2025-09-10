<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';
	import List from '$lib/components/List.svelte';
	import { data } from '$lib/data';

	const { workExperience } = data;
</script>

<Section title={workExperience.title}>
	{#each workExperience.jobs as job}
		<Entry title={job.company} date={job.period} description={job.description}>
			<List items={job.tasks} />
		</Entry>
	{/each}
</Section>
