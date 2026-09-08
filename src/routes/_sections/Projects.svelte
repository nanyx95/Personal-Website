<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';
	import List from '$lib/components/List.svelte';

	type Link = {
		href: string;
		text: string;
	};
	type Item = {
		name: string;
		description: string;
		links?: Link[];
	};
	type ProjectsData = {
		title: string;
		items: Item[];
	};

	interface Props {
		data: ProjectsData;
	}

	let { data: projects }: Props = $props();
</script>

<Section title={projects.title}>
	{#each projects.items as item (item.name)}
		<Entry title={item.name} description={item.description}>
			{#if item.links}
				<List items={item.links} />
			{/if}
		</Entry>
	{/each}
</Section>
