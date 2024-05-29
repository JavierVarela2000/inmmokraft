<!-- // src/routes/auth/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<form class=" pt-32" method="POST" action="?/login">
	{#if form?.missing}<p class="error">The email field is required</p>{/if}
	{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
	<label>
		Email
		<input class="border" name="email" type="email" value={form?.email ?? ''} />
	</label>
	<label>
		Password
		<input class="border" name="password" type="password" />
	</label>
	<button>Log in</button>
</form>
