<script>
	let currentEmoji = "😁"
</script>

<main>
	<h1>Randomize emoji</h1>
	<div>{currentEmoji}</div>
	<button>🔁 Randomize</button>
</main>

<style>
	button {
		background-color: aqua;
		padding: 0.75em;
		border-radius: 0.25em;
		border: 2px solid black;
		box-shadow: 0.4em 0.4em 0 black;
		transition: all 0.4s ease;
	}
	button:hover {
		box-shadow: 0.25em 0.25em 0 #222;
		background-color: aquamarine;
	}
	main {
		margin: 2em;
	}
</style>