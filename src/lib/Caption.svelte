<script lang="ts">
	const { caption } = $props();
</script>

{#if caption}
	<div class="alert alert-outline mt-6 flex gap-3 text-base-content/50 align-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="size-5 shrink-0 mt-0.5 text-primary/50"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="1.5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.43-1.05L3 21l1.26-4.26A7.93 7.93 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
			/>
		</svg>
		<p class="font-ui tracking-wide text-center">
			{caption}
		</p>
	</div>
{/if}
