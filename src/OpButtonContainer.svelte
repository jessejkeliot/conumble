<script lang="ts">
  export let operationButtons;
  // Reactive state for storing whether a button is tapped
  let tappedButton = -1;

  // Function to handle touchstart and set the tapped button index
  function handleTouchStart(index: number) {
    tappedButton = index;
  }

  // Function to handle touchend and reset the tapped button index
  function handleTouchEnd() {
    tappedButton = -1;
  }
</script>

<div class="container">
  {#each operationButtons as button, index}
    <button
      disabled={!button.display}
      on:click={button.operation}
      on:touchstart={() => handleTouchStart(index)}
      on:touchend={handleTouchEnd}
      class:tapped={tappedButton === index} 
      ><p>{button.label}: {button.tries}</p></button
    >
  {/each}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 2fr;
    user-select: none;
  }

  @media screen and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
    button {
      transition: all 0.05s;
    }
    button:active:enabled {
      background-color: #66cdaa;
    }
  }
  button {
    min-width: 7em;
    user-select: none;
  }
  /* .tapped {
    background-color: #0056b3 !important; /* Color when button is pressed */

</style>
