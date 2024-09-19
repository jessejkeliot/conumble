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
  <div class="gridcontainer">
    <div class="griditem" id="congratulations">
      <h3>
        congratulations on completing the <span style={"font-style: italic;"}
          >{questionIndex}{getOrdinal(questionIndex)}</span
        > conumble
      </h3>
    </div>
    <div
      class="griditem"
      id="emojirep"
    ></div>
    <div class="griditem" id="sharepage">
      <ShareWidget resultRepresentation={"gamer"} />
    </div>
    <div class="griditem" id="nextconumble">
      <h3>
        come back in { 1440 - Math.floor((getTimeFromFirstConumble() / 6e4) % 1440)} minutes for the next
        conumble
      </h3>
    </div>
  </div>
{/if}

<style>
  .griditem {
    position: relative;
    border-bottom: 0.3em solid black;
    border-radius: inherit;
    background-color: slategray;
  }

  .griditem h3 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .gridcontainer {
    z-index: 1;
    position: absolute;
    width: 60%;
    height: 80%;
    background-color: slategray;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    /* grid-template-columns: 1fr; */
    margin-right: auto;
    border: 0.2em solid black;
    border-radius: 2em;
  }
  #congratulations {
    grid-row: 1; /* Item 1 occupies the first row */
    z-index: 2;
    padding: 0%;
  }
  #emojirep {
    grid-row: 2 / 4; /* Item 2 spans from the 2nd to the 3rd row (inclusive of 2nd row) */
    background-color: darkcyan;
  }

  #sharepage {
    grid-row: 4; /* Item 3 occupies the fourth row */
  }

  #nextconumble {
    grid-row: 5; /* Item 4 occupies the fifth row */
    border-bottom: none;
  }
</style>
