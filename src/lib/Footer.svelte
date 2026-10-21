<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE_NAME } from '$lib/config';

	const year = new Date().getFullYear();

	const links = [
		{ href: resolve('/'), label: 'Home' },
		{ href: resolve('/chapter-list'), label: 'Chapters' },
		{ href: resolve('/about'), label: 'About' },
		{ href: resolve('/join'), label: 'Join the party' },
		{ href: resolve('/links'), label: 'Cool stuff' },
		{ href: resolve('/license'), label: 'License' },
		{ href: resolve('/privacy'), label: 'Privacy' }
	];
</script>

<div class="divider divider-primary mx-auto max-w-3xl opacity-30 my-0"></div>

<footer
	class="footer footer-center bg-base-100 text-base-content pt-8 pb-2 px-4 gap-10 flex flex-col"
>
	<!-- Nav links -->
	<nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
		{#each links as link (link.href)}
			<a
				href={link.href}
				class="link link-hover font-ui text-xs tracking-widest uppercase text-base-content/60 hover:text-primary transition-colors"
			>
				{link.label}
			</a>
		{/each}
	</nav>

	<!-- Copyright -->
	<aside>
		<p class="font-ui text-xs tracking-wider uppercase text-base-content/40">
			{SITE_NAME} &copy; {year} Simone Poggi &mdash;
			<a href={resolve('/license')} class="link link-hover hover:text-primary transition-colors">
				CC BY-NC-ND 4.0
			</a>
		</p>
	</aside>
</footer>
