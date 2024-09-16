<script lang="ts">

  import type { Question } from './types'; // Import the Question type
  import { readable } from "svelte/store";
  import { onMount } from "svelte";
  import { currentQuestion } from "./stores";
  import Game777 from './Game777.svelte';
  let questions : Question[] = [];
  let todaysQuestion: Question | null = null;
  // Fetch the JSON data on component mount
  async function loadQuestions() {
    const response = await fetch('/questions.json');
    questions = await response.json();
    selectTodaysQuestion();
  }

  function selectTodaysQuestion() {
    const today: Date = new Date();
    const dayOfYear: number = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (100*60*60*24));
    const index = dayOfYear % questions.length; // Ensures it wraps around when reaching the end
    //todaysQuestion = questions[index];
    console.log(questions[index].startValue);
    todaysQuestion = {
    "startValue": 3,
    "targetValue": 45,
    "tryMap": {
      "Square": 1,
      "Double": 2,
      "Increment": 3,
      "Decrement": 1
    }
  };
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
  onMount(loadQuestions);
  // };
</script> 

{#if todaysQuestion}
  <!-- Render the Game component and pass today's question as a prop -->
  <Game777 {todaysQuestion} />
{:else}
  <!-- Show a loading message or spinner while the question is being fetched -->
  <p>Loading today's question...</p>
{/if}
