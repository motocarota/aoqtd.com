<script lang="ts">
	const { chapter, page } = $props();

	// svelte-ignore state_referenced_locally
	console.log('fetching likes for ', chapter, page);

	type Vote = 'like' | 'dislike' | null;
	let vote: Vote = $state(null);
	let likes = $state(42);
	let dislikes = $state(3);

	function castVote(v: Vote) {
		if (vote === v) {
			// deselect
			if (v === 'like') likes--;
			else dislikes--;
			vote = null;
		} else {
			// switch or first vote
			if (vote === 'like') likes--;
			if (vote === 'dislike') dislikes--;
			vote = v;
			if (v === 'like') likes++;
			else dislikes++;
		}
	}

	// TODO fetch likes/dislikes from idb
</script>

<div class="flex items-center gap-2 mx-auto" aria-label="Rate this page">
	<!-- Like -->
	<button
		class="btn btn-lg text-white {vote === 'like' ? 'bg-[#50ce50]' : 'bg-[#FF9900]'}"
		onclick={() => castVote('like')}
		aria-pressed={vote === 'like'}
		aria-label="Like"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="size-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"
			/>
		</svg>
		<span class="font-ui text-sm tabular-nums px-3">{likes}</span>
	</button>

	<!-- Dislike -->
	<button
		class="btn btn-lg text-white {vote === 'dislike' ? 'bg-[#db3737]' : 'bg-[#FF9900]'}"
		onclick={() => castVote('dislike')}
		aria-pressed={vote === 'dislike'}
		aria-label="Dislike"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="size-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"
			/>
		</svg>
		<span class="font-ui text-sm tabular-nums px-3">{dislikes}</span>
	</button>

	<span class="flex-1"></span>
</div>
