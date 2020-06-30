<script>
    let desc = ''
    $: descLength = desc.length
    $: descWords = desc.split(" ").length
</script>

<main>
    <div>
        <p>{desc}</p>
        <textarea bind:value={desc} rows="7"></textarea>
        <p>Text length: {descLength}</p>
        <p>Words count: {descWords}</p>
    </div>
</main>

<style>
    div {
        margin: 2em;
    }
</style>