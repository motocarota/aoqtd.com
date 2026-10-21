<script lang="ts">
	import NavigationButton from './NavigationButton.svelte';

	let { prevSlug, nextSlug } = $props();
</script>

<nav aria-label="Comic navigation" class="flex items-center justify-center py-4 gap-2 flex-wrap">
	<NavigationButton label="First" to="/c1-p0" key="f">
		<path stroke-linecap="round" stroke-linejoin="round" d="M9 19l-7-7 7-7" />
		<path stroke-linecap="round" stroke-linejoin="round" d="M16 19l-7-7 7-7" />
	</NavigationButton>

	<NavigationButton label="Prev" to={prevSlug} key="ArrowLeft">
		<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
	</NavigationButton>

	<NavigationButton label="Chapters" to="/chapter-list" key="c" />

	<NavigationButton label="Next" to={nextSlug} reverse key="ArrowRight">
		<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
	</NavigationButton>

	<NavigationButton label="Latest" to="/" reverse key="l">
		<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
		<path stroke-linecap="round" stroke-linejoin="round" d="M16 5l7 7-7 7" />
	</NavigationButton>
</nav>
