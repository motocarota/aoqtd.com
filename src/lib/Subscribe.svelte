<script lang="ts">
	const FORM_ACTION =
		'https://90e0dad7.sibforms.com/serve/MUIFAAPa9VTZtBeWOpLzuXAE9zncH2ZTxvpXrsDgM0wOvY9zIMfDu0lH8mVzFa2OWg0gVNCMb8YB8kJzbrIwiFlmNvLoujgCr__3b7R0OjHyZXGlCney0UsrXtWBK7nsLX8V3A-HuNSA6SoguQd3yMAh_h91SYpErkdyl-LCbaGEeIsjjooKQ2fFvCkA8A8P1FbEhlfn0sLhC5DoZw==';

	let { dialog = $bindable() }: { dialog?: HTMLDialogElement } = $props();

	let email = $state('');
	let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');

	async function onsubmit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'loading') return;
		status = 'loading';

		try {
			const response = await fetch(FORM_ACTION, {
				method: 'POST',
				body: new FormData(event.currentTarget as HTMLFormElement)
			});
			const result = await response.json().catch(() => ({}));

			if (response.ok && result.success !== false) {
				status = 'success';
				email = '';
			} else {
				status = 'error';
			}
		} catch {
			status = 'error';
		}
	}
</script>

<dialog bind:this={dialog} class="modal" onclose={() => (status = 'idle')}>
	<div class="modal-box max-w-xl bg-base-200 text-center">
		<form method="dialog">
			<button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Close">
				✕
			</button>
		</form>

		<h2 class="mt-0 mb-4">Another One Quest to Dust</h2>

		<img
			src="https://img.mailinblue.com/12011042/images/content_library/original/6ad9447bfb177910e1bf3b76.png"
			width="500"
			height="375"
			alt=""
			class="mx-auto mb-4 h-auto max-w-full"
		/>

		<div class="mb-4 space-y-1">
			<p>Subscribe to the newsletter to receive new page updates.</p>
			<p>No spam, no data sell, no other shady stuff.</p>
			<p><strong>Pinky promise.</strong></p>
		</div>

		{#if status === 'error'}
			<div role="alert" class="alert alert-error alert-soft mb-4 text-left">
				<span>
					There was an unexpected error so your subscription has not been activated. Please try
					again later.
				</span>
			</div>
		{:else if status === 'success'}
			<div role="alert" class="alert alert-success alert-soft mb-4 text-left">
				<span>Your subscription has been successfully registered! Welcome aboard!</span>
			</div>
		{/if}

		<form method="POST" action={FORM_ACTION} {onsubmit} class="flex flex-col gap-4">
			<label class="flex flex-col gap-1 text-left">
				<span class="font-ui text-sm font-bold">Your email address</span>
				<input
					class="input w-full"
					type="email"
					name="EMAIL"
					autocomplete="email"
					placeholder="EMAIL"
					required
					bind:value={email}
				/>
			</label>

			<!-- Honeypot: hidden from users, filled in by bots -->
			<input
				type="text"
				name="email_address_check"
				value=""
				class="hidden"
				tabindex="-1"
				autocomplete="off"
				aria-hidden="true"
			/>
			<input type="hidden" name="locale" value="it" />

			<button type="submit" class="btn btn-accent mx-auto" disabled={status === 'loading'}>
				{#if status === 'loading'}
					<span class="loading loading-spinner loading-sm"></span>
				{/if}
				Subscribe
			</button>
		</form>
	</div>

	<form method="dialog" class="modal-backdrop">
		<button aria-label="Close">close</button>
	</form>
</dialog>
