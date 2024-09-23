<script>
  import Game777 from "./Game777.svelte";
  import Target from "./Target.svelte";

  let todaysQuestion = {
    startValue: 4,
    targetValue: 9,
    tryMap: {
      Square: 0,
      Double: 1,
      Increment: 1,
      Decrement: 0,
    },
  };
  let tutorText = [
    {title: "conumble", desc: "Welcome to conumble.", interaction: null,},
    {title: "Target", desc: "At the top of the page is",},
  ]
  let i = 0;
</script>

<div class="fullCover">
  <div class="stuffContainer">
    <div class="titleContainer">{tutorText[i].title}</div>
    <div class="imageContainer"><Target targetValue={12}></Target></div>
    <div class="descriptionContainer"><h3>{tutorText[i].desc}</h3></div>
  </div>
</div>

<style>
  .stuffContainer {
    background-color: deepskyblue;
    height: 100%;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    place-items: center;
  }
  .fullCover {
    position: absolute;
    z-index: 1000;
    background-color: azure;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .titleContainer {
    position: relative;
    display: flex;
    justify-content: center;
    background-color: burlywood;
    color: black;
    padding: 1em 0;
  }
  .imageContainer {
    /* display: flex;
    background-color: black;
    color:aliceblue;
    justify-content: center; */
    display: flex;
    flex-direction: column;
    place-items: center;
    outline: dotted violet;
    width: 100%;
    height: 70%;
  }
  .descriptionContainer {
    justify-content: center;
    position: relative;
    background-color: white;
    color: blue;
    border-radius: 1em;
    padding: 1em;
  }
</style>
