<script lang="ts">
	import Bookmark from '$lib/Bookmark.svelte';
	import Seo from '$lib/Seo.svelte';
	import { data, type Link } from '$lib/data/cool-stuff.js';

	let s = $state({});

	const select = (link: Link) => {
		s = link;
		// @ts-expect-error shutup, magic
		my_modal_1.showModal();
	};

	// 'comics', 'webcomics', 'games', 'movies'
	const sections: (keyof typeof data)[] = ['webcomics'];
</script>

<Seo
	title="Cool Stuff"
	description="A curated list of webcomics, games and other hidden gems worth checking out."
/>

<h1>Cool Stuff</h1>

<p>Life is short and there are a ton of hidden gems there waiting to be discovered.</p>
<p>
	These are the ones I've found in no particular order.
	<br />
	<b>Keep in mind that I get nothing from anyone to put stuff here</b>, it's just me sharing
	something I genuinely enjoyed reading/watching, no ads, no favors, no paid shills.
	<br />
	<bb>If you are an author that want to see his stuff on this list</bb>, then you have to roll your
	sleeves and show me what you've got.
	<br />
	Enjoy!
</p>

<div class="flex flex-row flex-wrap gap-4">
	{#each sections as s (s)}
		<div class="menu bg-base-200 rounded-box w-80">
			<h2 class="menu-title capitalize">{s}</h2>
			<ul class="pl-4">
				{#each data[s] as l (l.url)}
					<li><button type="button" onclick={() => select(l)}>{l.name}</button></li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<dialog id="my_modal_1" class="modal">
	<div class="modal-box">
		{#if s}
			<Bookmark link={s} />
		{/if}
		<div class="modal-action">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>
