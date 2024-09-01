<script lang="ts">
  const answer: number = 33;
  let count: number = 1;
  let tryMap = {
    square: 1,
    double: 2,
    increment: 3,
    decrement: 1,
  };
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

  $: operationButtons = [
    {
      name: "square",
      operation: handleSquare,
      tries: tryMap.square,
      display: tryMap.square != 0,
    },
    {
      name: "double",
      operation: handleDouble,
      tries: tryMap.double,
      display: tryMap.double != 0,
    },
    {
      name: "increment",
      operation: handleIncrement,
      tries: tryMap.increment,
      display: tryMap.increment != 0,
    },
    {
      name: "decrement",
      operation: handleDecrement,
      tries: tryMap.decrement,
      display: tryMap.decrement != 0,
    },
  ];
</script>

<h1>{count}</h1>

<!-- <button on:click={handleSquare}>Square: {tryMap.square}</button>
<button on:click={handleIncrement}>Add 1: {tryMap.increment}</button>
<button on:click={handleDecrement}>Subtract 1: {tryMap.decrement}</button>
<button on:click={handleDouble}>Double: {tryMap.double}</button> -->

{#each operationButtons as button}
  <button disabled={!button.display} on:click={button.operation}
    >{button.name}: {button.tries}</button
  >
{/each}

<!-- The game should be: Computer generates random starting number between 2 and 7, 
 it will then perform 7 operations on it which will be recorded
 the final number must not be above 777. (generator will keep going round until the number is created)
 Once the number is generated. An algorithm will find the most optimal sequence to that path
 using the available operations and that will be the star answer. Any other answer is accepted
 the number will change everyday. and the person must get to the number within seven guesses
 
 the generator must generate final numbers that have at least 7 different paths to get to them.-->

<!-- 7 tries, 7 possibilites, 7 operations -->

<!-- operations: square, double, triple, increment, decrement, half -->
