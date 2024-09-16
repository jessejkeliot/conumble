<script lang="ts">
  import type { Question } from "./types";
  import OpButtonContainer from "./OpButtonContainer.svelte";
  import FinishedPopup from "./FinishedPopup.svelte";
  import { fade } from "svelte/transition";
  export let todaysQuestion: Question;
  const answer: number = todaysQuestion.targetValue;
  const startValue: number = todaysQuestion.startValue;
  const initialTryMap = todaysQuestion.tryMap;
  let count: number = startValue;
  let tryMap = { ...initialTryMap };
  let attemptsLeft = 3;
  let gameState = 0;
  // 0 is failed completely 1 is failed one attempt, 2 is in session, 3 is won
  $: operationsLeft = Object.values(tryMap).reduce((a, b) => a + b, 0);
  $: retryEnabled = attemptsLeft != 0;
  $: count == answer
    ? (gameState = 3) //won
    : operationsLeft == 0
      ? attemptsLeft == 0
        ? (gameState = 0) //totally lost
        : (gameState = 1) //attempt lost
      : (gameState = 2); //in play
  //colour of the count
  const eventColours = ["#E9210A", "#FF6700", "#FFFFFF", "#22DB31"];
  $: countColour = eventColours[gameState];
  // const countColour = eventColours[0];
  const handleSquare = () => {
    count = count * count;
    tryMap.Square--;
    tryMap = tryMap;
  };
  const handleDouble = () => {
    count = count * 2;
    tryMap.Double--;
  };
  const handleIncrement = () => {
    count++;
    tryMap.Increment--;
  };
  const handleDecrement = () => {
    count--;
    tryMap.Decrement--;
  };

  const handleTryAgain = () => {
    attemptsLeft--;
    count = startValue;
    tryMap = { ...initialTryMap };
  };

  $: operationButtons = [
    {
      name: "Square",
      label: "⏹️",
      operation: handleSquare,
      tries: tryMap.Square,
      display: tryMap.Square != 0,
    },
    {
      name: "Double",
      label: "x2",
      operation: handleDouble,
      tries: tryMap.Double,
      display: tryMap.Double != 0,
    },
    {
      name: "Increment",
      label: "+1",
      operation: handleIncrement,
      tries: tryMap.Increment,
      display: tryMap.Increment != 0,
    },
    {
      name: "Decrement",
      label: "-1",
      operation: handleDecrement,
      tries: tryMap.Decrement,
      display: tryMap.Decrement != 0,
    },
  ];
</script>
<div class="gamenotifcontainer">
  {#if gameState==3 || gameState==0}
    <!-- Where the results pop up will show -->
    <FinishedPopup open={false} {gameState} {attemptsLeft}/>
  {/if}
</div>
<h2>Attempts Left: {attemptsLeft}</h2>
<h2>🎯 {answer}</h2>
<button disabled={!retryEnabled} on:click={handleTryAgain} style={"font-size: 20px;"}><p>🔄</p></button>
<!-- When your count goes orange, the target should flash bold and then the count reset -->
<!-- <p>Operations Left: {operationsLeft}</p> -->
<h1 style="color: {countColour};">{count}</h1> 


<OpButtonContainer {operationButtons} />


<style>
  .gamenotifcontainer {
    display: flex;
    justify-content: center; /* Aligns items horizontally to the center */
}
</style>
<!-- The game should be: Computer generates random starting number between 2 and 7, 
 it will then perform 7 operations on it which will be recorded
 the final number must not be above 777. (generator will keep going round until the number is created)
 Once the number is generated. An algorithm will find the most optimal sequence to that path
 using the available operations and that will be the star answer. Any other answer is accepted
 the number will change everyday. and the person must get to the number within seven guesses
 
 the generator must generate final numbers that have at least 7 different paths to get to them.-->

<!-- 7 tries, 7 possibilites, 7 operations -->

<!-- operations: square, double, triple, increment, decrement, half -->
