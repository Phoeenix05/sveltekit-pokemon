<script lang="ts">

    let name = 'Pikachu';

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- <a href="/pokemon/pikachu">Pokemon [Pikachu]</a> -->
<!-- <p>{ name }</p> -->
<input type="text" bind:value={name}>
<a href={"/pokemon/" + name.toLowerCase()}>Search</a>