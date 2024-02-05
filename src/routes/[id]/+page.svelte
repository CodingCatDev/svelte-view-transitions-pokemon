<script lang="ts">
	export let data;
	$: sprites = data?.pokemon?.sprites;
</script>

<h1>{data?.pokemon?.name}</h1>
<img src={sprites?.front_default} alt={data?.pokemon?.name} />
