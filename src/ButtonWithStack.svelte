<script lang="ts">
  export let display;
  export let operation;
  export let index;
  export let tries;
  export let label;
  let gap = 30;
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

<div class="buttonStackContainer">
  <button
    hidden={!display}
    on:click={operation}
    on:touchstart={() => handleTouchStart(index)}
    on:touchend={handleTouchEnd}
    class:tapped={tappedButton === index}
    ><p>{label}</p>
  </button>
  {#if tries > 1}
  <!-- content here -->
  {#each { length: (tries -1) } as item, index2}
    <!-- <div class="dupeButtons" style="top: {(index2 + 1) * 10}px;"></div> -->
    <button class="dupeButtons" style="top: {(index2 + 1) * gap}px;" disabled={true}></button>
  {/each}
  {/if}
</div>

<style>
  .dupeButtons {
    z-index: 0;
    position: absolute;
    background-color: #1a1a1a;
  }
  .buttonStackContainer {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  button {
    z-index: 4;
    border-radius: 8px;
    border: 1px solid transparent;
    width: min-content;
    padding: 1em 1.6em;
    max-width: 30%;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    margin: 0.4em;
    transition: all 0.4s;
    color: white;
    min-width: 7em;
    user-select: none;
    box-shadow: 0px 4px 5px darkslategray;
  }
  @media (hover: hover) {
    button:hover:enabled {
      background-color: #66cdaa;
      transform: translateY(-5px);
    }
  }
  button:disabled {
    background-color: mediumvioletred;
    text-decoration: line-through;
  }
  button:disabled.dupeButtons  {
    background-color: #1a1a1a;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media screen and (max-width: 550px) {
    button {
      transition: all 0.05s;
    }
    button:active:enabled {
      background-color: #66cdaa;
    }
  }
</style>
