<script lang="ts">
	const { chapter: c } = $props();
</script>

<div class="card card-side bg-white shadow-md mx-auto my-4 flex-wrap">
	<figure>
		<img src={c.img} alt={c.title} />
	</figure>
	<div class="card-body w-1/2">
		<h2 class="card-title">{c.title}</h2>
		<p>{c.desc}</p>
		<div class="card-actions justify-end">
			<a href={c.url} class="btn btn-primary">Open</a>
		</div>
	</div>
</div>
