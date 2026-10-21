<script lang="ts">
	let { link } = $props();

	const goto = (url: string) => {
		window.open(url);
	};
</script>

<button
	type="button"
	class="card card-side cursor-pointer p-1 my-4 w-full"
	onclick={() => goto(link.url)}
>
	<div class="card-body flex-col w-110">
		<h2 class="card-title mt-0">{link.name}</h2>
		<figure class="w-full h-50">
			<img src={link.img} alt={link.name} />
		</figure>
		<div>
			<p class="text-start">{link.desc}</p>
			<div class="flex flex-row gap-2 justify-end flex-wrap">
				{#each link.tags as tag (tag)}
					<div class="badge badge-neutral">{tag}</div>
				{/each}
			</div>
		</div>
	</div>
</button>
