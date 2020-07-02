<script>
    let desc = ''
    $: descLength = desc.length
    $: descWords = desc.split(" ").length
    $: if(descLength > 10) {
        console.log(`Description: ${desc}`)
    }

    function handleSubmit(){
        console.log("test")
        desc = ''
    }
</script>

<div class="form-group">
    <p>{desc}</p>
    <form action="#" on:submit|preventDefault={handleSubmit}>
        <textarea bind:value={desc} rows="7" name="description"></textarea>
        <button type="submit">Submit</button>
    </form>
    <p>Text length: {descLength}</p>
    <p>Words count: {descWords}</p>
</div>

<style>
    div {
        margin: 2em;
    }
</style>