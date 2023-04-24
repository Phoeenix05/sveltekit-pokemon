<script lang="ts">

    import type { PageData } from "./$types";

    export let data: PageData

</script>

<svelte:head>
    <link rel="icon" type="image/png" href={data.data.sprites.front_default} id="favicon" />
    <title>{ data.data.name.toLocaleUpperCase() }</title>
</svelte:head>

<code>
    <img src={data.data.sprites.front_default} alt={"sprite_" + data.data.name}>
    { data.data.name }
</code>

