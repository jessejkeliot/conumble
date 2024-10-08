<script lang="ts">
  import type { Question, TryMap } from "./types"; // Import the Question type
  import { readable } from "svelte/store";
  import { onMount } from "svelte";
  import { currentQuestion } from "./stores";
  import Game777 from "./Game777.svelte";
  import { getTimeFromFirstConumble } from "./timeFunction.js";
  
  let useCookies = true;
  let viewportHeight = 700;
  let questions: Question[] = [];
  let todaysQuestion: Question | null = null;
  let index: number | null = null;
  let playedToday: boolean = false;
  let playedEver: boolean = false;
  let startValue: number = 0;
  let initialButtonUsesMap: TryMap = {
    Square: 3,
    Double: 3,
    Increment: 3,
    Decrement: 3,
  };
  let gameState: number;
  let attemptsUsed: number;
  // Fetch the JSON data on component mount
  async function loadQuestions() {
    const response = await fetch(`${import.meta.env.BASE_URL}questions.json`);
    questions = await response.json();
    selectTodaysQuestion();
  }
  function loadHeight() {
    viewportHeight = window.screen.availHeight;
    console.log(viewportHeight);
  }
  async function loadCookies() {
    playedToday = (await localStorage.getItem("playedToday")) == "true"; //comes back as a string bool
    if (playedToday == true) {
      console.log("Reloading Game State");
      startValue = Number(localStorage.getItem("currentCount"));
      initialButtonUsesMap = {
        Square: Number(localStorage.getItem("square")),
        Double: Number(localStorage.getItem("double")),
        Increment: Number(localStorage.getItem("increment")),
        Decrement: Number(localStorage.getItem("decrement")),
      };
      gameState = Number(localStorage.getItem("gameState"));
      attemptsUsed = Number(localStorage.getItem("attemptsUsed"))
      console.log(localStorage.getItem("currentCount"));
    }
  }
  function selectTodaysQuestion(): number {
    const timeDiff: number = getTimeFromFirstConumble();
    index = Math.floor(timeDiff / 864e5); //daily
    console.log(timeDiff);
    //todaysQuestion = questions[index];
    //console.log(questions[index].startValue);
    //console.log(index);
    todaysQuestion = questions[index];
    currentQuestion.set(todaysQuestion);

    // todaysQuestion = {
    //   startValue: 3,
    //   targetValue: 45,
    //   tryMap: {
    //     Square: 1,
    //     Double: 4,
    //     Increment: 3,
    //     Decrement: 1,
    //   },
    // };
    return index;
  }
  // const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  // const firstDate = new Date(2024, 8, 10);
  // const secondDate = new Date();

  // let diffDays = Math.floor(Math.abs((firstDate - secondDate) / oneDay));

  // let date = new Date();
  // console.log(diffDays);
  // console.log(questions[diffDays].targetValue);
  // let q = {
  //   startValue: questions[diffDays].startValue,
  //   targetValue: questions[diffDays].targetValue,
  //   tryMap: {
  //     Square: questions[diffDays].tryMap.Square,
  //     Double: questions[diffDays].tryMap.Double,
  //     Increment: questions[diffDays].tryMap.Increment,
  //     Decrement: questions[diffDays].tryMap.Decrement,
  //   },
  // };
  // currentQuestion.set(q); //daily change of answer;
  onMount(() => {
    loadQuestions();
    loadCookies();
    loadHeight();
  });
  // };
</script>

<div>
  {#if todaysQuestion}
    <!-- Render the Game component and pass today's question as a prop -->
    {#if playedToday == true && useCookies}
      <Game777
        {todaysQuestion}
        questionIndex={index}
        {startValue}
        {initialButtonUsesMap}
        {gameState}
        {attemptsUsed}
        on:copyevent
      />
    {:else}
      <Game777 {todaysQuestion} questionIndex={index} on:copyevent/>
    {/if}
  {:else}
    <!-- Show a loading message or spinner while the question is being fetched -->
    <p>Loading today's question...</p>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    place-items: center;
    /* height: 900px; */
    /* position:absolute; */
  }
</style>
