<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { createGameRepresenation, getTimeFromFirstConumble } from "./timeFunction.js";
  import ShareWidget from "./ShareWidget.svelte";
  import { createEventDispatcher, onMount } from "svelte";
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
  const dispatch = createEventDispatcher();
  onMount(() =>{
    dispatch('messageblur');
  }
);
const messages = ["trying", "", "", "completing"]
const cmessage = messages[gameState];
let delayIncrement = 100;
</script>

{#if open}
  <div class="fcontainer">
    <div class="gridcontainer">
      <div class="griditem" id="congratulations">
        <h3>
          congratulations on {cmessage} the <span style="font-style: italic;">{questionIndex}{getOrdinal(questionIndex)}</span> conumble
        </h3>
      </div>
      <div class="griditem" id="emojirep">
        {#each Array.from(createGameRepresenation(attemptsLeft, gameState, questionIndex)) as letter, i (i)}
        <p transition:fly={{ y: 200, duration: 2000, delay: i * delayIncrement }}>
          {letter}
        </p>
      {/each}</div>
      <div class="griditem" id="sharepage">
        <ShareWidget resultRepresentation={ questionIndex.toString() + getOrdinal(questionIndex)+ " conumble,\n" + createGameRepresenation(attemptsLeft, gameState, questionIndex)} on:copyevent/>
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
    top: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    /* outline: solid blue; */
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; /* Full viewport height */
    overflow: hidden;
  }

  /* Grid container setup */
  .gridcontainer {
    z-index: 7;
    position: relative; /* Keep it in normal document flow */
    width: 60%;
    height: 80%;
    background-color: var(--secondary-color);
    display: grid;
    grid-template-rows: auto 1fr auto auto; /* Second row (#emojirep) grows to fill available space */
    /* border: 0.2em solid black; */
  }

  /* Grid item setup */
  .griditem {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    outline: solid 5px var(--secondary-color-selected);
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
    background-color: var(--secondary-color-selected);
    font-size: 12vw;
    /* Takes remaining space due to grid-template-rows */
  }
  #emojirep span {
    display: inline-block;
    opacity: 0;
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
    .fcontainer {
        overflow: hidden;
    }
  }

  @media (max-width: 480px) {
    .gridcontainer {
      width: 90%;
      height: 80%;
    }
  }
  @media (min-width: 832px) {
    .griditem {
        padding: 12px 0;
    }
    #emojirep {
      font-size: 6em;
    }
  }
</style>
