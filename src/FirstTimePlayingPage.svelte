<script lang="ts">
  import { onMount } from "svelte";
  import Counter from "./Counter.svelte";
  import Target from "./Target.svelte";
  import { getTimeFromFirstConumble } from "./timeFunction";
  import { generateQuestion} from "./generateRandomQ";
  const pathLength = 5;
  const fakeQ = generateQuestion(pathLength);
  const intervalTime = 1000;
    let currentIndex = 0;
    const numbers = fakeQ.numberPath;
    const operations = fakeQ.operationPath;
    const target = numbers[numbers.length -1];
  function updateText() {
    currentIndex = (currentIndex + 1) % numbers.length; // cycle through the array
  }
  let interval: number;
  onMount(() => {
    interval = setInterval(updateText, intervalTime);

    // Cleanup when the component is destroyed
    return () => clearInterval(interval);
  });
</script>

<div class="backgroundblur">
  <div class="textcontainer">
    <h2>So... this is your first time playing conumble?</h2>
    <div class="textdivider"></div>
    <h3>In this game you will have a target:</h3>
    <Target targetValue={target}></Target>
    {#if currentIndex == pathLength}
        <h3>Target reached!</h3>
    {:else}
        <h3>A running count:</h3>
    {/if}
    <h1>{numbers[currentIndex]}</h1>
    <div class="textdivider" style="width: {45* (currentIndex+1)/pathLength}%"></div> 
    <h2>{operations[currentIndex]}</h2>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <h3>And some <i>buttons</i> to help you reach the target. Click <i on:click={() => location.reload()}>here</i> to try!</h3>
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
    background-color: var(--secondary-background-color);
    display: flex;
    padding: none;
    place-items: center;
    flex-direction: column; /* Second row (#emojirep) grows to fill available space */
    outline: solid var(--secondary-background-color-selected);
    /* margin: 3% 0; */
    user-select: none;
  }

  .textdivider {
    width: 100%;
    height: 5px;
    background-color: var(--secondary-color-selected);
    margin: 0 0;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.5em;
  }
  h1 {
    margin: 6%;
    padding: 0;
  }
  @media screen and (max-width: 768px){
    h1 {
    margin: 1%;}
  }
</style>
