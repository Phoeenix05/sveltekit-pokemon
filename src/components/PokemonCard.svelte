<script lang="ts">

    export let name: string
    export let id: string
    let sprite_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

</script>

<a href={"/pokemon/" + name} class="hover:cursor-pointer">
    <img src={sprite_url} alt={"sprite_" + name}>
</a>