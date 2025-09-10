<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Entry from '$lib/components/Entry.svelte';
	import List from '$lib/components/List.svelte';
	import { data } from '$lib/data';

	const { elsewhere } = data;
</script>

<Section title={elsewhere.title}>
	<Entry description={elsewhere.description}>
		<List items={elsewhere.links} />
	</Entry>
</Section>
