<script lang="ts">

    import type { PageData } from "./$types";

    export let data: PageData

</script>

<code>
    <img src={data.data.sprites.front_default} alt={"sprite_" + data.data.name}>
    { data.data.name }
</code>

