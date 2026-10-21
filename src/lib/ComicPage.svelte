<script lang="ts">
	import ComicNavigation from '$lib/ComicNavigation.svelte';
	import Comments from '$lib/Comments.svelte';
	import LikeDislike from '$lib/LikeDislike.svelte';
	import Caption from './Caption.svelte';
	import Seo from '$lib/Seo.svelte';

	const {
		chapter = 0,
		page = 0,
		prevSlug = null,
		nextSlug = null,
		imageUrl: enImageUrl = '',
		title = '',
		caption = ''
	} = $props();

	// Frontend-only hack: the comic pages ship an english and an italian
	// variant of each image. Swap client-side only, after hydration, so
	// the prerendered HTML never bakes in a language choice (the `browser`
	// check keeps `navigator` out of SSR/prerender entirely).
	let imageUrl = $derived(
		navigator?.language.startsWith('it') ? enImageUrl.replace('aoqtd-en-', 'aoqtd-it-') : enImageUrl
	);
</script>

<Seo
	title={`Chapter ${chapter}, page ${page}`}
	description={caption || `Chapter ${chapter}, page ${page} of Another One Quest to Dust.`}
	image={enImageUrl}
	type="article"
/>

<article class="w-full max-w-175 flex flex-col">
	<h1>Chapter: {chapter} Page: {page}</h1>

	<a href={nextSlug}>
		<figure class="m-0">
			<img
				id="comic-page"
				src={imageUrl}
				alt={caption ?? title}
				width={700}
				fetchpriority="high"
				class="w-full h-auto border border-base-300"
			/>
		</figure>
	</a>

	<ComicNavigation {prevSlug} {nextSlug} />
	<LikeDislike {chapter} {page} />
	<Caption {caption} />
	<Comments {chapter} {page} />
</article>
