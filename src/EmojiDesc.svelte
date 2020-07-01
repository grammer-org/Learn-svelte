<script>
    let desc = ''
    $: descLength = desc.length
    $: descWords = desc.split(" ").length
    $: if(descLength > 10) {
        console.log(`Description: ${desc}`)
    }
</script>

<div class="form-group">
    <p>{desc}</p>
    <textarea bind:value={desc} rows="7"></textarea>
    <p>Text length: {descLength}</p>
    <p>Words count: {descWords}</p>
</div>

<style>
    div {
        margin: 2em;
    }
</style>