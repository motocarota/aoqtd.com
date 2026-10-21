<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	let { to, label, children = null, reverse = false, key = null } = $props();

	function navigateTo(url?: string) {
		if (url) {
			goto(resolve(url as Pathname & '/'));
		}
	}

	function handleKeydown(event: { key: unknown; preventDefault: () => void }) {
		if (event.key === key) {
			event.preventDefault();
			navigateTo(to);
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />
<button
	type="button"
	onkeydown={(event) => console.log('Key pressed:', event.key)}
	onclick={() => navigateTo(to)}
	aria-disabled={!to}
	class="btn btn-lg text-sm bg-[#FF9900] text-white font-ui tracking-widest uppercase gap-2 p-4 flex {reverse
		? 'flex-row-reverse'
		: 'flex-row'} {!to ? 'btn-disabled opacity-30' : ''}"
>
	{#if !!children}
		<svg
			fill="none"
			class="size-4"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			{@render children?.()}
		</svg>
	{/if}
	<span class="max-md:hidden">
		{label}
	</span>
</button>
