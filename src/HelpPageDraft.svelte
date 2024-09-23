<script>
  import Target from "./Target.svelte";

</script>

<div class="fullCover">
    <div class="box">
        <h2>So... This is your first time playing conumble?</h2>
        <div class="textdivider"></div>
        <h3>In this game you will have a target:</h3>
        <Target targetValue={26}></Target>
        <div class="textdivider"></div>    
        <h3>Some buttons to press</h3>
        
    </div>
</div>

<style>
  .fullCover {
    position: absolute;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.61);
    backdrop-filter: blur(5px);
    height: 100vh;
    width: 100vw;
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
    height: 60%;
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
</style>
