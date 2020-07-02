<script>
    import { onMount, onDestroy, afterUpdate, beforeUpdate } from "svelte"
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

    // onMount => lifecycle yang akan dieksekusi ketika sebuah component di render
    onMount(() => {
        console.log("onMount")
    })

    // onDestroy => lifecycle yang akan dieksekusi ketika sebuah component di hilangkan atau di hapuskan
    onDestroy(() => {
        console.log("onDestroy")
    })

    // beforeUpdate => lifecycle yang akan dieksekusi ketika sebelum DOM di update
    beforeUpdate(() => {
        console.log("before update")
    })
    // beforeUpdate => lifecycle yang akan dieksekusi ketika DOM telah diupdate
    afterUpdate(() => {
        console.log("after update")
    })
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