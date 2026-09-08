<script lang="ts">
	interface Props {
		data: number;
	}

	let { data: currentYear }: Props = $props();
</script>

<footer class="py-4 text-xs leading-normal tracking-tight text-neutral-500">
	<p>© {currentYear} Fabio Somaglia. All rights reserved.</p>
</footer>
