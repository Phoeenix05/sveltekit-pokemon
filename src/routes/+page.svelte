<script lang="ts">

	import PokemonCard from '../components/PokemonCard.svelte';

    import { goto } from '$app/navigation';
	import { Button, Input } from '@svelteuidev/core';

	let name = '';

	const open = (name: string) => {
		// Add name validation. [a-zA-Z] or [0-9] all names and numbers (IDs) should be accepted
		goto('/pokemon/' + name.toLowerCase());
	};

	import type { PageData } from "./$types";
    export let data: PageData

</script>

<div class="flex items-center justify-center h-full">
	<Input placeholder="Name or ID" bind:value={name} on:change={() => open(name)} />
	<Button on:click={() => open(name)} class="ml-2">Search</Button>
</div>

<div class="flex flex-row flex-wrap justify-center">
	{#each data.data.results as pokemon}
		<PokemonCard name={pokemon.name} id={pokemon.url.split("/")[6]} />
	{/each}
</div>