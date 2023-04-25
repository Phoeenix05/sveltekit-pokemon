<script lang="ts">

	import PokemonCard from '../components/PokemonCard.svelte';

    import { goto } from '$app/navigation';
	import { Button, TextInput } from '@svelteuidev/core';

	let name = '';

	// Add name validation. [a-zA-Z] or [0-9] all names and numbers (IDs) should be accepted
	const open = () => goto('/pokemon/' + name.toLowerCase())

	import type { PageData } from "./$types";
    export let data: PageData
	const { results } = data.data

</script>

<div class="flex items-center justify-center h-32">
	<TextInput placeholder="Name or ID" bind:value={name} on:change={open} />
	<Button on:click={open} class="ml-2">Search</Button>
</div>
<!-- <form action={() => open("pikachu")} method="get" class="flex items-center justify-center h-32 gap-2">
	<TextInput type="text" placeholder="Name or ID" bind:value={name}/>
	<Button>Search</Button>
</form> -->

<div class="flex flex-row flex-wrap justify-center">
	{#each results as { name, url }}
		<PokemonCard {name} id={url.split("/")[6]} />
	{/each}
</div>