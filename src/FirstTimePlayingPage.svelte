<script lang="ts">
  import { onMount } from "svelte";
  import Counter from "./Counter.svelte";
  import Target from "./Target.svelte";
  import { getTimeFromFirstConumble } from "./timeFunction";
  import { generateQuestion } from "./generateRandomQ";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const pathLength = 5;
  const fakeQ = generateQuestion(pathLength);
  const intervalTime = 1000;
  let currentIndex = 0;
  const numbers = fakeQ.numberPath;
  const operations = fakeQ.operationPath;
  const target = numbers[numbers.length - 1];
  function updateText() {
    currentIndex = (currentIndex + 1) % numbers.length; // cycle through the array
  }
  let interval: number;
  function handleClose() {
    dispatch('close');
  }
  onMount(() => {
    interval = setInterval(updateText, intervalTime);

    // Cleanup when the component is destroyed
    return () => clearInterval(interval);
  });
</script>

<div class="backgroundblur">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="textcontainer" on:click={handleClose}>
    <h2>So... this is your first time playing conumble?</h2>
    <div class="textdivider"></div>
    <h3>In this game you will have a target:</h3>
    <Target targetValue={target}></Target>
    <div class="textdivider"></div>
    <h3>A starting number:</h3>
    <h1>{numbers[1]}</h1>

    <h3>And some <i><b>buttons</b></i> to help you reach the target.</h3>
    <div class="textdivider"></div>

    <h3>Click <i>anywhere</i> to try!</h3>
  </div>
</div>

<style>
  .backgroundblur {
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
    z-index: 15;
  }

  .textcontainer {
    position: relative; /* Keep it in normal document flow */
    width: 100%;
    height: 90%;
    background-color: var(--secondary-color);
    display: flex;
    padding: none;
    place-items: center;
    flex-direction: column; /* Second row (#emojirep) grows to fill available space */
    outline: solid var(--secondary-color-selected);
    /* margin: 3% 0; */
    user-select: none;
  }

  .textdivider {
    width: 100%;
    height: 5px;
    background-color: var(--secondary-color-selected);
    margin: 5% 0;
  }

  h2 {
    margin: 0;
    padding: 0 5%;
    font-size: 1.5em;
  }
  h1 {
    margin: 0 1%;
    padding: 0;
  }
  h3 {
    margin: 0 3%;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    h1 {
      margin: 1%;
    }
  }
  @media screen and (min-width: 768px) {
    .textdivider {
      margin: 3% 0;
    }
    h1 {

    }
  }
</style>
