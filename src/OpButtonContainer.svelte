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