export const load = async ({ fetch, params }) => {
	const { id } = params;
	const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const pokemon = await resp.json();
	console.log(pokemon);
	return {
		pokemon
	};
};
