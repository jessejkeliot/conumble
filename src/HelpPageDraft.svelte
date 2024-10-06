<script>
  import Counter from "./Counter.svelte";
  import Target from "./Target.svelte";

  let buttoncount = 1;
  let value = 1;
  const maxbuttons = 1;
  function incra() {
    if (buttoncount <= maxbuttons) {
      buttoncount++;
    }
    value++;
    console.log(buttoncount);
  }
  function double() {
    value = value * 2;
  }
</script>

<div class="fullCover">
  <div class="box">
    <h2>So... this is your first time playing conumble?</h2>
    <div class="textdivider"></div>
    <h3>In this game you will have a target:</h3>
    <Target targetValue={9}></Target>
    <div class="textdivider"></div>
    <h3>Some buttons to press</h3>
    {#each new Array(buttoncount) as button, index}
      <button on:click={incra}>+</button>
    {/each}
      <div class="textdivider"></div>
      <p>Which do things to</p>

      <Counter {value} fontSize={55} color></Counter>
      <h3>The running counter</h3> 
  </div>
</div>
<!-- ONCE the player uses the buttons to get to the target. We remove this layer and start the real game. -->
<style>
  .fullCover {
    position: absolute;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.61);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    height: 100%;
    width: 100vw;
    padding: none;
    margin: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .box {
    border-radius: 20px;
    background-color: var(--secondary-color);
    width: 80%;
    max-width: 350px;
    height: 70%;
    display: block;
    padding: 2vw;
  }
  h2 {
    margin: 0.5vw;
  }
  .textdivider {
    width: 100%;
    height: 3px;
    background-color: var(--secondary-color-selected);
    margin: 0.9vh 0;
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    width: auto;
    padding: 10%;
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
  h3 {
    padding:none;
    margin: none;
  }
</style>
