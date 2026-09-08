<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section>
	<h2 class="mb-4 font-sans text-section-header text-neutral-500 uppercase font-stretch-75%">{title}</h2>
	{@render children()}
</section>
