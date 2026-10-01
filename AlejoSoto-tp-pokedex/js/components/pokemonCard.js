export const renderPokemon = (pokemon) => {
  const { name, sprites, types } = pokemon;
  const typeList = types
    .map((t) => `<span class="badge bg-secondary me-1">${t.type.name}</span>`)
    .join("");

  return `
    <div class="card shadow">
      <img src="${sprites.front_default}" class="card-img-top" alt="${name}">
      <div class="card-body text-center">
        <h5 class="card-title text-capitalize">${name}</h5>
        <p>${typeList}</p>
      </div>
    </div>
  `;
};

export const renderPokemons = (pokemons) => {
  const HTML = pokemons.map((p) => `
      <div class="col-md-3">${renderPokemon(p)}</div>
    `,).join("");
    return HTML;
}

export const singlePokemon = (pokemon) => {
  const HTML = `
      <div class="col-md-4 single-card">
        ${renderPokemon(pokemon)}
      </div>
    `;

    return HTML;
}