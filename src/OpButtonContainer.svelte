<script>
    export let operationButtons
</script>

<div class="container">
    {#each operationButtons as button}
      <button class="grid-item" disabled={!button.display} on:click={button.operation}
        ><p>{button.label}: {button.tries}</p></button
      >
    {/each}
</div>

<style>
    .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 2fr;
    }

    @media screen and (max-width:650px) {
    .container{
        grid-template-columns: repeat(2, 1fr);
    }
    }
    @media screen {
        button:active {
            background-color: #66cdaa;
        }
    }
    .grid-item {
    min-width: 7em;
    }
</style>