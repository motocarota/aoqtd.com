<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { SITE_NAME, absoluteUrl } from '$lib/config';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title={SITE_NAME} href={absoluteUrl('/rss/')} />
</svelte:head>

<Header />
<div class="content">
	{@render children()}
</div>
<Footer />
