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
	type ProjectsProps = {
		title: string;
		items: Item[];
	};

	let { data: projects }: { data: ProjectsProps } = $props();
</script>

<Section title={projects.title}>
	{#each projects.items as item}
		<Entry title={item.name} description={item.description}>
			{#if item.links}
				<List items={item.links} />
			{/if}
		</Entry>
	{/each}
</Section>
