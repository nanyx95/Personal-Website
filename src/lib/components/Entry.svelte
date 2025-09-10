<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		date,
		description,
		children
	}: { title?: string; date?: string; description?: string; children?: Snippet } = $props();
</script>

<div class="mb-6 last:mb-0">
	{#if title}
		<div class="inline font-sans text-company font-stretch-90%">{title}</div>
	{/if}
	{#if date}
		<span class="ml-0.5 align-baseline font-serif text-date text-neutral-500 italic">{date}</span>
	{/if}
	{#if description}
		<div class="text-description">{description}</div>
	{/if}
	{@render children?.()}
</div>
