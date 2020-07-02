<script>
	import EmojiDisplay from "./EmojiDisplay.svelte"
	import EmojiDesc from "./EmojiDesc.svelte"
	import Button from "./Button.svelte"
	let isLoaded = false
	let currentEmoji = '😀'
	const emojis = ['😀', '😊', '😎', '🙋‍♀️']
	let mouse = {
		x: 0,
		y: 0
	}
	function randomEmojis(){
		return emojis[Math.floor(Math.random() * emojis.length)]
	}
	function handleButton(){
		currentEmoji = randomEmojis()
	}
	function handleMouseMove(event){
		mouse.x = event.clientX
		mouse.y = event.clientY
	}

	setTimeout(function(){
		isLoaded = true
	}, 2000)
</script>

<svelte:head>
	<link rel="stylesheet" href="/terminal.min.css" />
</svelte:head>

<div class="container" on:mousemove={handleMouseMove}>
	<h1>Randomize emoji</h1>
	<p>Mouse position: {mouse.x} & {mouse.y}</p>
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
	<Button title={'toggle'} on:click={() => isLoaded = !isLoaded} />
</div>

<style></style>