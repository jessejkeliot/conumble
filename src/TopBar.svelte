<!-- We want a help option in the corner. Title in the middle. And a settings slash accordion in the other corner -->
<!-- settings could have : hint mode, give up  button, daily stats/leaderboard -->
<!-- <div class="gridcontainer">
  <div class="griditem" id="help">🔮</div>
  <div class="griditem" id="title">Conumble</div>
  <div class="griditem" id="accordion">⚜️</div>
</div> -->

<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function onClickHelp() {
    dispatch("helpclick")
  }
</script>

<div class="flexcontainer">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="griditem" id="help" on:click={onClickHelp}>?</div>
  <div class="griditem" id="title">conumble</div>
  <div class="griditem" id="accordion">◉</div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Jacques+Francois+Shadow&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Paytone+One&family=Roboto+Slab:wght@100..900&display=swap');
  .gridcontainer {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    position: static;
    top: 0;
    left: 0;
    right: 0;
    height: 10vh;
    background-color: var(--seconday-color);
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Keeps it above other content */
    gap: 15vw;
    font-size: 2em;
    min-width: inherit;
  }
  .griditem {
    /* outline: solid red; */
    width: min-content;
    font-size: 2em;
    /* margin: 0.5em; */
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
  #help {
    margin-left: 0.1em;
    width: 1em;
  }
  #title {
    font-family: 'Roboto', "Paytone One", system-ui;
    font-weight: 400;
    font-style: normal;    
    margin-bottom: 5px;
  }
  #accordion {
    margin-right: 0.1em;
    width: 1em;
  }
  button {
    z-index: 5;
    background-color: rgb(0, 197, 197);
    margin: 0;
    position: relative;
    cursor: pointer;
    height: 100%;
    border: none;
  }

  .flexcontainer {
    display: flex;
    flex-direction: row;
    height: 5vh;
    place-items: center;
    justify-content: space-between;
    max-width: 768px;
    width: 100vw;
    background-color: var(--primary-color);
  }
  @media screen and (min-width: 768px) {
    .flexcontainer {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      position: static;
      top: 0;
      left: 0;
      right: 0;
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000; /* Keeps it above other content */
      gap: 15vw;
      font-size: 1em;
      max-width: none;
    }
    .griditem {
        font-size: 3.5em;
    }
  }
</style>
