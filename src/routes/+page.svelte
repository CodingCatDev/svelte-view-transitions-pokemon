<script lang="ts">
	export let data;
	import { setupViewTransition } from 'sveltekit-view-transition';

	const { transition, classes } = setupViewTransition();
</script>

<section>
	<ul>
		{#each data?.pokemon as pokemon}
			<li>
				<a
					use:transition={{
						name: 'sprite-name',
						shouldApply: (params) => {
							return params.navigation.to?.params?.id === pokemon.name;
						},
						applyImmediately: (params) => {
							return params.isInViewport && params.navigation.from?.params?.id === pokemon.name;
						}
					}}
					class="underline inline"
					style="display: block;"
					href={`/${pokemon.name}`}
					>{pokemon.name}
				</a>
				<img
					use:transition={{
						name: 'sprite',
						shouldApply: (params) => {
							return params.navigation.to?.params?.id === pokemon.name;
						},
						applyImmediately: (params) => {
							return params.isInViewport && params.navigation.from?.params?.id === pokemon.name;
						}
					}}
					src={pokemon?.sprites?.front_default}
					alt={pokemon?.name}
				/>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		background: tomato;
	}
	@keyframes slide {
		from {
			transform: translateX(var(--from));
		}
		to {
			transform: translateX(var(--to));
		}
	}
	:root::view-transition-new(root),
	:root::view-transition-old(root) {
		animation: slide 1s linear;
	}
	:root::view-transition-group(sprite) {
		animation-duration: 1s;
	}
	:root::view-transition-group(sprite-name) {
		animation-duration: 1s;
	}

	:root::view-transition-new(root) {
		--from: 100%;
		--to: 0%;
	}
	:root::view-transition-old(root) {
		--from: 0%;
		--to: -100%;
	}
	.back:root::view-transition-new(root) {
		--from: -100%;
		--to: 0%;
	}
	.back:root::view-transition-old(root) {
		--from: 0%;
		--to: 100%;
	}
</style>
