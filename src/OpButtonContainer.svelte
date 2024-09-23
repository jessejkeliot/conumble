<script lang="ts">
  import ButtonWithStack from "./ButtonWithStack.svelte";

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
    <ButtonWithStack
      detail={{display: button.display,
        operation: button.operation,
        tries: button.tries,
      }}
      {index}
      label={button.label}
      ></ButtonWithStack
    >
  {/each}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    user-select: none;
    pointer-events: relative;
    row-gap: 1.5em;
    column-gap: 2em;
    /* margin-bottom: 3em; */
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    width: auto;
    padding: 1em 1.6em;
    max-width: 30%;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    margin: 0.4em;
    transition: all 0.4s;
    color: var(--text-color);
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
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media screen and (max-width: 550px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1.75em;
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
