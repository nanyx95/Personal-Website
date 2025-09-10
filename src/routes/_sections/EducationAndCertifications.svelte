<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';
	import { data } from '$lib/data';

	const { educationAndCertifications: eduCerts } = data;
</script>

<Section title={eduCerts.title}>
	{#each eduCerts.items as item}
		<Entry title={item.institution} date={item.period} description={item.description} />
	{/each}
</Section>
