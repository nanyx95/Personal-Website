<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';
	import { data } from '$lib/data';

	const { skills } = data;
</script>

<Section title={skills.title}>
	{#each skills.categories as category}
		<Entry title={category.name} description={category.list} />
	{/each}
</Section>
