<script lang="ts">
  import type { Question, TryMap } from "./types";
  import OpButtonContainer from "./OpButtonContainer.svelte";
  import FinishedPopup from "./FinishedPopup.svelte";
  import { fade, fly, scale } from "svelte/transition";
  import TopBar from "./TopBar.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import Counter from "./Counter.svelte";
  import ButtonWithStack from "./ButtonWithStack.svelte";
  import Target from "./Target.svelte";
  export let todaysQuestion: Question;
  export let questionIndex: number | null;
  const popupDispatch = createEventDispatcher();

  function openFinishedPopup(event: Event) {}
  onMount(() => {
    if (questionIndex) {
      localStorage.setItem("lastQuestionPlayed", questionIndex.toString());
    }
    // localStorage.setItem("square");
    // localStorage.setItem("double");
    // localStorage.setItem("increment");
    // localStorage.setItem("decrement");
  });
  const answer: number = todaysQuestion.targetValue; //this all needs to be sent in before.
  export let startValue: number = todaysQuestion.startValue;
  export let initialButtonUsesMap = todaysQuestion.tryMap;
  const noOfAttempts = 4;
  let count: number = startValue;
  let buttonUsesMap: TryMap = { ...initialButtonUsesMap };
  export let attemptsUsed = 0;
  export let gameState = 0;
  export let userInputMap = "";
  let currentTryUserInputMap = sliceCurrentTry();

  function sliceCurrentTry(): string {
    const lastRIndex = userInputMap.lastIndexOf("r");
    if (lastRIndex == -1) {
      return userInputMap;
    } else if (lastRIndex == userInputMap.length - 1) {
      //if equals
      return "";
    } else {
      return userInputMap.slice(lastRIndex + 1);
    }
  }
  // 0 is failed completely 1 is failed one attempt, 2 is in session, 3 is won
  $: localStorage.setItem("currentCount", count.toString()); //cache
  $: localStorage.setItem("square", buttonUsesMap.Square.toString());
  $: localStorage.setItem("double", buttonUsesMap.Double.toString());
  $: localStorage.setItem("increment", buttonUsesMap.Increment.toString());
  $: localStorage.setItem("decrement", buttonUsesMap.Decrement.toString());
  $: localStorage.setItem("gameState", gameState.toString());
  $: localStorage.setItem("attemptsUsed", attemptsUsed.toString());
  $: console.log(count);
  $: operationsLeft = Object.values(buttonUsesMap).reduce((a, b) => a + b, 0);
  $: retryEnabled = attemptsUsed != noOfAttempts;
  $: attempsLeft = noOfAttempts - attemptsUsed;
  $: count == answer
    ? (gameState = 3) //won
    : operationsLeft == 0
      ? attemptsUsed == noOfAttempts
        ? (gameState = 0) //totally lost
        : (gameState = 1) //attempt lost
      : (gameState = 2); //in play
  //colour of the count
  const eventColours = ["#E9210A", "#FF6700", "#262224", "#22DB31"];
  $: countColour = eventColours[gameState];
  // const countColour = eventColours[0];
  const onKeyDown = (e: KeyboardEventInit) => {
    console.log("boom!");
    switch (e.keyCode) {
      case 82:
        if (retryEnabled) {
          handleTryAgain();
        }
        break;
      case 83:
        if (buttonUsesMap.Square > 0) {
          handleSquare();
        }
        break;
      case 68:
        if (buttonUsesMap.Double > 0) {
          handleDouble();
        }
        break;
      case 70:
      if(buttonUsesMap.Increment > 0){
        handleIncrement();}
        break;
      case 71:
      if(buttonUsesMap.Decrement > 0){
        handleDecrement();}
        break;
      default:
        break;
    }
  };
  const handleSquare = () => {
    count = count * count;
    buttonUsesMap.Square--;
    buttonUsesMap = buttonUsesMap;
    // localStorage.setItem("square", buttonUsesMap.Square.toString());
    userInputMap += "^";
    currentTryUserInputMap += "^";
  };
  const handleDouble = () => {
    count = count * 2;
    buttonUsesMap.Double--;
    buttonUsesMap = buttonUsesMap;
    localStorage.setItem("double", buttonUsesMap.Double.toString());
    userInputMap += "2";
    currentTryUserInputMap += "2";
  };
  const handleIncrement = () => {
    count++;
    buttonUsesMap.Increment--;
    buttonUsesMap = buttonUsesMap;
    localStorage.setItem("increment", buttonUsesMap.Increment.toString());
    userInputMap += "+";
    currentTryUserInputMap += "+";
  };
  const handleDecrement = () => {
    count--;
    buttonUsesMap.Decrement--;
    buttonUsesMap = buttonUsesMap;
    localStorage.setItem("decrement", buttonUsesMap.Decrement.toString());
    userInputMap += "-";
    currentTryUserInputMap += "-";
  };

  const handleTryAgain = () => {
    if (currentTryUserInputMap != "" || count != todaysQuestion.startValue) {
      console.log(currentTryUserInputMap);
      attemptsUsed++;
      count = todaysQuestion.startValue;
      buttonUsesMap = { ...todaysQuestion.tryMap };
      userInputMap += "r";
      currentTryUserInputMap = "";
    }
  };

  $: operationButtons = [
    {
      name: "Square",
      label: "▢",
      operation: handleSquare,
      tries: buttonUsesMap.Square,
      display: buttonUsesMap.Square != 0,
    },
    {
      name: "Double",
      label: "×2",
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
      attemptsLeft={attempsLeft}
      {userInputMap}
      {questionIndex}
      on:copyevent
    />
  </div>
{/if}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:window on:keydown={onKeyDown} />
<Target targetValue={answer}></Target>
<!-- <button
  disabled={!retryEnabled}
  on:click={handleTryAgain}
  style={"font-size: 20px;"}><p>🔄</p></button
> -->
<ButtonWithStack
  detail={{
    operation: handleTryAgain,
    tries: attempsLeft,
    display: retryEnabled,
  }}
  label={"↻"}
  index={0}
></ButtonWithStack>
<!-- When your count goes orange, the target should flash bold and then the count reset -->
<!-- <p>Operations Left: {operationsLeft}</p> -->
<Counter state={gameState} value={count} fontSize={120}></Counter>

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
    justify-content: center;
    z-index: 1001;
  }
  .target {
    transform: scale(1.2, 1.2);
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
    background-color: var(--background-color);
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
    background-color: transparent;
    text-decoration: line-through;
    box-shadow: 0px 0px 9px 0px var(--primary-background-color);
    text-decoration: line-through;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  :focus:not(:focus-visible) {
    outline: 0;
  }
  .keyListener {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
</style>
