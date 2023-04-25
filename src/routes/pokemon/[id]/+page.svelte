<script lang="ts">

    import type { PageData } from "./$types";

    export let data: PageData
    const { name, sprites } = data.data

</script>

<svelte:head>
    <link rel="icon" type="image/png" href={sprites.front_default} id="favicon" />
    <title>{ name.toLocaleUpperCase() }</title>
</svelte:head>

<code>
    <img src={sprites.front_default} alt="sprite_{name}">
    { name }
</code>

