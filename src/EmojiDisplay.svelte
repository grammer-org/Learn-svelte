<script>
	export let emojiAngry
	export let emojiHappy
	let currentEmoji = emojiAngry
	setTimeout(() => {
		currentEmoji = emojiHappy
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