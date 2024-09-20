<script lang="ts">
  import Game777 from "./Game777.svelte"; //conumero
  import QaProvider from "./QAProvider.svelte";
  import TopBar from "./TopBar.svelte";
  import FinishedPopup from "./FinishedPopup.svelte";
  import { onMount } from "svelte";
  import { getTimeFromFirstConumble } from "./timeFunction.js";

  onMount(() => {
    const timeDiff: number = getTimeFromFirstConumble();
    const index: number = Math.floor(timeDiff / 864e5); //daily

    try {
      if (localStorage.getItem("lastQuestionPlayed") == index.toString()) {
        localStorage.setItem("playedToday", "true");
      }
      else {
        localStorage.setItem("playedToday", "false");
      }
    } catch (error) {
      localStorage.setItem("lastQuestionPlayed", index.toString());
    }
  });
  let popupOpen = false;
  function handleMessage(event: Event) {
    popupOpen = true;
  }
</script>

<TopBar></TopBar>
<div class="DynamicGameUIContainer" style={"outline: solid white"}>
  <div><QaProvider /></div>
</div>

<style>
  .DynamicGameUIContainer {
    margin: 0;
    display: flex;
    padding: 20px;
    justify-content: center;
    min-width: 320px;
    box-sizing: border-box;
    outline: solid blue;
  }
</style>
