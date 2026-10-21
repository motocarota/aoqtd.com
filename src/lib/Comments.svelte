<script lang="ts">
	import { env } from '$env/dynamic/public';

	const { chapter, page } = $props();

	let container: HTMLDivElement;

	// Giscus renders inside an iframe created by its client script, so the
	// script is (re)injected on the client whenever the comic page changes.
	$effect(() => {
		const { PUBLIC_GISCUS_REPO_ID, PUBLIC_GISCUS_CATEGORY, PUBLIC_GISCUS_CATEGORY_ID } = env;
		if (!PUBLIC_GISCUS_REPO_ID || !PUBLIC_GISCUS_CATEGORY_ID) return;

		const term = `c${chapter}-p${page}`;

		const script = document.createElement('script');
		script.src = 'https://giscus.app/client.js';
		script.async = true;
		script.crossOrigin = 'anonymous';

		script.dataset.repo = env.PUBLIC_GISCUS_REPO ?? 'motocarota/aoqtd.com';
		script.dataset.repoId = PUBLIC_GISCUS_REPO_ID;
		script.dataset.category = PUBLIC_GISCUS_CATEGORY ?? '';
		script.dataset.categoryId = PUBLIC_GISCUS_CATEGORY_ID;
		script.dataset.mapping = 'specific';
		// Mapping is by term, not by domain: prefix it in dev so local tests
		// don't leak into the production threads.
		script.dataset.term = import.meta.env.DEV ? `dev-${term}` : term;
		script.dataset.strict = '0';
		script.dataset.reactionsEnabled = '1';
		script.dataset.emitMetadata = '0';
		script.dataset.inputPosition = 'top';
		script.dataset.theme = 'light';
		script.dataset.lang = 'en';
		script.dataset.loading = 'lazy';

		// The container has no Svelte-managed children, only the giscus iframe.
		/* eslint-disable svelte/no-dom-manipulating */
		container.replaceChildren(script);

		return () => container.replaceChildren();
		/* eslint-enable svelte/no-dom-manipulating */
	});
</script>

<section class="mt-4">
	<div
		class="divider divider-start text-base-content/30 text-xs font-ui tracking-widest uppercase my-0"
	>
		Comments
	</div>

	<div bind:this={container} class="mt-6"></div>
</section>
