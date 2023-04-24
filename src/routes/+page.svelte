<script lang="ts">
	import { goto } from "$app/navigation"

    import { Input, Button } from "@svelteuidev/core"

    let name = '';

</script>

<div class="flex items-center justify-center h-full">
    <!-- <input type="text" bind:value={name}> -->
    <Input placeholder="Name or ID" bind:value={name} />
    <!-- <a href={"/pokemon/" + name.toLowerCase()}>Search</a> -->
    <Button on:click={() => goto("/pokemon/" + name.toLowerCase())} class="ml-2">
        Search
    </Button>
</div>
