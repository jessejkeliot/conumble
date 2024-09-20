<script lang="ts">
  import Game777 from "./Game777.svelte"; //conumero
  import QaProvider from "./QAProvider.svelte";
  import TopBar from "./TopBar.svelte";
</script>


<TopBar></TopBar>
<div class="DynamicGameUIContainer" style={"outline: solid white"}>
  <div>  <QaProvider /></div>
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
