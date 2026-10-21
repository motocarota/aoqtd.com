<script lang="ts">
	import Subscribe from '$lib/Subscribe.svelte';

	let dialog = $state<HTMLDialogElement>();
</script>

<button
	type="button"
	class="btn fixed right-4 bottom-4 z-40 gap-2 rounded-full border-0 bg-[#ff8a2a] px-6 text-white shadow-lg hover:bg-[#f07a18] sm:right-6 sm:bottom-6"
	onclick={() => dialog?.showModal()}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.8"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="size-5"
		aria-hidden="true"
	>
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="m3 7 9 6 9-6" />
	</svg>
	Subscribe
</button>

<Subscribe bind:dialog />
