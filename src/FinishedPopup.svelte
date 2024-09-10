<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import ShareWidget from "./ShareWidget.svelte";
  export let open;
  export let attemptsLeft;
  export let gameState;

  let colours = ["blanchedalmond", "pink", "plum", "paleblue", "royalblue"];
</script>

{#if open}
  <div class="gridcontainer">
    <div class="griditem" id="congratulations"><h3>Congrats</h3></div>
    <div class="griditem" id="emojirep" style={"background-color: fuchsia;"}></div>
    <div class="griditem" id="sharepage"><h3>Share</h3></div>
    <div class="griditem" id="nextconumble"><h3>next is</h3></div>
  </div>
{/if}

<style>
  .griditem {
    position: relative;
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
    width: 40%;
    height: 80%;
    background-color: slategrey;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    margin-right: auto;
    border: 4px solid black;
  }
  #congratulations {
    grid-row: 1; /* Item 1 occupies the first row */
  }

  #emojirep {
    grid-row: 2 / 4; /* Item 2 spans from the 2nd to the 3rd row (inclusive of 2nd row) */
  }

  #sharepage {
    grid-row: 4; /* Item 3 occupies the fourth row */
  }

  #nextconumble {
    grid-row: 5; /* Item 4 occupies the fifth row */
  }
</style>
