<script lang="ts">
  export let resultRepresentation: string;
  let me: HTMLDivElement | null = null;
  function handleClick(): void {
    if (me) {
      navigator.clipboard.writeText(resultRepresentation);
      me.innerHTML = "copied! 🔗";
    }
  }
</script>

<!-- <button on:click={handleClick}>Share</button> -->
<div class="ShareButtonContainer" on:click={handleClick}>
  <h3 bind:this={me} id="shareText">share 📤</h3>
</div>

<style>
  h3 {
  }
  div {
    height: 50%;
    width: 63%;
    background-color: rgb(0, 197, 197);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
    border-radius: 1em;
  }
</style>
