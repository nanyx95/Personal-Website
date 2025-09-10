<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<section>
	<h2 class="mb-4 font-sans text-section-header text-neutral-500 uppercase font-stretch-75%">{title}</h2>
	{@render children()}
</section>
