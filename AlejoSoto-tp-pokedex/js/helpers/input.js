export const getQuery = () => {
    const query = document.getElementById("pokemonInput").value.trim().toLowerCase();
    return query;
}
