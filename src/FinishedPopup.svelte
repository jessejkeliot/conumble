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
          congratulations on completing the <span style="font-style: italic;"
            >{questionIndex}{getOrdinal(questionIndex)}</span
          > conumble
        </h3>
      </div>
      <div class="griditem" id="emojirep"></div>
      <div class="griditem" id="sharepage">
        <ShareWidget resultRepresentation={"gamer"} />
      </div>
      <div class="griditem" id="nextconumble">
        <h3>
          come back in {1440 -
            Math.floor((getTimeFromFirstConumble() / 6e4) % 1440)} minutes for the
          next conumble
        </h3>
      </div>
    </div>
  </div>
{/if}

<style>
    .fcontainer {
        outline: solid blue;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 45vh;
    }
  .gridcontainer {
    z-index: 7;
    position: fixed;
    width: 60%;
    height: 80%;
    background-color: slategray;
    display: flex;
    flex-direction: column;
    grid-template-rows: repeat(5, 1fr);
    margin-right: auto;
    border: 0.2em solid black;
    /* border-radius: 2em; */
  }

  .griditem {
    position: relative;
    /* border-bottom: 0.3em solid black; */
    /* border-radius: inherit; */
    background-color: slategray;
    outline: solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-size: x-large;
  }

  .griditem h3 {
    margin: 0;
    text-align: center;
    width: 100%;
    /* line-height: 1.2; Adjusts line spacing */
  }

  #congratulations {
    grid-row: 1;
    z-index: 2;
  }

  #emojirep {
    grid-row: 2 / 4;
    background-color: darkcyan;
    min-height: 30%;
  }

  #sharepage {
    min-height: 20%;
    grid-row: 4;
    display: flex;
    place-items: center;
  }

  #nextconumble {
    grid-row: 5;
    border-bottom: none;
  }

  /* Responsive behavior */
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
