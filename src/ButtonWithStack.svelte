<script lang="ts">
  import { scale } from "svelte/transition";

  export let index;
  export let detail;
  export let label;
  let gap = 11;
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
    disabled={!detail.display}
    on:click={detail.operation}
    on:touchstart={() => handleTouchStart(index)}
    on:touchend={handleTouchEnd}
    class:tapped={tappedButton === index}
    ><div class="buttonTextHolder"><p>{label}</p></div>
  </button>
  {#if detail.tries > 1}
    <!-- content here -->
    {#each { length: detail.tries - 1 } as item, index2}
      <!-- <div class="dupeButtons" style="top: {(index2 + 1) * 10}px;"></div> -->
      <button
        class="dupeButtons"
        style="top: {(index2 + 1) * gap}px; z-index: {10 - index2};"
        on:click={detail.operation}
        on:touchstart={() => handleTouchStart(index)}
        on:touchend={handleTouchEnd}
      ></button>
    {/each}
  {/if}
</div>

<style>
  .dupeButtons {
    position: absolute;
    background-color: var(--primary-color);
    user-select: none;
  } 
  .buttonStackContainer {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  button {
    height: 4.5em;
    z-index: 11;
    border-radius: 8px;
    border: 1px solid transparent;
    width: min-content;
    /* padding: 1em 1.6em; */
    max-width: 30%;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--primary-color);
    cursor: pointer;
    /* margin: 0.4em; */
    transition: all 0.4s;
    color: var(--text-color);
    min-width: 4.5em;
    user-select: none;
    box-shadow: 0px 4px 1px -1px var(--shadow-color);
  }
  button p {
    font-size: medium;
  }
  .buttonTextHolder {
    transform: scale(2, 2);
  }
  @media (hover: hover) {
    button:hover:enabled {
      background-color: var(--primary-color-selected);
      box-shadow: none;
      /* border: 2px solid white; */
      box-shadow: 0px 2px 3px -1px var(--shadow-color);
      transform: translateY(-2px);
    }
  }
  button:disabled:not(.dupeButtons) {
    background-color: transparent;
    text-decoration: line-through;
    box-shadow: 0px 0px 9px 0px var(--primary-color);
  }
  button:disabled.dupeButtons {
    background-color: var(--primary-color);
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  :focus:not(:focus-visible) {
    outline: 0;
  }

  @media screen and (max-width: 550px) {
    button {
      transition: all 0.05s;
      min-width: 3.5em;
        height: 3.5em;
    }
    button:active:enabled {
      background-color: var(--primary-color-selected);
    }
  }
  @media screen and (min-width: 768px) {
    
  }
</style>
