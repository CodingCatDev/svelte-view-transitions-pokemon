<script lang="ts">
	export let data;
	import { onNavigate } from '$app/navigation';

	onNavigate((props) => {
		return new Promise((resolve) => {
			//@ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await props.complete;
			});
		});
	});
</script>

<ul>
	{#each data?.pokemon as pokemon}
		<li>
			<a class="underline inline" href={`/${pokemon.name}`}>{pokemon.name}</a>
			<img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
		</li>
	{/each}
</ul>

<style>
	:root::view-transition-new(root),
	:root::view-transition-old(root) {
		animation-duration: 5s;
	}
</style>
