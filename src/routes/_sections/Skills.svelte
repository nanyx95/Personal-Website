<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';

	type Category = {
		name: string;
		list: string;
	};
	type SkillsData = {
		title: string;
		categories: Category[];
	};

	interface Props {
		data: SkillsData;
	}

	let { data: skills }: Props = $props();
</script>

<Section title={skills.title}>
	{#each skills.categories as category (category.name)}
		<Entry title={category.name} description={category.list} />
	{/each}
</Section>
