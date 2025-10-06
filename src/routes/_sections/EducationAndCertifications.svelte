<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';

	type Item = {
		institution: string;
		period: string;
		description: string;
	};
	type EduCertsProps = {
		title: string;
		items: Item[];
	};

	let { data: eduCerts }: { data: EduCertsProps } = $props();
</script>

<Section title={eduCerts.title}>
	{#each eduCerts.items as item}
		<Entry title={item.institution} date={item.period} description={item.description} />
	{/each}
</Section>
