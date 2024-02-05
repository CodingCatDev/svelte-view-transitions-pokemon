export const load = async ({ fetch }) => {
	const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
	const pokemonList = await resp.json();
	const pokemon = await Promise.all(
		pokemonList.results.map((result: { url: string }) =>
			fetch(result.url).then((resp) => resp.json())
		)
	);
	return {
		pokemon
	};
};
