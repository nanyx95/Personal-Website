<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';

	type Category = {
		name: string;
		list: string;
	};
	type SkillsProps = {
		title: string;
		categories: Category[];
	};

	let { data: skills }: { data: SkillsProps } = $props();
</script>

<Section title={skills.title}>
	{#each skills.categories as category}
		<Entry title={category.name} description={category.list} />
	{/each}
</Section>
