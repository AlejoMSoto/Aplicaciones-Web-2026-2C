
const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async () => {
    const response = await fetch(`${API_URL}?limit=28`);
    const data = await response.json();

    const pokemonPromises = data.results.map(async (p) => {
      const res = await fetch(p.url);
      return res.json();
    });

    const pokemons = await Promise.all(pokemonPromises);

    return pokemons;
}

export const getPokemon = async (query) => {
    
    const response = await fetch(`${API_URL}/${query}`);

    if (!response.ok) throw new Error("Pokémon no encontrado");

    const pokemon = await response.json();

    return pokemon;
}