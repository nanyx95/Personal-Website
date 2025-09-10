<script lang="ts">
	let { currentYear }: { currentYear: number } = $props();
</script>

<footer class="py-8 text-xs leading-normal tracking-tight text-neutral-500">
	<div class="mx-auto w-full max-w-2xl">
		<p>© {currentYear} Fabio Somaglia. All rights reserved.</p>
	</div>
</footer>
