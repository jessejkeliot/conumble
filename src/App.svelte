<script lang="ts">
  import Game777 from "./Game777.svelte"; //conumero
  import QaProvider from "./QAProvider.svelte";
  import TopBar from "./TopBar.svelte";
  import FinishedPopup from "./FinishedPopup.svelte";
  import { onMount } from "svelte";
  import { getTimeFromFirstConumble } from "./timeFunction.js";
  import HelpPage from "./HelpPage.svelte";
  import HelpPageDraft from "./HelpPageDraft.svelte";
  import { blur } from "svelte/transition";
  import { copy } from "./timeFunction.js";
  import FirstTimePlayingPage from "./FirstTimePlayingPage.svelte";
  let playedEver = localStorage.getItem("lastQuestionPlayed") != null;
  let openTutorial = !playedEver;
  onMount(() => {
    const timeDiff: number = getTimeFromFirstConumble();
    const index: number = Math.floor(timeDiff / 864e5); //daily
    try {
      if (localStorage.getItem("lastQuestionPlayed") == index.toString()) {
        localStorage.setItem("playedToday", "true");
      } else {
        localStorage.setItem("playedToday", "false");
      }
    } catch (error) {
      localStorage.setItem("lastQuestionPlayed", index.toString());
    }
  });
  let popupOpen = false;
  let blurBackground = false;

  function handleBlur() {
    blurBackground = !blurBackground;
  }
  const easyQuestion = {
    startValue: 4,
    targetValue: 9,
    tryMap: {
      Square: 0,
      Double: 1,
      Increment: 1,
      Decrement: 0,
    },
  };
  function doCopy(event: CustomEvent) {
    copy(event.detail.text);
    console.log("Copied", event.detail.text);
  }

  function handleClose() {
    openTutorial = !openTutorial;
  }
</script>

<!-- changed for debuggin  -->
<!-- playedEver -->

<TopBar on:helpclick={handleClose}></TopBar>
<div class="DynamicGameUIContainer">
  <div><QaProvider on:copyevent={doCopy} /></div>
</div>
{#if openTutorial}
    <FirstTimePlayingPage on:close={handleClose}></FirstTimePlayingPage>
{/if}
<style>
  /* .whole {
    overflow:hidden;
    height: 80vh;
  } */
  @media screen and (max-width: 768px) {
    .DynamicGameUIContainer {
      margin: 0;
      /* display: inline; */
      /* flex-direction: column; */
      padding: 20px;
      justify-content: center;
      min-width: 320px;
      box-sizing: border-box;
      background-color: var(--background-color);
      outline: solid blueviolet;
      height: 79vh;
      /* overflow: hidden; */
      min-width: 300px;
    }
  }
  @media screen and (min-width: 768px) and (min-height: 720px) {
    .DynamicGameUIContainer {
      height: 90vh;
    }
  }
</style>
