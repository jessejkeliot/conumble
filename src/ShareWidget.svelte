<script lang="ts">
    export let resultRepresentation: string;
    function handleClick(){
        navigator.clipboard.writeText(resultRepresentation);
}
</script>

<button on:click={handleClick}>Share</button>

<style>

    button {
        position:fixed ;
    }
</style>