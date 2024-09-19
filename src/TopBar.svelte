<!-- We want a help option in the corner. Title in the middle. And a settings slash accordion in the other corner -->
 <!-- settings could have : hint mode, give up  button, daily stats/leaderboard -->
<div class="gridcontainer">
    <div class="griditem" id="help">⁇</div>
    <div class="griditem" id="title">Conumble></div>
    <div class="griditem" id="accordion">⚜️</div>
</div>

<style>
    .gridcontainer {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        position:static;
      top: 0;
      left: 0;
      right: 0;
      height: 10vh;
      background-color: #333;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;  /* Keeps it above other content */
      gap: 15vw;
      font-size: 2em;
    }
    .griditem {
        outline: solid red;
    }
    #help {
        outline: solid chartreuse;
    }
    #title {
        outline: solid chartreuse;
    }
    #accordion {

    }

</style>

