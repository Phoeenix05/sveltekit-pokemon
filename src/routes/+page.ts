import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ fetch }) => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1300")
    const json = await data.json()

    return { data: json }
}