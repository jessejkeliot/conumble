<script lang="ts">
  import Game777 from "./Game777.svelte"; //conumero
  import QaProvider from "./QAProvider.svelte";
  import TopBar from "./TopBar.svelte";
</script>


<TopBar></TopBar>
<div class="DynamicGameUIContainer" style={"outline: solid white"}>
  <QaProvider />
</div>
<!-- 
<style>
  .dynamicGameUIContainer {
    margin: 0;
    display: flex;
    padding: 0;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    box-sizing: border-box;
  }
</style> -->
