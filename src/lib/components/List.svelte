<script lang="ts">
	type ListItem = string | { href: string; text: string };

	let { items }: { items: ListItem[] } = $props();
</script>

<ul class="mt-2 space-y-1 pl-0">
	{#each items as item}
		<li class="ml-2 list-['–'] pl-2 text-description marker:text-neutral-350">
			{#if typeof item === 'object'}
				<a
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
					class="font-normal underline decoration-neutral-300 decoration-1 underline-offset-2 transition-[text-decoration-color] duration-75 hover:decoration-neutral-400"
				>
					{item.text}
				</a>
			{:else}
				{item}
			{/if}
		</li>
	{/each}
</ul>
