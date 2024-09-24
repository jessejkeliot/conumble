<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { getTimeFromFirstConumble } from "./timeFunction.js";
  import ShareWidget from "./ShareWidget.svelte";
  export let open;
  export let attemptsLeft;
  export let gameState;
  export let userInputMap;
  export let questionIndex;

  let colours = ["blanchedalmond", "pink", "plum", "paleblue", "royalblue"];

  function getOrdinal(n: number) {
    let ord = "th";

    if (n % 10 == 1 && n % 100 != 11) {
      ord = "st";
    } else if (n % 10 == 2 && n % 100 != 12) {
      ord = "nd";
    } else if (n % 10 == 3 && n % 100 != 13) {
      ord = "rd";
    }

    return ord;
  }
</script>

{#if open}
  <div class="fcontainer">
    <div class="gridcontainer">
      <div class="griditem" id="congratulations">
        <h3>
          congratulations on completing the <span style="font-style: italic;">{questionIndex}{getOrdinal(questionIndex)}</span> conumble
        </h3>
      </div>
      <div class="griditem" id="emojirep">aksdf</div>
      <div class="griditem" id="sharepage">
        <ShareWidget resultRepresentation={"gamer"} />
      </div>
      <div class="griditem" id="nextconumble">
        <h3>
          come back in {1440 - Math.floor((getTimeFromFirstConumble() / 6e4) % 1440)} minutes for the next conumble
        </h3>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Centering the flex container on the screen */
  .fcontainer {
    outline: solid blue;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; /* Full viewport height */
  }

  /* Grid container setup */
  .gridcontainer {
    z-index: 7;
    position: relative; /* Keep it in normal document flow */
    width: 60%;
    height: 80%;
    background-color: var(--secondary-background-color);
    display: grid;
    grid-template-rows: auto 1fr auto auto; /* Second row (#emojirep) grows to fill available space */
    border: 0.2em solid black;
  }

  /* Grid item setup */
  .griditem {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-background-color);
    outline: solid rgb(255, 64, 0);
    font-size: x-large;
  }

  .griditem h3 {
    margin: 0;
    text-align: center;
    width: 100%;
  }

  /* Specific grid item styles */
  #congratulations {
    grid-row: 1;
    z-index: 2;
  }

  #emojirep {
    grid-row: 2;
    background-color: var(--primary-color-selected);
    /* Takes remaining space due to grid-template-rows */
  }

  #sharepage {
    grid-row: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
  }

  #nextconumble {
    grid-row: 4;
    border-bottom: none;
  }

  /* Responsive behavior for smaller devices */
  @media (max-width: 768px) {
    .gridcontainer {
      width: 80%;
      height: 90%;
    }
  }

  @media (max-width: 480px) {
    .gridcontainer {
      width: 90%;
      height: 80%;
    }
  }
</style>
