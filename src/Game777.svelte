<script lang="ts">
  import OpButtonContainer from "./OpButtonContainer.svelte";
  const answer: number = 197;
  const startValue: number = 1;
  const initialTryMap = {
    square: 3,
    double: 1,
    increment: 1,
    decrement: 2,
  };
  let count: number = startValue;
  let tryMap = {...initialTryMap};
  // 0 is failed, 2 is in session, 1 is won
  $: operationsLeft = Object.values(tryMap).reduce((a, b) => a + b, 0);
  let attemptsLeft = 7;
  const handleSquare = () => {
    count = count * count;
    tryMap.square--;
    tryMap = tryMap;
  };
  const handleDouble = () => {
    count = count * 2;
    tryMap.double--;
  };
  const handleIncrement = () => {
    count++;
    tryMap.increment--;
  };
  const handleDecrement = () => {
    count--;
    tryMap.decrement--;
  };

  const handleTryAgain = () => {
    attemptsLeft--;
    count = startValue;
    tryMap = { ...initialTryMap};
  }

  $: operationButtons = [
    {
      name: "square",
      label: "⬜",
      operation: handleSquare,
      tries: tryMap.square,
      display: tryMap.square != 0,
    },
    {
      name: "double",
      label: "*2",
      operation: handleDouble,
      tries: tryMap.double,
      display: tryMap.double != 0,
    },
    {
      name: "increment",
      label: "+1",
      operation: handleIncrement,
      tries: tryMap.increment,
      display: tryMap.increment != 0,
    },
    {
      name: "decrement",
      label: "-1",
      operation: handleDecrement,
      tries: tryMap.decrement,
      display: tryMap.decrement != 0,
    },
  ];
</script>

<h2> Attempts Left: {attemptsLeft}</h2>
<h2>🎯 {answer}</h2>
<!-- add a state thing for the games state. This will make it so that once a user has won they can no longer press buttons even if there are operation hits left -->

{#if (count==answer)}
    <h3>You Won!</h3>
{:else if (operationsLeft==0 && count!=answer)}
    <h3>You Failed!</h3>
    {#if (attemptsLeft != 0 )}
      <button on:click={handleTryAgain}><p>Retry?</p></button>
    {:else}
      <h3>Try Again... Tomorrow!</h3>
    {/if} 
{/if}   
<!-- <p>Operations Left: {operationsLeft}</p> -->
<h1>{count}</h1>

<!-- <button on:click={handleSquare}>Square: {tryMap.square}</button>
<button on:click={handleIncrement}>Add 1: {tryMap.increment}</button>
<button on:click={handleDecrement}>Subtract 1: {tryMap.decrement}</button>
<button on:click={handleDouble}>Double: {tryMap.double}</button> -->
<!-- <div class="container">
{#each operationButtons as button}
  <button class="grid-item" disabled={!button.display} on:click={button.operation}
    ><p>{button.label}: {button.tries}</p></button
  >
{/each}
</div> -->

<OpButtonContainer {operationButtons}></OpButtonContainer>
<!-- The game should be: Computer generates random starting number between 2 and 7, 
 it will then perform 7 operations on it which will be recorded
 the final number must not be above 777. (generator will keep going round until the number is created)
 Once the number is generated. An algorithm will find the most optimal sequence to that path
 using the available operations and that will be the star answer. Any other answer is accepted
 the number will change everyday. and the person must get to the number within seven guesses
 
 the generator must generate final numbers that have at least 7 different paths to get to them.-->

<!-- 7 tries, 7 possibilites, 7 operations -->

<!-- operations: square, double, triple, increment, decrement, half -->
