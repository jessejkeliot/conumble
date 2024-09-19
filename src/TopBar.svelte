<!-- We want a help option in the corner. Title in the middle. And a settings slash accordion in the other corner -->
<!-- settings could have : hint mode, give up  button, daily stats/leaderboard -->
<!-- <div class="gridcontainer">
  <div class="griditem" id="help">🔮</div>
  <div class="griditem" id="title">Conumble</div>
  <div class="griditem" id="accordion">⚜️</div>
</div> -->

<div class="flexcontainer">
    <div class="griditem" id="help">🔮</div>
    <div class="griditem" id="title">Conumble</div>
    <div class="griditem" id="accordion">⚜️</div>
  </div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Fascinate+Inline&display=swap");
  .gridcontainer {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    position: static;
    top: 0;
    left: 0;
    right: 0;
    height: 10vh;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Keeps it above other content */
    gap: 15vw;
    font-size: 2em;
  }
  .griditem {
    /* outline: solid red; */
    width: min-content;
    font-size: 3em;
    /* margin: 0.5em; */
  }
  #help {
    margin-left: 0.1em;
  }
  #title {
    font-family: "Fascinate Inline", system-ui;
  font-weight: 400;
  font-style: normal;
  }
  #accordion {
    margin-right: 0.1em;
  }
  button {
    z-index: 5;
    background-color: rgb(0, 197, 197);
    margin: 0;
    position: relative;
    cursor: pointer;
    height: 100%;
    border: none;
  }

  .flexcontainer {
    display: flex;
    flex-direction: row;
    height: 10vh;
    place-items: center;
    justify-content: space-between;
    max-width: 768px;
    background-color: #333;
  }
  @media screen and (min-width: 768px) {
    .flexcontainer {
        display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    position: static;
    top: 0;
    left: 0;
    right: 0;
    height: 10vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Keeps it above other content */
    gap: 15vw;
    font-size: 1em;
    max-width: none;
    }
  }
</style>
