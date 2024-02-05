<script lang="ts">
	export let data;
	import { setupViewTransition } from 'sveltekit-view-transition';

	const { transition, classes } = setupViewTransition();
	classes((nav) => {
		console.log('id', nav.navigation.to?.route.id);
		if (nav.navigation.to?.route.id !== '/') {
			return ['back'];
		}
	});
	$: sprites = data?.pokemon?.sprites;
</script>

<section>
	<a href="/">Home</a>
	<h1 use:transition={'sprite-name'}>
		{data?.pokemon?.name}
	</h1>
	<img use:transition={'sprite'} src={sprites?.front_default} alt={data?.pokemon?.name} />
</section>

<style>
	section {
		background: lightgreen;
	}
</style>
