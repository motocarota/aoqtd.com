<script lang="ts">
	import { page } from '$app/state';
	import { SITE_NAME, DEFAULT_DESCRIPTION, absoluteUrl } from '$lib/config';

	const {
		title,
		description = DEFAULT_DESCRIPTION,
		image = '/banner.png',
		type = 'website'
	}: {
		title?: string;
		description?: string;
		image?: string;
		type?: string;
	} = $props();

	const fullTitle = $derived(title ? `${title} — ${SITE_NAME}` : SITE_NAME);
	const canonicalUrl = $derived(absoluteUrl(page.url.pathname));
	const imageUrl = $derived(image.startsWith('http') ? image : absoluteUrl(image));
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:url" content={canonicalUrl} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
