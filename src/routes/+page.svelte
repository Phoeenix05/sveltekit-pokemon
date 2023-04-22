<script lang="ts">

    let name = 'Pikachu';

</script>

<div class="flex m-auto justify-center items-center">
    <input type="text" bind:value={name}>
    <a href={"/pokemon/" + name.toLowerCase()}>Search</a>
</div>
