<script>
	import EmojiDisplay from "./EmojiDisplay.svelte"
	import EmojiDesc from "./EmojiDesc.svelte"
	import Button from "./Button.svelte"
	let isLoaded = false
	let currentEmoji = '😀'
	const emojis = ['😀', '😊', '😎', '🙋‍♀️']
	function randomEmojis(){
		return emojis[Math.floor(Math.random() * emojis.length)]
	}
	function handleButton(){
		currentEmoji = randomEmojis()
	}

	setTimeout(function(){
		isLoaded = true
	}, 2000)
</script>

<svelte:head>
	<link rel="stylesheet" href="/terminal.min.css" />
</svelte:head>

<div class="container">
	<h1>Randomize emoji</h1>
	<ul>
		{#each emojis as item}
			<li>{item}</li>
		{/each}
	</ul>
	{#if isLoaded === true}
		<EmojiDisplay {currentEmoji}/>
		<EmojiDesc />
		<!-- <div>{emoji}</div> -->
		<Button on:click={handleButton} title={'🔁 Randomize'} />
	{:else}
	<h2>Loading...</h2>
	{/if}
</div>

<style></style>