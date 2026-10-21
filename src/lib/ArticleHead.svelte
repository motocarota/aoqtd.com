<script>
	let { publishedAt, title } = $props();

	const publishedDate = new Date(publishedAt);
	const dateFormatted = publishedDate.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	const dateIso = publishedDate.toISOString().split('T')[0];
</script>

<header class="flex items-baseline gap-3">
	<span class="font-ui text-xs tracking-widest uppercase text-base-content/40">
		{title}
	</span>
	<span class="text-base-content/20 select-none">·</span>
	<time datetime={dateIso} class="font-ui text-xs tracking-wider text-base-content/40">
		{dateFormatted}
	</time>
</header>
