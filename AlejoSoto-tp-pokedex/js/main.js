import { hideSpinner,showSpinner } from "./helpers/spinner.js";
import {getPokemons, getPokemon} from "./services/pokemonService.js";
import { renderPokemons, singlePokemon } from "./components/pokemonCard.js";
import { getQuery } from "./helpers/input.js";
import { warningAlert, errorAlert } from "./helpers/sweetAlert.js";
import { enableViewAll, disableViewAll } from "./helpers/viewAll.js";

const viewAllBtn = document.getElementById("viewAllBtn");
const container = document.getElementById("pokemonContainer");
const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("pokemonInput");

const loadAllPokemons = async () => {
  try {
    showSpinner();
    container.innerHTML="";
    container.classList.remove("justify-content-center");

    const pokemons = await getPokemons();

    container.innerHTML = renderPokemons(pokemons);

  } catch (error) {
    errorAlert("No se pudieron cargar los pokemones.");
  } finally {
    hideSpinner();
  }
};

const viewAllPokemon = () => {
  input.value = "";
  loadAllPokemons();
  disableViewAll();
};

const searchPokemon = async () => {
  const query = getQuery();

  if (!query) {
    warningAlert("Debes escribir un nombre antes de buscar.");
    return;
  }

  try {
    showSpinner();
    container.innerHTML="";
    container.classList.add("justify-content-center");

    const pokemon = await getPokemon(query);

    container.innerHTML = singlePokemon(pokemon);

  } catch (error) {
    errorAlert(`El Pokémon "${query}" no existe.`);
  } finally {
    hideSpinner();
    enableViewAll();
  }
};

// Eventos
document.addEventListener("DOMContentLoaded", loadAllPokemons());
searchBtn.addEventListener("click", searchPokemon);
viewAllBtn.addEventListener('click', viewAllPokemon);