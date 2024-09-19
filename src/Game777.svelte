<script lang="ts">
  import type { Question } from "./types";
  import OpButtonContainer from "./OpButtonContainer.svelte";
  import FinishedPopup from "./FinishedPopup.svelte";
  import { fade, fly } from "svelte/transition";
  export let todaysQuestion: Question;
  const answer: number = todaysQuestion.targetValue;
  const startValue: number = todaysQuestion.startValue;
  const initialButtonUsesMap = todaysQuestion.tryMap;
  const noOfAttempts = 3;
  let count: number = startValue;
  let buttonUsesMap = { ...initialButtonUsesMap };
  let attemptsUsed = 3;
  let gameState = 0;
  let userInputMap = "";
  let currentTryUserInputMap = "";
  // 0 is failed completely 1 is failed one attempt, 2 is in session, 3 is won
  $: operationsLeft = Object.values(buttonUsesMap).reduce((a, b) => a + b, 0);
  $: retryEnabled = attemptsUsed != noOfAttempts;
  $: count == answer
    ? (gameState = 3) //won
    : operationsLeft == 0
      ? attemptsUsed == noOfAttempts
        ? (gameState = 0) //totally lost
        : (gameState = 1) //attempt lost
      : (gameState = 2); //in play
  //colour of the count
  const eventColours = ["#E9210A", "#FF6700", "#FFFFFF", "#22DB31"];
  $: countColour = eventColours[gameState];
  // const countColour = eventColours[0];
  const handleSquare = () => {
    count = count * count;
    buttonUsesMap.Square--;
    buttonUsesMap = buttonUsesMap;
    userInputMap += "^";
    currentTryUserInputMap += "^";
  };
  const handleDouble = () => {
    count = count * 2;
    buttonUsesMap.Double--;
    userInputMap += "2";
    currentTryUserInputMap += "2";
  };
  const handleIncrement = () => {
    count++;
    buttonUsesMap.Increment--;
    userInputMap += "+";
    currentTryUserInputMap += "+";
  };
  const handleDecrement = () => {
    count--;
    buttonUsesMap.Decrement--;
    userInputMap += "-";
    currentTryUserInputMap += "-";
  };

  const handleTryAgain = () => {
    if (currentTryUserInputMap != "") {
      attemptsUsed++;
      count = startValue;
      buttonUsesMap = { ...initialButtonUsesMap };
      userInputMap += "r";
      currentTryUserInputMap = "";
    }
  };

  $: operationButtons = [
    {
      name: "Square",
      label: "⏹️",
      operation: handleSquare,
      tries: buttonUsesMap.Square,
      display: buttonUsesMap.Square != 0,
    },
    {
      name: "Double",
      label: "x2",
      operation: handleDouble,
      tries: buttonUsesMap.Double,
      display: buttonUsesMap.Double != 0,
    },
    {
      name: "Increment",
      label: "+1",
      operation: handleIncrement,
      tries: buttonUsesMap.Increment,
      display: buttonUsesMap.Increment != 0,
    },
    {
      name: "Decrement",
      label: "-1",
      operation: handleDecrement,
      tries: buttonUsesMap.Decrement,
      display: buttonUsesMap.Decrement != 0,
    },
  ];
</script>

{#if gameState == 3 || gameState == 0}
  <!-- Where the results pop up will show -->
  <div
    class="gamenotifcontainer"
    in:fade={{ delay: 800, duration: 500 }}
    out:fade
  >
    <FinishedPopup
      open={true}
      {gameState}
      attemptsLeft={attemptsUsed}
      {userInputMap}
    />
  </div>
{/if}
<h2>Attempts Used: {attemptsUsed}</h2>
<h2>🎯 {answer}</h2>
<button
  disabled={!retryEnabled}
  on:click={handleTryAgain}
  style={"font-size: 20px;"}><p>🔄</p></button
>
<!-- When your count goes orange, the target should flash bold and then the count reset -->
<!-- <p>Operations Left: {operationsLeft}</p> -->
<h1 style="color: {countColour};">{count}</h1>

<OpButtonContainer {operationButtons} />

<!-- The game should be: Computer generates random starting number between 2 and 7, 
 it will then perform 7 operations on it which will be recorded
 the final number must not be above 777. (generator will keep going round until the number is created)
 Once the number is generated. An algorithm will find the most optimal sequence to that path
 using the available operations and that will be the star answer. Any other answer is accepted
 the number will change everyday. and the person must get to the number within seven guesses
 
 the generator must generate final numbers that have at least 7 different paths to get to them.-->

<!-- 7 tries, 7 possibilites, 7 operations -->

<!-- operations: square, double, triple, increment, decrement, half -->

<style>
  .gamenotifcontainer {
    display: flex;
    justify-content: center; /* Aligns items horizontally to the center */
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    width: auto;
    padding: 0.5em 0.6em;
    max-width: 30%;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    margin: 0.1em;
    transition: all 0.4s;
    color: white;
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
</style>
