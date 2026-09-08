<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';
	import List from '$lib/components/List.svelte';

	type Link = {
		href: string;
		text: string;
	};
	type ElsewhereData = {
		title: string;
		description: string;
		links: Link[];
	};

	interface Props {
		data: ElsewhereData;
	}

	let { data: elsewhere }: Props = $props();
</script>

<Section title={elsewhere.title}>
	<Entry description={elsewhere.description}>
		<List items={elsewhere.links} />
	</Entry>
</Section>
