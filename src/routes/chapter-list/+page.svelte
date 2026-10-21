<script lang="ts">
	import ChapterCard from '$lib/ChapterCard.svelte';
	import Seo from '$lib/Seo.svelte';

	let { data } = $props();
</script>

<Seo
	title="Chapters"
	description="Browse all chapters of Another One Quest to Dust, a free webcomic updated (mostly) regularly."
/>

<h1>Chapters</h1>
{#each data.chapters as chapter (chapter)}
	<ChapterCard {chapter} />
{/each}
