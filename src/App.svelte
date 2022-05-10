<script>
	let name;
	let firstName= 'Ramananasy';
	let lastName = 'Andy';
	let age = '18 ans';
	let showText= true;

$: name =firstName + ' ' + lastName + ' ' + age

const changer=()=>{
	showText=!showText
}
</script>

<main>
	<h1>Bonjour {name}!</h1>
	{#if showText}
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{/if}
</main>
<button on:click={changer}>Cliquer Ici</button>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color:blueviolet;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>