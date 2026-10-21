<script>
	const { chapter, page } = $props();

	// TODO fetch comments from idb
	const comments = [
		{
			author: 'Anonimous Nerd',
			time: '2 hours ago',
			body: 'That count has zero chill and I love it.'
		},
		{ author: 'DungeonEnjoyer42', time: '5 hours ago', body: 'Poor DM. As always.' }
	];

	// svelte-ignore state_referenced_locally
	console.log('fetching commments for ', chapter, page);
</script>

<section class="mt-4">
	<div
		class="divider divider-start text-base-content/30 text-xs font-ui tracking-widest uppercase my-0"
	>
		Comments
	</div>

	<ul class="mt-6 flex flex-col gap-4">
		{#each comments as comment (comment.time)}
			<li class="flex gap-3">
				<!-- Avatar placeholder -->
				<div class="avatar avatar-placeholder">
					<div class="bg-neutral text-neutral-content rounded-full size-8 shrink-0">
						<span class="font-ui text-xs">{comment.author[0]}</span>
					</div>
				</div>
				<div class="flex flex-col gap-0.5">
					<div class="flex items-baseline gap-2">
						<span class="font-ui text-xs font-semibold tracking-wide text-base-content/80">
							{comment.author}
						</span>
						<span class="font-ui text-xs text-base-content/30">{comment.time}</span>
					</div>
					<p class="text-sm text-base-content/70 leading-relaxed">{comment.body}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
