<script>
	let currentEmoji = "😁"
	setTimeout(() => {
		currentEmoji = "🤣"
	}, 2000)
</script>

<main>
	<div>{currentEmoji}</div>
</main>

<style>
	div {
		font-size: 5em;
		margin: 0.4em
	}
</style>