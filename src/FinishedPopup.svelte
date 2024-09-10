<script>
let colours = ["blanchedalmond", "pink", "plum", "paleblue", "royalblue"]

</script>

<div class="gridcontainer">
    {#each [1, 2, 3, 4, 5] as item}
         <div style="background-color: {colours[item -1]};">{item}</div>
    {/each}
</div>

<style>
    .griditem {
    }
    .gridcontainer {
        z-index: 1;
        position:absolute;
        width: 60%;
        height: 90%;
        background-color: slategrey;
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        margin-right: auto;
    }
</style>

