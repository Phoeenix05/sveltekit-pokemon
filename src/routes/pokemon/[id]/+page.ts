import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params, fetch }) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const json = data.json()

    return { data: json }
}