<script lang="ts">
	import ComicPage from '$lib/ComicPage.svelte';

	let { data } = $props();
</script>

<ComicPage {...data} />
