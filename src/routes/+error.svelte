<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Seo from '$lib/Seo.svelte';
</script>

<Seo
	title={`${page.status} — Not found`}
	description="This page could not be found on Another One Quest to Dust."
/>

<div class="flex flex-col items-center justify-center text-center gap-4 py-24">
	<h1 class="text-6xl font-bold">{page.status}</h1>
	<p class="text-lg text-base-content/70">
		{page.error?.message ?? 'Something went wrong.'}
	</p>
	<a href={resolve('/chapter-list')} class="btn btn-primary">Back to the comic</a>
</div>
