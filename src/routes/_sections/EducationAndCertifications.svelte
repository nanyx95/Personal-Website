<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';

	type Item = {
		institution: string;
		period: string;
		description: string;
	};
	type EduCertsData = {
		title: string;
		items: Item[];
	};

	interface Props {
		data: EduCertsData;
	}

	let { data: eduCerts }: Props = $props();
</script>

<Section title={eduCerts.title}>
	{#each eduCerts.items as item (item.institution)}
		<Entry title={item.institution} date={item.period} description={item.description} />
	{/each}
</Section>
