<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE_SHORT_NAME } from '$lib/config';

	const links = [
		{ href: resolve('/'), label: 'Home' },
		{ href: resolve('/about'), label: 'About' },
		{ href: resolve('/chars'), label: 'Characters' },
		{ href: resolve('/chapter-list'), label: 'Chapters' },
		{ href: resolve('/join'), label: 'Join the party' },
		{ href: resolve('/links'), label: 'Cool stuff' }
	];
</script>

<div class="bg-white w-screen pt-6">
	<div class="text-center">
		<a href={resolve('/')}>
			<img src="/banner.png" alt={SITE_SHORT_NAME} class="mx-auto w-auto max-w-100 max-w-full" />
		</a>
	</div>
	<nav class="border-base-300 border-t">
		<ul class="flex flex-wrap justify-center gap-4 p-3">
			{#each links as item (item.href)}
				<li>
					<a href={item.href} class="text-xs">
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
